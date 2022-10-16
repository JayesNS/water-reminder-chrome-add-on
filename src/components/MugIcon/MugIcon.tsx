import { useMemo } from 'react';

import './MugIcon.css';

interface MugIconProps {
  fillPercentage: number
}

const MAX_FILL = 22;

const MugIcon = ({fillPercentage}: MugIconProps) => {
  const height = useMemo(() => (
    Math.min(Math.round(MAX_FILL * fillPercentage), MAX_FILL)
  ), [fillPercentage]);

  return (
    <svg className="MugIcon" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect className="MugIcon__content" x="2" y={24 - height} width="15" height={height} fill="blue" />
      <path d="M1.08732 3.18296C1.04039 2.00978 2.00941 1.04873 3.18216 1.10535L9.57143 1.41379L15.9621 1.10528C17.1344 1.04869 18.1032 2.0089 18.057 3.18159L17.274 23.0786C17.2318 24.1518 16.3495 25 15.2756 25H9.48H3.8816C2.80813 25 1.9261 24.1525 1.8832 23.0799L1.08732 3.18296Z" fill="#FCFFF7" fill-opacity="0.75"/>
      <path d="M18 1H13.5045L9 1.24986V25H13.3448H16.7659L18 1Z" fill="#023E8A" fill-opacity="0.1"/>
      <path d="M1.08732 3.18296C1.04039 2.00978 2.00941 1.04873 3.18216 1.10535L9.57143 1.41379L15.9621 1.10528C17.1344 1.04869 18.1032 2.0089 18.057 3.18159L17.274 23.0786C17.2318 24.1518 16.3495 25 15.2756 25H9.48H3.8816C2.80813 25 1.9261 24.1525 1.8832 23.0799L1.08732 3.18296Z" stroke="#8BC4D3" stroke-width="2" stroke-linejoin="round"/>
      <path d="M18.12 6.44C28.7943 0.36 25.48 18.931 17.2857 18.931" stroke="#8BC4D3" stroke-width="2" stroke-linejoin="round"/>
      <defs>
        <linearGradient id="paint0_linear_23_150" x1="52.5" y1="154" x2="74.5" y2="86" gradientUnits="userSpaceOnUse">
        <stop stop-color="#B7DCEC"/>
        <stop offset="0.583333" stop-color="#C0E4EB"/>
        </linearGradient>
      </defs>
    </svg>
  )
};

export default MugIcon;
