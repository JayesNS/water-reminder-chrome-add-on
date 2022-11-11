import { useCallback, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import './App.css';
import { Preferences, WaterReminder } from './pages';
import { BackgroundEvent, DrinkEvent, SyncTimeWithUIEvent, SyncTimeWithUIResponse } from './types';

// const useActiveTab = () => {
//   const [tab, setTab] = useState<chrome.tabs.Tab | undefined>();

//   chrome.tabs && chrome.tabs.query({
//     active: true,
//     currentWindow: true
//   }, (tabs) => setTab(tabs[0]));

//   return tab;
// }

type Page = string;

function App() {
  const waterReminder = useRef(null);
  const preferences = useRef(null);
  // const [remainingTime, setRemainingTime] = useState(0);
  // const [response, setResponse] = useState<any>();
  // const activeTab = useActiveTab();
  // const timer = useRef<NodeJS.Timer>();

  // useLayoutEffect(() => {
  //   syncTime();
  //   timer.current = setInterval(() => {
  //     syncTime();
  //   }, 1000);
  //   return () => {
  //     clearInterval(timer.current);
  //   }
  // }, [activeTab?.id])


  // const handleDrink = useCallback(() => {
  //   setResponse('clicked');
  //   chrome.runtime.sendMessage<BackgroundEvent>({type: 'DRINK'});
  // }, []);

  // const timerComponent = useMemo(() => {
  //   return remainingTime > 0 ? (
  //     <div>
  //       Remaining Time: {remainingTime}
  //     </div>
  //   ) : (
  //     <button onClick={() => handleDrink()}>Drink!</button>
  //   );
  // }, [remainingTime, handleDrink]);

  // const syncTime = () => {
  //   chrome.runtime.sendMessage<BackgroundEvent>({type: 'SYNC_TIME'}, (response: SyncTimeWithUIResponse) => {
  //     if (!response) {
  //       return;
  //     }
  //     setResponse(response);
  //     setRemainingTime(response.remainingTime);
  //   });
  // }

  const [activePage, setActivePage] = useState<Page>('home');

  return (
    <div className="App">
      <CSSTransition nodeRef={waterReminder} appear={true} in={activePage === 'home'} timeout={200} classNames="water-reminder-page">
        <div ref={waterReminder}>
          <WaterReminder setActivePage={setActivePage} />
        </div>
      </CSSTransition>
      <CSSTransition nodeRef={preferences} appear={true} in={activePage === 'preferences'} timeout={200} classNames="preferences-page">
        <div ref={preferences}>
          <Preferences setActivePage={setActivePage} />
        </div>
      </CSSTransition>
      {/* <b>{JSON.stringify(response)}</b> */}
      {/* {timerComponent} */}
      {/* <button onClick={sendWaterReminder}>Set reminder to 30s</button> */}
    </div>
  );
}

export default App;
