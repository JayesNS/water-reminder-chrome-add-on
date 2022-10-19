import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { IconButton, NumberPicker } from '../../components';
import './Preferences.css';

const Preferences = () => {
  const [value, setValue] = useState(2.8);

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
        step={0.15}
          label="Goal"
          onChange={(newValue) => setValue(newValue)}
          value={value}
          unit="l"
        />
        <div style={{height: '50px'}}></div>
        <div style={{height: '50px'}}></div>
      </main>
      <footer className="page__footer">
      </footer>
    </section>
  );
}

export default Preferences;
