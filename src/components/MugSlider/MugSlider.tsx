import {useState } from 'react'
import useFillOnMouseMove from '../../hooks/useFillOnMouseMove';
import './MugSlider.css';

const MugSlider = () => {
  const [amount, setAmount] = useState(0);
  useFillOnMouseMove({
    selector: '.MugSlider',
    fillSelector: '.MugSlider__content',
    precision: 5,
    onClick(position) {
      setAmount(position.y);
    }
  });

  return (
    <div className="MugSlider">
      <div className="MugSlider__content" style={{top: `${amount}px`}}>
        {amount}
      </div>
    </div>
  )
}

export default MugSlider