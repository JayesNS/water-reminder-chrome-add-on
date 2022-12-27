import {useCallback, useMemo, useState} from 'react';

const useWaterTracker = (config: WaterTrackerConfig): WaterTracker => {
    const {goal, cupSize} = config;
    const [waterConsumed, setWaterConsumed] = useState(0);

    const progressBarMax = useMemo(() => (goal / cupSize), [goal, cupSize]);

    const progress = useMemo(() => (
        new Array(Math.ceil(progressBarMax))
            .fill(null)
            .map((_, index) => (
                Math.min(Math.max(-(index - progressBarMax + (waterConsumed / cupSize)), 0), 1)
            ))
    ), [progressBarMax, waterConsumed, cupSize]);

    const waterLeftInCup = useMemo(() => {
        const currentProgress = [...progress].reverse();
        const currentCup = currentProgress.find((amount: number) => amount > 0) ?? 0;
        return currentCup * cupSize;
    }, [progress, cupSize]);

    const handleDrink = useCallback((waterConsumed: number) => {
        setWaterConsumed((totalWaterConsumed) => totalWaterConsumed + waterConsumed);
    }, [setWaterConsumed]);

    return {
        totalWaterLeft: goal - waterConsumed,
        handleDrink,
        waterLeftInCup,
        progress,
    };
};

interface WaterTrackerConfig {
    goal: number;
    cupSize: number;
}

interface WaterTracker {
    totalWaterLeft: number;
    waterLeftInCup: number;
    handleDrink: (waterConsumed: number) => void;
    progress: number[];
}

export default useWaterTracker;
