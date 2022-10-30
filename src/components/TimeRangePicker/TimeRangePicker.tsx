import NumberPicker from '../NumberPicker/NumberPicker';

import './TimeRangePicker.css';

const TimeRangePicker = ({onChange, value}: TimeRangePickerProps) => {
  const [start, end] = value

  const floatToTime = (value: number) => {
    const [hours, minutesInDecimal] = value.toString().split('.');
    const minutes: string = minutesInDecimal
      ? (6 * Number(minutesInDecimal)).toString()
      : '00'
    return `${hours}:${minutes}`
  };

  return (
      <div className="TimeRangePicker">
        <NumberPicker
          label="start"
          theme="light"
          min={0}
          max={Math.min(end, 24)}
          onChange={(value) => onChange([value, end])}
          value={start}
          step={0.5}
          modifyReadableValue={floatToTime}
        />
        <span className="TimeRangePicker__separator">-</span>
        <NumberPicker
          label="end"
          theme="light"
          min={Math.max(start, 0)}
          max={24}
          onChange={(value) => onChange([start, value])}
          value={end}
          step={0.5}
          modifyReadableValue={floatToTime}
        />
      </div>
  );
}

interface TimeRangePickerProps {
  value: number[];
  onChange: (value: number[]) => void;
}

export default TimeRangePicker;