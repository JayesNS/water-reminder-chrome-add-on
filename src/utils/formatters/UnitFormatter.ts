import {Formatter} from '../../types';
import MathUtils from '../MathUtils';

interface UnitFormatterOptions {
    unit?: string;
    floatPrecision?: number;
    decimalPrecision?: number;
}

const DEFAULT_OPTIONS: Required<UnitFormatterOptions> = {
    unit: 'ml',
    floatPrecision: 0,
    decimalPrecision: 5,
};

const UnitFormatter: Formatter<number, UnitFormatterOptions> = {
    format: (
        value,
        {
            unit = DEFAULT_OPTIONS.unit,
            decimalPrecision = DEFAULT_OPTIONS.decimalPrecision,
            floatPrecision = DEFAULT_OPTIONS.floatPrecision,
        } = {},
    ) => (
        `${MathUtils.roundToPrecision(value, decimalPrecision).toFixed(floatPrecision)} ${unit}`
    ),
};

export default UnitFormatter;