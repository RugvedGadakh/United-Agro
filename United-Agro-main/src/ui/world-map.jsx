"use client";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion"
import DottedMap from "dotted-map";

export function WorldMap({
  dots = [],
  lineColor = "#0ea5e9",
  selectedPoint = null
}) {
  const svgRef = useRef(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [center, setCenter] = useState({ x: 400, y: 200 });
  
  const map = new DottedMap({ height: 100, grid: "diagonal" });

  const svgMap = map.getSVG({
    radius: 0.22,
    color: "#00000040",
    shape: "circle",
    backgroundColor: "white",
  });

  const projectPoint = (lat, lng) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (
    start,
    end
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  // Calculate bounds of all points
  const calculateBounds = () => {
    if (dots.length === 0) return { minX: 0, maxX: 800, minY: 0, maxY: 400 };
    
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    
    dots.forEach(dot => {
      const start = projectPoint(dot.start.lat, dot.start.lng);
      const end = projectPoint(dot.end.lat, dot.end.lng);
      
      minX = Math.min(minX, start.x, end.x);
      maxX = Math.max(maxX, start.x, end.x);
      minY = Math.min(minY, start.y, end.y);
      maxY = Math.max(maxY, start.y, end.y);
    });
    
    return { minX, maxX, minY, maxY };
  };

  // Zoom to fit all points
  const zoomToFit = () => {
    const bounds = calculateBounds();
    const width = bounds.maxX - bounds.minX;
    const height = bounds.maxY - bounds.minY;
    
    const scaleX = 800 / (width + 100); // Add padding
    const scaleY = 400 / (height + 100);
    const scale = Math.min(scaleX, scaleY, 3); // Max zoom level of 3
    
    const centerX = (bounds.minX + bounds.maxX) / 2;
    const centerY = (bounds.minY + bounds.maxY) / 2;
    
    setZoomLevel(scale);
    setCenter({ x: centerX, y: centerY });
  };

  // Zoom to specific point
  const zoomToPoint = (lat, lng) => {
    const point = projectPoint(lat, lng);
    setZoomLevel(2.5);
    setCenter({ x: point.x, y: point.y });
  };

  useEffect(() => {
    if (selectedPoint) {
      zoomToPoint(selectedPoint.lat, selectedPoint.lng);
    } else {
      zoomToFit();
    }
  }, [selectedPoint, dots]);

  return (
    <div className="w-full aspect-[2/1] dark:bg-white bg-white relative font-sans overflow-hidden">
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
        alt="world map"
        height="495"
        width="1056"
        draggable={false} />
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
        style={{
          transform: `scale(${zoomLevel}) translate(${(400 - center.x) / zoomLevel}px, ${(200 - center.y) / zoomLevel}px)`,
          transition: 'transform 0.8s ease-in-out'
        }}>
        
        {/* Clip path to hide areas outside the focus region */}
        <defs>
          <clipPath id="focusClip">
            <rect x="0" y="0" width="800" height="400" />
          </clipPath>
        </defs>

        <g clipPath="url(#focusClip)">
          {dots.map((dot, i) => {
            const startPoint = projectPoint(dot.start.lat, dot.start.lng);
            const endPoint = projectPoint(dot.end.lat, dot.end.lng);
            return (
              <g key={`path-group-${i}`}>
                <motion.path
                  d={createCurvedPath(startPoint, endPoint)}
                  fill="none"
                  stroke="url(#path-gradient)"
                  strokeWidth="1"
                  initial={{
                    pathLength: 0,
                  }}
                  animate={{
                    pathLength: 1,
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.5 * i,
                    ease: "easeOut",
                  }}
                  key={`start-upper-${i}`}></motion.path>
              </g>
            );
          })}

          <defs>
            <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
              <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>

          {dots.map((dot, i) => (
            <g key={`points-group-${i}`}>
              <g key={`start-${i}`}>
                <circle
                  cx={projectPoint(dot.start.lat, dot.start.lng).x}
                  cy={projectPoint(dot.start.lat, dot.start.lng).y}
                  r="3"
                  fill={lineColor} />
                <circle
                  cx={projectPoint(dot.start.lat, dot.start.lng).x}
                  cy={projectPoint(dot.start.lat, dot.start.lng).y}
                  r="3"
                  fill={lineColor}
                  opacity="0.5">
                  <animate
                    attributeName="r"
                    from="3"
                    to="12"
                    dur="1.5s"
                    begin="0s"
                    repeatCount="indefinite" />
                  <animate
                    attributeName="opacity"
                    from="0.5"
                    to="0"
                    dur="1.5s"
                    begin="0s"
                    repeatCount="indefinite" />
                </circle>
              </g>
              <g key={`end-${i}`}>
                <circle
                  cx={projectPoint(dot.end.lat, dot.end.lng).x}
                  cy={projectPoint(dot.end.lat, dot.end.lng).y}
                  r="3"
                  fill={lineColor} />
                <circle
                  cx={projectPoint(dot.end.lat, dot.end.lng).x}
                  cy={projectPoint(dot.end.lat, dot.end.lng).y}
                  r="3"
                  fill={lineColor}
                  opacity="0.5">
                  <animate
                    attributeName="r"
                    from="3"
                    to="12"
                    dur="1.5s"
                    begin="0s"
                    repeatCount="indefinite" />
                  <animate
                    attributeName="opacity"
                    from="0.5"
                    to="0"
                    dur="1.5s"
                    begin="0s"
                    repeatCount="indefinite" />
                </circle>
              </g>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}
