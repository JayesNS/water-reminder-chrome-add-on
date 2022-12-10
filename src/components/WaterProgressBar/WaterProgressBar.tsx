import { useCallback, useMemo } from 'react';

import MugMini from '../MugMini/MugMini';

import './WaterProgressBar.css';

const WaterProgressBar = (props: WaterProgressBarProps) => {
    const {max, value} = props;

    const iconAmount = useMemo(() => Math.ceil(max), [max]);

    const iconFills = useMemo(() => (
        new Array(iconAmount)
        .fill(null)
        .map((_, index) => (
            Math.min(Math.max(-(index - max + value), 0), 1)
        ))
    ), [value, iconAmount]);

    const renderIcons = useCallback(() => (
        iconFills.map((fill, index) => (
            <MugMini key={index} fillPercentage={fill} />
        ))
    ), [iconFills]);

    return (
        <section className="WaterProgressBar">
            {renderIcons()}
        </section>
    );
}

interface WaterProgressBarProps {
    max: number;
    value: number;
}

export default WaterProgressBar;