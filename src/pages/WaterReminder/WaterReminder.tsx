import { faGear } from '@fortawesome/free-solid-svg-icons';

import MugIcon from '../../components/MugIcon/MugIcon';
import './WaterReminder.css';
import MugSlider from '../../components/MugSlider/MugSlider';
import { IconButton } from '../../components';

const WaterReminder = () => {
  return (
    <section className="WaterReminder page">
      <header className="page__header">
        <section className="WaterReminder__header__left"></section>
        <section className="WaterReminder__header__center"></section>
        <section className="WaterReminder__header__right">
          <IconButton icon={faGear} />
        </section>
      </header>
      <main className="page__body">
        <section>
          <span className="daily-balance daily-balance--negative">-200 ml</span>
        </section>
        <section>
          <MugSlider />
        </section>
      </main>
      <footer className="page__footer">
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
      </footer>
    </section>
  )
}

export default WaterReminder;