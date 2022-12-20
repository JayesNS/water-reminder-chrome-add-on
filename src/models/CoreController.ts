import {BackgroundEvent, DrinkEvent, SyncTimeWithUIEvent} from '../types';
import Timer from './Timer';

const DRINK_INTERVAL = 30;

class CoreController {
    private timer: Timer;
    private events: BackgroundEvent[] = [];
  
    constructor(private tick: number = 1000) {
        this.timer = new Timer(this.tick, this.handleTick);

        this.addListener(new SyncTimeWithUIEvent(() => ({remainingTime: DRINK_INTERVAL - this.timer.tick})));
        this.addListener(new DrinkEvent(() => {
            console.log('drinking');
            this.start();
        }));

        this.attachListeners();
    }

    private handleTick(timer: Timer): void {
        console.log(`Tick ${timer.tick}`);
    }

    private handleTimerFinished(): void {
        console.log('timer finished');
        chrome.tabs && chrome.tabs.query({
            active: true,
            currentWindow: true,
        }, (tabs) => {
            console.log('showing popup');
            console.log(tabs);
            chrome.tabs.sendMessage(tabs[0]?.id ?? 0, {type: 'SHOW_POPUP'}, (response) => {
                if (!response) return;
                console.log('Response', response);
            });
        });
    }

    addListener(event: BackgroundEvent) {
        this.events.push(event);
    }

    private attachListeners() {
        chrome.runtime.onMessage.addListener((message: BackgroundEvent, sender: chrome.runtime.MessageSender, sendResponse: (response: any) => void) => {
            const event = this.events.find(({type}) => type === message.type);
            sendResponse(event?.action?.(message));
        });
    }

    stop(): void {
        this.timer.stop();
    }

    start(): void {
        this.timer.start(DRINK_INTERVAL, this.handleTimerFinished);
    }
}

export default CoreController;