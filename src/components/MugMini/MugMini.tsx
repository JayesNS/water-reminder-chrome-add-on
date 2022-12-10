import cx from 'classnames';

import './MugMini.css';

const MAX_HEIGHT = 17.5;
const MIN_HEIGHT = 2;
const INITIAL_Y = 4.5;

const MugMini = ({fillPercentage}: MugMiniProps) => {
  const height = Math.min(Math.round(MAX_HEIGHT * fillPercentage + MIN_HEIGHT), MAX_HEIGHT);
  const yPosition = INITIAL_Y + MAX_HEIGHT - height;

  const classNames = cx('MugMini', {
    disabled: fillPercentage === 0,
  });

  return (
    <svg className={classNames} width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Mug">
        <g id="Outline">
          <path id="Body" d="M2.08732 4.68296C2.04039 3.50978 3.00941 2.54873 4.18216 2.60535L9.18398 2.84681L14.1872 2.60528C15.3594 2.54869 16.3283 3.5089 16.2821 4.68159L15.652 20.6938C15.6098 21.7669 14.7275 22.6151 13.6535 22.6151H9.10735H4.7262C3.65273 22.6151 2.77071 21.7677 2.7278 20.6951L2.08732 4.68296Z" stroke="#EDEDE9" strokeWidth="4" strokeLinejoin="round"/>
          <path id="Handle" d="M16.3488 7.05943C25.2953 1.96359 22.5174 17.5285 15.6496 17.5285" stroke="#EDEDE9" strokeWidth="4" strokeLinejoin="round"/>
        </g>
        <path id="Back" d="M2.08732 4.68296C2.04039 3.50978 3.00941 2.54873 4.18216 2.60535L9.18398 2.84681L14.1872 2.60528C15.3594 2.54869 16.3283 3.5089 16.2821 4.68159L15.652 20.6938C15.6098 21.7669 14.7275 22.6151 13.6535 22.6151H9.10735H4.7262C3.65273 22.6151 2.77071 21.7677 2.7278 20.6951L2.08732 4.68296Z" fill="#FCFFF7"/>
        <rect id="Fill" className="MugMini__content" x="3" y={yPosition} width="13" height={height} fill="url(#paint0_linear_204_154)"/>
        <g id="Border">
          <path id="Body_2" d="M2.08732 4.68296C2.04039 3.50978 3.00941 2.54873 4.18216 2.60535L9.18398 2.84681L14.1872 2.60528C15.3594 2.54869 16.3283 3.5089 16.2821 4.68159L15.652 20.6938C15.6098 21.7669 14.7275 22.6151 13.6535 22.6151H9.10735H4.7262C3.65273 22.6151 2.77071 21.7677 2.7278 20.6951L2.08732 4.68296Z" stroke="#52AFC4" strokeWidth="2" strokeLinejoin="round"/>
          <path id="Handle_2" d="M16.3488 7.05943C25.2953 1.96359 22.5174 17.5285 15.6496 17.5285" stroke="#52AFC4" strokeWidth="2" strokeLinejoin="round"/>
        </g>
      </g>
      <defs>
        <linearGradient id="paint0_linear_204_154" x1="8.85644" y1="22" x2="15.794" y2="9.38261" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8AD8E9"/>
          <stop offset="0.583333" stopColor="#A0DEF9"/>
        </linearGradient>
      </defs>
    </svg>    
  )
};

interface MugMiniProps {
  fillPercentage: number
}

export default MugMini;
