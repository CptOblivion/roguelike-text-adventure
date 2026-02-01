export type Position = [number, number];

export interface TextDisplay {
  submitMessageString(message: string);
}

// TODO: do we want to prevent accidental truthy checks on this somehow? (EG @typescript-eslint/strict-boolean-expressions )
export type FailWithReason = [succes: boolean, reason: string | undefined];
export const Success: FailWithReason = [true, undefined];

export interface EventEmitter {
  addEventListener(type: string, listener: EventListener);
}

export type EventListener = (ev: any) => any;

export type EventText = {
  text: string;
};

export type ListenerSubmitText = (ev: EventText) => any;

export const EMPTY_FUNCTION = () => {};
export type EmptyFunction = () => void;

export function nullThrows<T>(obj: T | null): T {
  if (obj == null) {
    throw new Error('Expected null to be nonnull');
  }

  return obj;
}
