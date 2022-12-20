const MINUTES_IN_HOUR = 60;

const TimeUtils = {
    getTimestampFromNumber(date: Date, value: number) {
        const hours = Math.floor(value);
        const minutes = Math.round((value - hours) * MINUTES_IN_HOUR);
        date.setHours(hours);
        date.setMinutes(minutes);
        date.setSeconds(0);
        date.setMilliseconds(0);
        return date;
    },
    getHoursFromTimestamp(date: Date) {
        const hours = date.getHours();
        const minutes = date.getMinutes();
        return hours + (minutes / MINUTES_IN_HOUR);
    },
};

export default TimeUtils;