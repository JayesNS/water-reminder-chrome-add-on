import React, { useCallback, useState } from 'react';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { IconButton, NumberPicker, TimeRangePicker } from '../../components';

import './Preferences.css';

const Preferences = React.forwardRef<HTMLElement, PreferencesProps>(({setActivePage}, forwardedRef) => {
  const [goal, setGoal] = useState(2.8);
  const [cupSize, setCupSize] = useState(350);
  const [timeRange, setTimeRange] = useState([8, 16])

  const handleGoalChange = useCallback((newValue: number) => setGoal(newValue), []);
  const handleCupSizeChange = useCallback((newValue: number) => setCupSize(newValue), [])

  return (
    <section ref={forwardedRef} className="Preferences page">
      <header className="page__header">
        <section className="WaterReminder__header__left">
          <IconButton icon={faArrowLeft} onClick={() => setActivePage('home')} />
        </section>
        <section className="WaterReminder__header__center"></section>
        <section className="WaterReminder__header__right"></section>
      </header>
      <main className="page__body">
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
          onChange={setTimeRange}
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
      </main>
      <footer className="page__footer">
      </footer>
    </section>
  );
});
Preferences.displayName = 'Preferences';

interface PreferencesProps {
  ref: React.ForwardedRef<HTMLElement>;
  setActivePage: (page: string) => void;
}

export default Preferences;
