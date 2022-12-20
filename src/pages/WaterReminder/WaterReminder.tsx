import React, {useCallback, useMemo, useState} from 'react';
import {faGear} from '@fortawesome/free-solid-svg-icons';

import {Balance, IconButton, WaterTracker, Page, WaterProgressBar} from '../../components';
import {usePreferences} from '../../hooks';

import './WaterReminder.css';

const WaterReminder = React.forwardRef<HTMLElement, WaterReminderProps>((props, forwardedRef) => {
    const {setActivePage, preferences} = props;

    const [waterConsumedInMilliliters, setWaterConsumedInMilliliters] = useState(0);
    const {goal, cupSize} = preferences;
  
    const progressBarMax = useMemo(() => (goal / (cupSize / 1000)), [goal, cupSize]);

    const handleWaterConsume = useCallback((amount: number) => {
        setWaterConsumedInMilliliters((waterConsumedInMilliliters) => waterConsumedInMilliliters + (amount * cupSize));
    }, [waterConsumedInMilliliters, setWaterConsumedInMilliliters, cupSize]);

    const goalInMilliliters = useMemo(() => Math.round(goal * 1000), [goal]);

    return (
        <Page
            ref={forwardedRef}
            header={(
                <>
                    <section className="page__header__left"></section>
                    <section className="page__header__center"></section>
                    <section className="page__header__right">
                        <IconButton icon={faGear} onClick={() => setActivePage('preferences')} />
                    </section>
                </>
            )}
            body={(
                <>
                    <section>
                        <Balance
                            target={goalInMilliliters}
                            value={waterConsumedInMilliliters}
                        />
                    </section>
                    <section>
                        <WaterTracker
                            initialValue={1}
                            onClick={handleWaterConsume}
                        />
                    </section>
                </>
            )}
            footer={(
                <WaterProgressBar value={waterConsumedInMilliliters / cupSize} max={progressBarMax} />
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