class Timer {
    private timer?: NodeJS.Timer;
    private currentTick = 0;
  
    constructor(private clockSpeed: number = 1000, private onTick: (timer: Timer) => void) {}

    private get isRunning(): boolean {
        return !!this.timer;
    }

    get tick(): number {
        return this.currentTick;
    }

    stop(): void {
        if (!this.isRunning) {
            return;
        }
        clearInterval(this.timer);
        delete this.timer;
    }

    start(ticks?: number, onFinish?: () => void): void {
        if (this.timer) {
            console.log(this.isRunning);
            return;
        }
        this.currentTick = 0;
        this.timer = setInterval(() => {
            this.onTick(this);
            if (ticks && this.currentTick >= ticks) {
                this.stop();
                onFinish?.();
                return;
            }
            this.currentTick++;
        }, this.clockSpeed);
    }
}

export default Timer;