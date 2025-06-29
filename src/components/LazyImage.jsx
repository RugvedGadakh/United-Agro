import React from "react"

/**
 * Reusable wrapper around native <img> that adds browser-level lazy loading and
 * allows future enhancements (e.g., placeholder blur, intersection observers).
 *
 * Props match the standard HTMLImageElement props.
 */
const LazyImage = ({ src, alt = "", className = "", ...rest }) => (
  <img loading="lazy" decoding="async" src={src} alt={alt} className={className} {...rest} />
)

export default LazyImage
