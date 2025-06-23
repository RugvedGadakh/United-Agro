"use client";
import { WorldMap } from "../ui/world-map";
import { motion } from "framer-motion"
import { Globe, TrendingUp } from "lucide-react";
import { useState } from "react";
import { hasFlag } from "country-flag-icons";
import "country-flag-icons/react/3x2";

export function WorldMapDemo() {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const exportCountries = [
    { name: "Russia", countryCode: "RU", region: "Europe/Asia", coordinates: { lat: 61.5240, lng: 105.3188 } },
    { name: "Germany", countryCode: "DE", region: "Europe", coordinates: { lat: 51.1657, lng: 10.4515 } },
    { name: "France", countryCode: "FR", region: "Europe", coordinates: { lat: 46.2276, lng: 2.2137 } },
    { name: "Dubai", countryCode: "AE", region: "Middle East", coordinates: { lat: 25.2048, lng: 55.2708 } },
    { name: "Saudi Arabia", countryCode: "SA", region: "Middle East", coordinates: { lat: 23.8859, lng: 45.0792 } },
    { name: "UAE", countryCode: "AE", region: "Middle East", coordinates: { lat: 25.2048, lng: 55.2708 } },
    { name: "Oman", countryCode: "OM", region: "Middle East", coordinates: { lat: 21.4735, lng: 55.9754 } },
    { name: "Iran", countryCode: "IR", region: "Middle East", coordinates: { lat: 32.4279, lng: 53.6880 } },
    { name: "Iraq", countryCode: "IQ", region: "Middle East", coordinates: { lat: 33.2232, lng: 43.6793 } },
    { name: "Nepal", countryCode: "NP", region: "Asia", coordinates: { lat: 28.3949, lng: 84.1240 } },
    { name: "Sri Lanka", countryCode: "LK", region: "Asia", coordinates: { lat: 7.8731, lng: 80.7718 } },
  ];

  const doubledExportCountries = [...exportCountries, ...exportCountries];

  const resetMap = () => {
    setSelectedCountry(null);
  };

  return (
    <section className="section features-section">
      <div className="container">
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="feature-icon mx-auto mb-6">
            <Globe size={36} />
          </div>
          <h2 className="section-title">International Reach</h2>
          <p className="section-subtitle">
            Our premium frozen food products are exported to countries across the globe, 
            bringing farm-fresh goodness to international markets while maintaining the highest quality standards.
          </p>
        </motion.div> */}

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16 mb-12">
          {/* Map on the left - Made bigger and end-to-end */}
          <motion.div 
            className="w-full lg:w-3/4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {selectedCountry ? `Focused on ${selectedCountry.name}` : 'Global Export Routes'}
              </h3>
              {selectedCountry && (
                <button
                  onClick={resetMap}
                  className="text-sm text-green-600 hover:text-green-700 font-medium"
                >
                  Reset View
                </button>
              )}
            </div>
            <div className="w-full rounded-2xl border border-black overflow-hidden">
              <WorldMap
                dots={exportCountries.map(country => ({
                  start: { lat: 20.5937, lng: 78.9629 }, // India
                  end: country.coordinates,
                }))}
                lineColor="#10b981"
                selectedPoint={selectedCountry ? selectedCountry.coordinates : null}
              />
            </div>
          </motion.div>

          {/* Content on the right */}
          <motion.div 
            className="w-full lg:w-1/4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <TrendingUp className="text-green-600" size={24} />
                  Global Export Network
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We have established a robust international distribution network, 
                  ensuring our premium frozen vegetables and corn reach customers 
                  worldwide while maintaining freshness and quality throughout the journey.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Sliding Flag Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Export Destinations</h3>

          {/* Flag Strip Container */}
          <div className="relative group overflow-hidden bg-white rounded-2xl shadow-lg border-2 border-gray-100">
            <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
              {doubledExportCountries.map((country, index) => (
                <div
                  key={`${country.name}-${index}`}
                  className={`flex-shrink-0 min-w-[160px] p-6 text-center cursor-pointer transition-all duration-200 ${
                    selectedCountry?.countryCode === country.countryCode
                      ? 'bg-green-100 border-2 border-green-300' 
                      : 'hover:bg-green-50'
                  }`}
                  onClick={() => setSelectedCountry(country)}
                >
                  <div className="w-16 h-10 mx-auto mb-3">
                    {hasFlag(country.countryCode) && (
                      <img
                        src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${country.countryCode}.svg`}
                        alt={`${country.name} flag`}
                        className="w-full h-full object-contain"
                      />
                    )}
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">{country.name}</h4>
                  <p className="text-xs text-gray-500">{country.region}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
