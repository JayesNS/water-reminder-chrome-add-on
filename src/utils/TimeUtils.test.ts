import TimeUtils from './TimeUtils';

describe('getTimestampFromNumber', () => {
    it('should correctly handle decimal number', () => {
        const result = TimeUtils.getTimestampFromNumber(new Date(2022, 6, 23), 12);
        const expected = new Date(2022, 6, 23, 12).getTime();
        expect(result.getTime()).toBe(expected)
    });

    it('should correctly handle float number', () => {
        const result = TimeUtils.getTimestampFromNumber(new Date(2022, 6, 23), 12.75);
        const expected = new Date(2022, 6, 23, 12, 45).getTime();
        expect(result.getTime()).toBe(expected)
    });
});

describe('getHoursFromTimestamp', () => {
    it('should correctly handle decimal number', () => {
        const result = TimeUtils.getHoursFromTimestamp(new Date(2022, 6, 23, 12));
        const expected = 12;
        expect(result).toBe(expected)
    });

    it('should correctly handle float number', () => {
        const result = TimeUtils.getHoursFromTimestamp(new Date(2022, 6, 23, 12, 15));
        const expected = 12.25;
        expect(result).toBe(expected)
    });
});