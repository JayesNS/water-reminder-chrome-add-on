import { useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import './App.css';
import { Preferences, WaterReminder } from './pages';

type Page = string;

function App() {
  const waterReminder = useRef(null);
  const preferences = useRef(null);
  const pageContainer = useRef(null);

  const [activePage, setActivePage] = useState<Page>('home');

  return (
    <div className="App">
      <CSSTransition
        nodeRef={pageContainer}
        appear={true}
        in={activePage === 'home'}
        timeout={200}
        classNames="page-container"
      >
        <div ref={pageContainer} className="page-container">
          <CSSTransition
            nodeRef={waterReminder}
            appear={true}
            in={activePage === 'home'}
            timeout={200}
            classNames="water-reminder-page"
          >
            <WaterReminder
              ref={waterReminder}
              setActivePage={setActivePage}
            />
          </CSSTransition>
          <CSSTransition
            nodeRef={preferences}
            appear={true}
            in={activePage === 'preferences'}
            timeout={200}
            classNames="preferences-page"
          >
            <Preferences
              ref={preferences}
              setActivePage={setActivePage}
            />
          </CSSTransition>
        </div>
      </CSSTransition>
    </div>
  );
}

export default App;
