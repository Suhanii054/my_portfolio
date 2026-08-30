import React from 'react'

const shared = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

// Forecast line — actual trend into a dashed prediction, for FutureLens
export const ForecastIcon = ({ className }) => (
  <svg viewBox="0 0 160 80" className={className} {...shared}>
    <line x1="12" y1="66" x2="12" y2="14" strokeOpacity="0.3" />
    <line x1="12" y1="66" x2="148" y2="66" strokeOpacity="0.3" />
    <polyline points="16,56 42,44 68,50 94,26" />
    <polyline points="94,26 116,18 144,10" strokeDasharray="4 5" />
    {[
      [16, 56],
      [42, 44],
      [68, 50],
      [94, 26],
    ].map(([cx, cy]) => (
      <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2.4" fill="currentColor" stroke="none" />
    ))}
    <circle cx="144" cy="10" r="2.4" fill="none" />
  </svg>
)

// Facial landmarks + scan brackets, for the deepfake / vision transformer project
export const VisionIcon = ({ className }) => (
  <svg viewBox="0 0 160 80" className={className} {...shared}>
    <path d="M20 22 V12 H30" />
    <path d="M140 22 V12 H130" />
    <path d="M20 58 V68 H30" />
    <path d="M140 58 V68 H130" />
    <ellipse cx="80" cy="40" rx="26" ry="32" strokeOpacity="0.5" />
    <line x1="80" y1="14" x2="80" y2="66" strokeDasharray="2 5" strokeOpacity="0.4" />
    <line x1="46" y1="40" x2="114" y2="40" strokeDasharray="2 5" strokeOpacity="0.4" />
    {[
      [68, 32],
      [92, 32],
      [80, 44],
      [70, 54],
      [90, 54],
    ].map(([cx, cy]) => (
      <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2" fill="currentColor" stroke="none" />
    ))}
  </svg>
)

// Cart + storefront, for the e-commerce platform
export const CartIcon = ({ className }) => (
  <svg viewBox="0 0 160 80" className={className} {...shared}>
    <path d="M30 24 H44 L54 54 H108 L120 30 H50" />
    <circle cx="60" cy="64" r="5" />
    <circle cx="100" cy="64" r="5" />
    <path d="M22 16 H30 L34 24" strokeOpacity="0.6" />
    <path d="M64 8 L80 20 L96 8" strokeOpacity="0.35" />
  </svg>
)

// Power grid + energy bolt, for the Adani energy forecasting dashboard
export const GridIcon = ({ className }) => (
  <svg viewBox="0 0 160 80" className={className} {...shared}>
    {[36, 80, 124].map((x) => (
      <line key={`v-${x}`} x1={x} y1="14" x2={x} y2="66" strokeOpacity="0.25" />
    ))}
    {[22, 40, 58].map((y) => (
      <line key={`h-${y}`} x1="24" y1={y} x2="136" y2={y} strokeOpacity="0.25" />
    ))}
    <polyline points="70,14 58,42 82,42 68,66" strokeWidth="2" />
    {[
      [36, 22],
      [124, 40],
      [80, 58],
    ].map(([cx, cy]) => (
      <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2.4" fill="currentColor" stroke="none" />
    ))}
  </svg>
)

// Map heatmap + location pin, for the Flipkart traffic-violation project
export const TrafficIcon = ({ className }) => (
  <svg viewBox="0 0 160 80" className={className} {...shared}>
    <rect x="24" y="14" width="112" height="52" rx="4" strokeOpacity="0.3" />
    <path d="M24 40 H136 M52 14 V66 M96 14 V66" strokeOpacity="0.2" />
    <circle cx="72" cy="34" r="14" strokeOpacity="0.35" />
    <circle cx="72" cy="34" r="7" strokeOpacity="0.6" />
    <path d="M112 30 a7 7 0 1 0 -14 0 c0 6 7 14 7 14 s7 -8 7 -14 z" />
    <circle cx="105" cy="30" r="2.4" fill="currentColor" stroke="none" />
  </svg>
)

// Cloud + linked service nodes, for the multi-cloud quiz platform
export const CloudIcon = ({ className }) => (
  <svg viewBox="0 0 160 80" className={className} {...shared}>
    <path d="M56 40 a14 14 0 0 1 27 -5 a10 10 0 0 1 13 12 h-38 a11 11 0 0 1 -2 -7 z" transform="translate(0 -8)" />
    <line x1="60" y1="40" x2="48" y2="56" strokeOpacity="0.5" />
    <line x1="80" y1="42" x2="80" y2="56" strokeOpacity="0.5" />
    <line x1="100" y1="40" x2="112" y2="56" strokeOpacity="0.5" />
    {[
      [48, 60],
      [80, 60],
      [112, 60],
    ].map(([cx, cy]) => (
      <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="4" fill="currentColor" stroke="none" />
    ))}
  </svg>
)

// Knowledge graph — linked nodes around a hub, for the Cortex GraphRAG platform
export const GraphIcon = ({ className }) => (
  <svg viewBox="0 0 160 80" className={className} {...shared}>
    <g strokeOpacity="0.5">
      <line x1="80" y1="40" x2="44" y2="18" />
      <line x1="80" y1="40" x2="122" y2="20" />
      <line x1="80" y1="40" x2="34" y2="60" />
      <line x1="80" y1="40" x2="118" y2="60" />
      <line x1="44" y1="18" x2="122" y2="20" />
      <line x1="34" y1="60" x2="118" y2="60" />
    </g>
    {[
      [44, 18],
      [122, 20],
      [34, 60],
      [118, 60],
    ].map(([cx, cy]) => (
      <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3" fill="currentColor" stroke="none" />
    ))}
    <circle cx="80" cy="40" r="6" />
    <circle cx="80" cy="40" r="2.5" fill="currentColor" stroke="none" />
  </svg>
)

// EEG / signal waveform, for the published research paper
export const WaveIcon = ({ className }) => (
  <svg viewBox="0 0 160 80" className={className} {...shared}>
    <line x1="10" y1="40" x2="150" y2="40" strokeOpacity="0.25" />
    <polyline points="10,40 28,40 36,18 44,58 52,40 68,40 74,30 80,46 86,40 104,40 112,20 120,56 128,40 150,40" />
    {[36, 80, 120].map((cx) => (
      <circle key={cx} cx={cx} cy="12" r="2" fill="currentColor" stroke="none" opacity="0.6" />
    ))}
  </svg>
)
