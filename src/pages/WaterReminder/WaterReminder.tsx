import React from 'react';
import { faGear } from '@fortawesome/free-solid-svg-icons';

import MugIcon from '../../components/MugIcon/MugIcon';
import MugSlider from '../../components/MugSlider/MugSlider';
import { IconButton, Page } from '../../components';

import './WaterReminder.css';

const WaterReminder = React.forwardRef<HTMLElement, WaterReminderProps>(({setActivePage}, forwardedRef) => {
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
            <MugSlider />
          </section>
        </>
      )}
      footer={(
        <>
          <section className="WaterProgressBar">
            <MugIcon fillPercentage={0} />
            <MugIcon fillPercentage={0} />
            <MugIcon fillPercentage={0} />
            <MugIcon fillPercentage={0} />
            <MugIcon fillPercentage={1} />
            <MugIcon fillPercentage={1} />
            <MugIcon fillPercentage={1} />
            <MugIcon fillPercentage={1} />
          </section>
        </>
      )}
    />
  );
});
WaterReminder.displayName = 'WaterReminder';

interface WaterReminderProps {
  ref: React.ForwardedRef<HTMLElement>;
  setActivePage: (page: string) => void;
}

export default WaterReminder;