import cx from 'classnames';
import {Formatter} from '../../types';

import './Balance.css';

const Balance = (props: BalanceProps) => {
    const {balance, formatter} = props;

    const classNames = cx('daily-balance', {
        'daily-balance--negative': balance < 0,
        'daily-balance--positive': balance >= 0,
    });
    return (
        <span className={classNames}>
            {formatter.format(balance)}
        </span>
    );
};

interface BalanceProps {
    balance: number;
    formatter: Formatter<number>;
}

export default Balance;
