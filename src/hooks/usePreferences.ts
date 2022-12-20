import {useState} from 'react';
import TimeUtils from '../utils/TimeUtils';

const DefaultPreferences = {
    GOAL: 2.8,
    CUP_SIZE: 350,
    TIME_RANGE_START: TimeUtils.getTimestampFromNumber(new Date(), 8),
    TIME_RANGE_END: TimeUtils.getTimestampFromNumber(new Date(), 16),
};

const usePreferences = () => {
    const [goal, setGoal] = useState<number>(DefaultPreferences.GOAL);
    const [cupSize, setCupSize] = useState<number>(DefaultPreferences.CUP_SIZE);
    const [timeRange, setTimeRange] = useState([DefaultPreferences.TIME_RANGE_START, DefaultPreferences.TIME_RANGE_END]);

    const handleGoalChange = setGoal;
    const handleCupSizeChange = setCupSize;
    const handleTimeRangeChange = setTimeRange;

    return {
        cupSize,
        goal,
        timeRange,
        handleCupSizeChange,
        handleGoalChange,
        handleTimeRangeChange,
    };
};

export default usePreferences;
