import {useMemo} from 'react';

import TimeUtils from '../../utils/TimeUtils';
import NumberPicker from '../NumberPicker/NumberPicker';

import './TimeRangePicker.css';

const TimeRangePicker = ({onChange, value}: TimeRangePickerProps) => {
    const floatToTime = (value: number) => {
        const [hours, minutesInDecimal] = value.toString().split('.');
        const minutes: string = minutesInDecimal
            ? (6 * Number(minutesInDecimal)).toString()
            : '00';
        return `${hours}:${minutes}`;
    };

    const numericValues = useMemo(() => ({
        start: TimeUtils.getHoursFromTimestamp(value[0]),
        end: TimeUtils.getHoursFromTimestamp(value[1]),
    }), [value]);

    return (
        <div className="TimeRangePicker">
            <NumberPicker
                label="start"
                theme="light"
                min={0}
                max={Math.min(numericValues.end, 24)}
                onChange={(start) => onChange([TimeUtils.getTimestampFromNumber(value[0], start), value[1]])}
                value={numericValues.start}
                step={0.5}
                modifyReadableValue={floatToTime}
            />
            <span className="TimeRangePicker__separator">-</span>
            <NumberPicker
                label="end"
                theme="light"
                min={Math.max(numericValues.start, 0)}
                max={24}
                onChange={(end) => onChange([value[0], TimeUtils.getTimestampFromNumber(value[1], end)])}
                value={numericValues.end}
                step={0.5}
                modifyReadableValue={floatToTime}
            />
        </div>
    );
};

interface TimeRangePickerProps {
  value: Date[];
  onChange: (value: Date[]) => void;
}

export default TimeRangePicker;