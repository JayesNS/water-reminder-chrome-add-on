import {useCallback} from 'react';

import MugMini from '../MugMini/MugMini';

import './WaterProgressBar.css';

const WaterProgressBar = (props: WaterProgressBarProps) => {
    const {progress} = props;

    const renderIcons = useCallback(() => (
        progress.map((fill, index) => (
            <MugMini key={index} fillPercentage={fill} />
        ))
    ), [progress]);

    return (
        <section className="WaterProgressBar">
            {renderIcons()}
        </section>
    );
};

interface WaterProgressBarProps {
    progress: number[];
}

export default WaterProgressBar;