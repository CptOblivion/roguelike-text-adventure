export type Position = [number, number];

export interface TextDisplay {
  submitMessage(message: string);
}

// TODO: do we want to prevent accidental truthy checks on this somehow? (EG @typescript-eslint/strict-boolean-expressions )
export type FailWithReason = [succes: boolean, reason: string];
export const Success: FailWithReason = [true, undefined];

export interface EventEmitter {
  addEventListener(type: string, listener: EventListener);
}

export type EventListener = (ev: any) => any;

export type EventText = {
  text: string;
};

export type ListenerSubmitText = (ev: EventText) => any;
