import { useCallback, useLayoutEffect, useMemo, useRef, useState } from 'react';
import './App.css';
import MugSlider from './components/MugSlider/MugSlider';
import WaterReminder from './pages/WaterReminder/WaterReminder';
import { BackgroundEvent, DrinkEvent, SyncTimeWithUIEvent, SyncTimeWithUIResponse } from './types';

// const useActiveTab = () => {
//   const [tab, setTab] = useState<chrome.tabs.Tab | undefined>();

//   chrome.tabs && chrome.tabs.query({
//     active: true,
//     currentWindow: true
//   }, (tabs) => setTab(tabs[0]));

//   return tab;
// }

function App() {
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

  return (
    <div className="App">
      <WaterReminder />
      {/* <b>{JSON.stringify(response)}</b> */}
      {/* {timerComponent} */}
      {/* <button onClick={sendWaterReminder}>Set reminder to 30s</button> */}
    </div>
  );
}

export default App;
