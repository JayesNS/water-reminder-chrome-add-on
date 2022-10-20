import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { IconButton, NumberPicker } from '../../components';
import './Preferences.css';

const Preferences = () => {
  const [goal, setGoal] = useState(2.8);
  const [cupSize, setCupSize] = useState(350);

  return (
    <section className="Preferences page">
      <header className="page__header">
        <section className="WaterReminder__header__left">
          <IconButton icon={faArrowLeft} />
        </section>
        <section className="WaterReminder__header__center"></section>
        <section className="WaterReminder__header__right"></section>
      </header>
      <main className="page__body">
        <NumberPicker
          label="Goal"
          min={0}
          onChange={(newValue) => setGoal(newValue)}
          value={goal}
          step={0.1}
          unit="l"
        />
        <div style={{height: '50px'}}></div>
        <NumberPicker
          label="Cup size"
          min={0}
          onChange={(newValue) => setCupSize(newValue)}
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
}

export default Preferences;
