import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { IconButton } from '../../components';
import './Preferences.css';

const Preferences = () => {
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
      </main>
      <footer className="page__footer">
      </footer>
    </section>
  );
}

export default Preferences;
