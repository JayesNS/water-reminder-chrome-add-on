import cx from 'classnames';

import './Balance.css';

const DEFAULT_UNIT = 'ml';

const Balance = (props: BalanceProps) => {
    const {balance, unit = DEFAULT_UNIT} = props;

    const classNames = cx('daily-balance', {
        'daily-balance--negative': balance < 0,
        'daily-balance--positive': balance >= 0,
    });
    return (
        <span className={classNames}>
            {balance} {unit}
        </span>
    );
};

interface BalanceProps {
    balance: number;
    unit?: string;
}

export default Balance;
