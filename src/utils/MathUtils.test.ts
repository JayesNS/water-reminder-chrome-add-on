import MathUtils from './MathUtils';

describe('toPrecision', () => {
    it('should handle correct precision', () => {
        const result = MathUtils.toFixed(0.4567, 3);
        const expected = 0.457;
        expect(result).toBe(expected);
    });

    it('should throw error on wrong precision parameter', () => {
        expect(() => {
            MathUtils.toFixed(0.4567, -3);
        }).toThrow();
    });
});