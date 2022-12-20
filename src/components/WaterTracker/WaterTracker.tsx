import { useCallback, useRef, useMemo, useState, useEffect, MutableRefObject } from 'react'
import { useFillController } from '../../hooks';

import './WaterTracker.css';

const WaterTracker = ({onClick, initialValue}: WaterTrackerProps) => {
  const [amount, setAmount] = useState<number>(1);
  const containerRef = useRef() as MutableRefObject<SVGRectElement>;
  const fillRef = useRef() as MutableRefObject<SVGRectElement>;

  const balance = useMemo(() => `${Math.round(amount * 100)}% left`, [amount])

  const handleChange = useCallback((percentFill: number) => {
    setAmount(percentFill);
    onClick(amount - percentFill);
  }, [amount])

  useEffect(() => {
    setAmount(initialValue);
  }, [initialValue]);

  const {reset} = useFillController({
    value: amount,
    mouseContainer: containerRef,
    fillContainer: fillRef,
    precision: 5,
    bothDirections: false,
    onChange: handleChange
  });

  useEffect(() => {
    if (amount <= 0) {
      reset(1000);
      setAmount(1);
    }
  }, [amount]);

  return (
    <section className="WaterTracker">
      <svg width="202"  height="162" viewBox="0 0 202 162" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Mug">
          <path id="Body" d="M46.0873 8.18296C46.0404 7.00978 47.0094 6.04873 48.1822 6.10535L99.5714 8.58621L150.962 6.10528C152.134 6.04869 153.103 7.0089 153.057 8.18159L147.316 154.079C147.273 155.152 146.391 156 145.317 156H99H53.9216C52.8481 156 51.9661 155.153 51.9232 154.08L46.0873 8.18296Z" fill="white"/>
          <rect ref={fillRef} className="WaterTracker__content" id="Content" x="49" y="10" width="101" height="142" fill="url(#paint0_linear_211_170)"/>
          <path id="Shadow" d="M155.887 9.10731C155.948 7.96223 155.036 7 153.89 7H127.029L99.894 8.44025C98.8321 8.49661 98 9.37406 98 10.4374V153C98 154.105 98.8954 155 100 155H126H146.152C147.215 155 148.092 154.169 148.149 153.107L155.887 9.10731Z" fill="#023E8A" fillOpacity="0.1"/>
          <path id="Outline" d="M153 40C219.714 2.00001 199 118.069 147.786 118.069M99.5714 8.58621L48.1822 6.10535C47.0094 6.04873 46.0404 7.00978 46.0873 8.18296L51.9232 154.08C51.9661 155.153 52.8481 156 53.9216 156H145.317C146.391 156 147.273 155.152 147.316 154.079L153.057 8.18159C153.103 7.0089 152.134 6.04869 150.962 6.10528L99.5714 8.58621Z" stroke="#EDEDE9" strokeOpacity="0.6" strokeWidth="12" strokeLinejoin="round"/>
          <rect ref={containerRef} id="Click_area" x="49" y="10" width="101" height="142" fill="transparent"></rect>
          <g id="Border">
            <path id="Body_3" d="M46.0873 8.18296C46.0404 7.00978 47.0094 6.04873 48.1822 6.10535L99.5714 8.58621L150.962 6.10528C152.134 6.04869 153.103 7.0089 153.057 8.18159L147.316 154.079C147.273 155.152 146.391 156 145.317 156H99H53.9216C52.8481 156 51.9661 155.153 51.9232 154.08L46.0873 8.18296Z" stroke="#8BC4D3" strokeWidth="8" strokeLinejoin="round"/>
            <path id="Handle" d="M153 40C219.714 2.00001 199 118.069 147.786 118.069" stroke="#8BC4D3" strokeWidth="8" strokeLinejoin="round"/>
          </g>
        </g>
        <defs>
          <linearGradient id="paint0_linear_211_170" x1="94.5" y1="156" x2="116.5" y2="88" gradientUnits="userSpaceOnUse">
            <stop stopColor="#8AD8E9"/>
            <stop offset="0.583333" stopColor="#A0DEF9"/>
          </linearGradient>
        </defs>
      </svg>
      <span className="WaterTracker__balance">{balance}</span>
    </section>
  );
};

interface WaterTrackerProps {
  onClick: (amount: number) => void;
  initialValue: number
}

export default WaterTracker