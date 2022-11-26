import { useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import './App.css';
import usePreferences from './hooks/usePreferences';
import { Preferences, WaterReminder } from './pages';

type Page = string;

function App() {
  const waterReminderRef = useRef(null);
  const preferencesRef = useRef(null);
  const pageContainerRef = useRef(null);

  const preferences = usePreferences();

  const [activePage, setActivePage] = useState<Page>('home');

  return (
    <div className="App">
      <CSSTransition
        nodeRef={pageContainerRef}
        appear={true}
        in={activePage === 'home'}
        timeout={200}
        classNames="page-container"
      >
        <div ref={pageContainerRef} className="page-container">
          <CSSTransition
            nodeRef={waterReminderRef}
            appear={true}
            in={activePage === 'home'}
            timeout={200}
            classNames="water-reminder-page"
          >
            <WaterReminder
              ref={waterReminderRef}
              setActivePage={setActivePage}
            />
          </CSSTransition>
          <CSSTransition
            nodeRef={preferencesRef}
            appear={true}
            in={activePage === 'preferences'}
            timeout={200}
            classNames="preferences-page"
          >
            <Preferences
              ref={preferencesRef}
              setActivePage={setActivePage}
              preferences={preferences}
            />
          </CSSTransition>
        </div>
      </CSSTransition>
    </div>
  );
}

export default App;
