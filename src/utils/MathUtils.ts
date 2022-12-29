const MathUtils = {
    toFixed(num: number, precision: number): number {
        return Number(num.toFixed(precision));
    },
    roundToPrecision(num: number, precision: number) {
        if (precision <= 0) {
            return num;
        }
        return Math.round(num / precision) * precision;
    },
    clamp(value: number, min: number, max: number): number {
        return Math.min(Math.max(value, min), max);
    },
};

export default MathUtils;
