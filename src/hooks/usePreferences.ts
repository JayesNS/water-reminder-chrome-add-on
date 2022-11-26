import { useState } from 'react';

const usePreferences = () => {
    const [goal, setGoal] = useState(2.8);
    const [cupSize, setCupSize] = useState(350);
    const [timeRange, setTimeRange] = useState([8, 16])

    const handleGoalChange = setGoal;
    const handleCupSizeChange = setCupSize;
    const handleTimeRangeChange = setTimeRange;

    return {
        cupSize,
        goal,
        timeRange,
        handleCupSizeChange,
        handleGoalChange,
        handleTimeRangeChange
    };
};

export default usePreferences;
