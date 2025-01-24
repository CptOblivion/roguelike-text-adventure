export type Position = [number, number];

export interface TextDisplay {
  submitMessage(message: string);
}

export interface EventEmitter {
  addEventListener(type: string, listener: EventListener);
}

export type EventListener = (ev: any) => any;

export type EventText = {
  text: string;
};

export type ListenerSubmitText = (ev: EventText) => any;
