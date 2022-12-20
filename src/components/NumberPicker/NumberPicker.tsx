import {faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {useCallback, useMemo} from 'react';
import {Themed} from '../../types';
import IconButton from '../IconButton/IconButton';
import './NumberPicker.css';

const NumberPicker = (props: NumberPickerProps) => {
    const {label, max, min, onChange, value, modifyReadableValue, step = 0.1, theme = 'dark', unit} = props;

    const precision = useMemo(() => (
        step.toString().split('.')?.[1]?.length
    ), [step]);

    const valueString = useMemo(() => (
        modifyReadableValue
            ? modifyReadableValue(value)
            : value.toFixed(precision)
    ), [modifyReadableValue, precision, value]);

    const inputWidth = useMemo(() => (
        `${valueString.length}ch`
    ), [valueString]);

    const handleChange = useCallback((step: number) => {
        const newValue = +value + step;

        if (min !== undefined && newValue < min) {
            onChange?.(min);
            return;
        }

        if (max !== undefined && newValue > max) {
            onChange?.(max);
            return;
        }

        onChange?.(newValue);
    }, [max, min, onChange, valueString, step]);

    const renderUnit = useCallback(() => (
        unit ? <span  className="NumberPicker__unit">{unit}</span> : null
    ), [unit]);

    return (
        <section className={`NumberPicker NumberPicker--${theme}`}>
            <label className="NumberPicker__label">{label}</label>
            <IconButton
                className="NumberPicker__arrow NumberPicker__arrow--left"
                icon={faAngleLeft}
                onClick={() => handleChange(-step)}
                disabled={min !== undefined ? value <= min : false}
            />
            <div className="NumberPicker__value">
                <input className="NumberPicker__input" disabled value={valueString} style={{width: inputWidth}} />
                {renderUnit()}
            </div>
            <IconButton
                className="NumberPicker__arrow NumberPicker__arrow--right"
                icon={faAngleRight}
                onClick={() => handleChange(+step)}
                disabled={max !== undefined ? value >= max : false}
            />
        </section>
    );
};

interface NumberPickerProps extends Themed {
  label: string;
  max?: number;
  min?: number;
  onChange?: (value: number) => void;
  value: number;
  step?: number;
  unit?: string;
  modifyReadableValue?: (originalValue: number) => string
}

export default NumberPicker;