// import { ReminderIntervalChange, SyncTime } from '../types';

// let timeToDrink = 60;
// let timeRemaining = timeToDrink;
// let timer: NodeJS.Timer;

// const drinkAction = () => {
//   alert('time to drink water');
// };

// const setWaterTimer = (timeToDrink: number) => {
//   timeRemaining = timeToDrink;
//   clearInterval(timer);
//   timer = setInterval(() => {
//     timeRemaining -= 1;
//     if (timeRemaining <= 0) {
//       clearInterval(timer);
//       drinkAction();
//     }
//   }, 1000);
// }

// const syncTime = (msg: SyncTime, sender: chrome.runtime.MessageSender, sendResponse: (response: SyncTimeResponse) => void) => {
//   if (msg.type !== 'SYNC_TIME') {
//     return;
//   }

//   const response: SyncTimeResponse = {
//     value: timeRemaining
//   }

//   sendResponse(response);
// }

const handlePopupShowEvent = (msg: {type: string}, sender: chrome.runtime.MessageSender, sendResponse: (response: any) => void) => {
  if (msg.type !== 'SHOW_POPUP') {
    return;
  }
  console.log('time to drink');
  alert('time to drink!');

  sendResponse({value: 'test'});
}

// // chrome.runtime.onMessage.addListener(messagesFromReactAppListener);
// chrome.runtime.onMessage.addListener(handleReminderIntervalChange);
chrome.runtime.onMessage.addListener(handlePopupShowEvent);
// setWaterTimer(timeToDrink);

export {};