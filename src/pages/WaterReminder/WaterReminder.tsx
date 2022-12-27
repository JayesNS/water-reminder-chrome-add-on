import React, {useCallback} from 'react';
import {faGear} from '@fortawesome/free-solid-svg-icons';

import {Balance, IconButton, WaterTracker, Page, WaterProgressBar} from '../../components';
import {usePreferences, useWaterTracker} from '../../hooks';

import './WaterReminder.css';

const WaterReminder = React.forwardRef<HTMLElement, WaterReminderProps>((props, forwardedRef) => {
    const {setActivePage, preferences} = props;

    const {goal, cupSize} = preferences;


    const {handleDrink, totalWaterLeft, progress, waterLeftInCup} = useWaterTracker({goal: Math.round(goal * 1000), cupSize});

    const handleWaterConsume = useCallback((waterConsumed: number) => {
        handleDrink(waterConsumed);
    }, [cupSize]);


    return (
        <Page
            ref={forwardedRef}
            header={(
                <React.Fragment>
                    <section className="page__header__left"></section>
                    <section className="page__header__center"></section>
                    <section className="page__header__right">
                        <IconButton icon={faGear} onClick={() => setActivePage('preferences')} />
                    </section>
                </React.Fragment>
            )}
            body={(
                <React.Fragment>
                    <section>
                        <Balance balance={-totalWaterLeft} />
                    </section>
                    <section>
                        <WaterTracker
                            cupSize={cupSize}
                            value={waterLeftInCup}
                            onClick={handleWaterConsume}
                        />
                    </section>
                </React.Fragment>
            )}
            footer={(
                <WaterProgressBar progress={progress} />
            )}
        />
    );
});
WaterReminder.displayName = 'WaterReminder';

interface WaterReminderProps {
  ref: React.ForwardedRef<HTMLElement>;
  setActivePage: (page: string) => void;
  preferences: ReturnType<typeof usePreferences>;
}

export default WaterReminder;