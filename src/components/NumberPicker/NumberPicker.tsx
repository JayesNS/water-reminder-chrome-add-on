import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useCallback, useMemo } from 'react';
import IconButton from '../IconButton/IconButton';
import './NumberPicker.css';

type Theme = 'dark' | 'light';

const NumberPicker = (props: NumberPickerProps) => {
  const {label, max, min, onChange, value, step = 0.1, theme = 'dark', unit} = props;

  const precision = useMemo(() => (
    step.toLocaleString().split(/[.,]/)?.[1]?.length
  ), [step]);

  const valueString = useMemo(() => (
    value.toFixed(precision)
  ), [precision, value])

  const inputWidth = useMemo(() => (
    `${valueString.length}ch`
  ), [valueString]);

  const handleChange = useCallback((step: number) => {
    const newValue = +valueString + step

    if (min !== undefined && newValue < min) {
      return;
    }

    if (max !== undefined && newValue > max) {
      return;
    }

    onChange?.(newValue);
  }, [onChange, valueString, step]);

  return (
    <section className={`NumberPicker NumberPicker--${theme}`}>
      <label className="NumberPicker__label">{label}</label>
      <IconButton
        className="NumberPicker__arrow NumberPicker__arrow--left"
        icon={faAngleLeft}
        onClick={() => handleChange(-step)}
      />
      <input className="NumberPicker__input" disabled value={valueString} style={{width: inputWidth}} />
      <span  className="NumberPicker__unit">{unit}</span>
      <IconButton
        className="NumberPicker__arrow NumberPicker__arrow--right"
        icon={faAngleRight}
        onClick={() => handleChange(+step)}
      />
    </section>
  )
}

interface NumberPickerProps {
  label: string;
  max?: number;
  min?: number;
  onChange?: (value: number) => void;
  value: number;
  step?: number;
  theme?: Theme;
  unit: string;
}

export default NumberPicker;