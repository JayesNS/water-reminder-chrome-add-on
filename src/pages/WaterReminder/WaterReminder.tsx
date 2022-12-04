import React, { useCallback, useMemo, useState } from 'react';
import { faGear } from '@fortawesome/free-solid-svg-icons';

import { Balance, IconButton, MugSlider, Page, WaterProgressBar } from '../../components';
import usePreferences from '../../hooks/usePreferences';

import './WaterReminder.css';

const WaterReminder = React.forwardRef<HTMLElement, WaterReminderProps>((props, forwardedRef) => {
  const {setActivePage, preferences} = props;

  const [waterConsumed, setWaterConsumed] = useState(0);
  const {goal, cupSize} = preferences;
  
  const progressBarMax = useMemo(() => (goal / (cupSize / 1000)), [goal, cupSize]);

  const handleWaterConsume = useCallback((amount: number) => {
    setWaterConsumed((waterConsumed) => waterConsumed + (amount * (cupSize / 1000)));
  }, [setWaterConsumed, cupSize]);

  const goalInMilliliters = useMemo(() => Math.round(goal * 1000), [goal]);
  const waterConsumedInMilliliters = useMemo(() => Math.round(waterConsumed * 1000), [waterConsumed]);

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
            <MugSlider onClick={handleWaterConsume} />
          </section>
        </>
      )}
      footer={(
        <WaterProgressBar value={waterConsumed} max={progressBarMax} />
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