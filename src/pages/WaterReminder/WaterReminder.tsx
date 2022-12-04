import React, { useCallback, useMemo, useState } from 'react';
import { faGear } from '@fortawesome/free-solid-svg-icons';

import MugSlider from '../../components/MugSlider/MugSlider';
import { IconButton, Page } from '../../components';
import WaterProgressBar from '../../components/WaterProgressBar/WaterProgressBar';

import './WaterReminder.css';
import usePreferences from '../../hooks/usePreferences';

const WaterReminder = React.forwardRef<HTMLElement, WaterReminderProps>((props, forwardedRef) => {
  const {setActivePage, preferences} = props;

  const [waterConsumed, setWaterConsumed] = useState(0);
  const {goal, cupSize} = preferences;
  
  const progressBarMax = useMemo(() => (goal / (cupSize / 1000)), [goal, cupSize]);

  const handleWaterConsume = useCallback((amount: number) => {
    setWaterConsumed((waterConsumed) => waterConsumed + amount);
  }, [setWaterConsumed]);

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
            <span className="daily-balance daily-balance--negative">-200 ml</span>
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