import {useLayoutEffect, useState } from 'react'
import useFillOnMouseMove from '../../hooks/useFillOnMouseMove';
import './MugSlider.css';

const MAX_HEIGHT = 150;

const MugSlider = () => {
  const [amount, setAmount] = useState<number>(1);
  const {reset: resetFill} = useFillOnMouseMove({
    selector: '.MugSlider__body',
    fillSelector: '.MugSlider__content',
    precision: 5,
    lockPosition: true,
    onClick(position) {
      setAmount(1 - (position.yPercent ?? 0));
    }
  });

  useLayoutEffect(() => {
    if (amount === 0) {
      setAmount(1);
      resetFill();
    }
  }, [amount]);

  return (
    <section className="MugSlider">
      <svg width="200" height="158" viewBox="0 0 200 158" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M46.0873 6.18296C46.0404 5.00978 47.0094 4.04873 48.1822 4.10535L99.5714 6.58621L150.962 4.10528C152.134 4.04869 153.103 5.0089 153.057 6.18159L147.316 152.079C147.273 153.152 146.391 154 145.317 154H99H53.9216C52.8481 154 51.9661 153.153 51.9232 152.08L46.0873 6.18296Z" fill="#FCFFF7" fill-opacity="0.75"/>
        <rect className="MugSlider__content" x="49" y={4 + MAX_HEIGHT - MAX_HEIGHT * amount} width="101" height={MAX_HEIGHT * amount} fill="url(#paint0_linear_32_394)"/>
        <path d="M155.887 7.10731C155.948 5.96223 155.036 5 153.89 5H127.029L99.894 6.44025C98.8321 6.49661 98 7.37406 98 8.43744V151C98 152.105 98.8954 153 100 153H126H146.152C147.215 153 148.092 152.169 148.149 151.107L155.887 7.10731Z" fill="#023E8A" fill-opacity="0.1"/>
        <path className="MugSlider__body" d="M46.0873 6.18296C46.0404 5.00978 47.0094 4.04873 48.1822 4.10535L99.5714 6.58621L150.962 4.10528C152.134 4.04869 153.103 5.0089 153.057 6.18159L147.316 152.079C147.273 153.152 146.391 154 145.317 154H99H53.9216C52.8481 154 51.9661 153.153 51.9232 152.08L46.0873 6.18296Z" stroke="#8BC4D3" stroke-width="8" stroke-linejoin="round" fill="transparent" />
        <path d="M153 38C219.714 1.04904e-05 199 116.069 147.786 116.069" stroke="#8BC4D3" stroke-width="8" stroke-linejoin="round"/>
        <defs>
          <linearGradient id="paint0_linear_32_394" x1="94.5" y1="154" x2="116.5" y2="86" gradientUnits="userSpaceOnUse">
            <stop stop-color="#B7DCEC"/>
            <stop offset="0.583333" stop-color="#C0E4EB"/>
          </linearGradient>
        </defs>
      </svg>
      <span className="MugSlider__balance">{Math.round(amount * 100)}% left</span>
    </section>
  );

  return (
    <div className="MugSlider">
      <div className="MugSlider__content" style={{top: `${amount}px`}}>
        {amount}
      </div>
    </div>
  )
}

export default MugSlider