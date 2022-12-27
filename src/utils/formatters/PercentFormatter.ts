import {Formatter} from '../../types';

const PercentFormatter: Formatter<number> = {
    format: (value) => `${Math.round(value * 100)}%`,
};

export default PercentFormatter;