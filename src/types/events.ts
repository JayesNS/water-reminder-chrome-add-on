export interface BackgroundEvent<P = object, R = object> {
  type: string,
  action?: (payload?: P) => R | void
}

export interface SyncTimeWithUIResponse {
  remainingTime: number
}
export class SyncTimeWithUIEvent implements BackgroundEvent<undefined, SyncTimeWithUIResponse> {
    type = 'SYNC_TIME';

    constructor(public action: () => SyncTimeWithUIResponse) {}
}

export class DrinkEvent implements BackgroundEvent {
    type = 'DRINK';

    constructor(public action: () => void) {}
}