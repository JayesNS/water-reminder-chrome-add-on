import React, { useCallback, useState } from 'react';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { IconButton, NumberPicker, Page, TimeRangePicker } from '../../components';

import './Preferences.css';
import usePreferences from '../../hooks/usePreferences';

const Preferences = React.forwardRef<HTMLElement, PreferencesProps>((props, forwardedRef) => {
  const {preferences, setActivePage} = props;
  const {
    cupSize,
    goal,
    handleCupSizeChange,
    handleGoalChange,
    handleTimeRangeChange,
    timeRange
  } = preferences;

  return (
    <Page
      ref={forwardedRef}
      header={(
        <>
          <section className="page__header__left">
            <IconButton icon={faArrowLeft} onClick={() => setActivePage('home')} />
          </section>
          <section className="page__header__center"></section>
          <section className="page__header__right"></section>
        </>
      )}
      body={(
        <>
          <NumberPicker
            label="Goal"
            min={0}
            onChange={handleGoalChange}
            value={goal}
            step={0.1}
            unit="l"
          />
          <TimeRangePicker
            value={timeRange}
            onChange={handleTimeRangeChange}
          />
          <NumberPicker
            label="Cup size"
            min={0}
            onChange={handleCupSizeChange}
            value={cupSize}
            step={50}
            theme="light"
            unit="ml"
          />
        </>
      )}
    />
  );
});
Preferences.displayName = 'Preferences';

interface PreferencesProps {
  ref: React.ForwardedRef<HTMLElement>;
  setActivePage: (page: string) => void;
  preferences: ReturnType<typeof usePreferences>;
}

export default Preferences;
