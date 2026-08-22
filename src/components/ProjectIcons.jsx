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
