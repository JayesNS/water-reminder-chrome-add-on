import CoreController from '../models/CoreController';

// let timeToDrink = 60;
// let timeRemaining = timeToDrink;
// let timer: NodeJS.Timer;

// const drinkAction = () => {
//   console.log('time to drink water');
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
//   console.log('sync time');
//   if (msg.type !== 'SYNC_TIME') {
//     return;
//   }

//   const response: SyncTimeResponse = {
//     value: timeRemaining
//   }

//   sendResponse(response);
// }

// const handleReminderIntervalChange = (msg: ReminderIntervalChange, sender: chrome.runtime.MessageSender, sendResponse: (response: any) => void) => {
//   if (msg.type !== 'SET_INTERVAL') {
//     return;
//   }

//   timeToDrink = msg.value;
//   setWaterTimer(timeToDrink);

//   sendResponse({});
// }

// // chrome.runtime.onMessage.addListener(messagesFromReactAppListener);
// chrome.runtime.onMessage.addListener(handleReminderIntervalChange);
// chrome.runtime.onMessage.addListener(syncTime);
// setWaterTimer(timeToDrink);

const controller = new CoreController();

controller.start();

export {};