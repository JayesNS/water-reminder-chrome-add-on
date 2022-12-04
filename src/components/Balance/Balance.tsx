import { useMemo } from 'react';
import cx from 'classnames';

import './Balance.css';

const Balance = (props: BalanceProps) => {
    const {target, value} = props;

    const balance = useMemo(() => (
        Math.round(value - target)
      ), [value, target]);

    const classNames = cx('daily-balance', {
        'daily-balance--negative': balance < 0,
        'daily-balance--positive': balance >= 0
    });
    return (
        <span className={classNames}>
            {balance} ml
        </span>
    );
}

interface BalanceProps {
    target: number;
    value: number; 
}

export default Balance;
