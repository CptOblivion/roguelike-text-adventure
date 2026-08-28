export type Position = [number, number];

export interface TextDisplay {
  submitMessageString(message: string): void;
}

// TODO: do we want to prevent accidental truthy checks on this somehow? (EG @typescript-eslint/strict-boolean-expressions )
export type FailWithReason = [succes: boolean, reason: string | undefined];
export const Success: FailWithReason = [true, undefined];

export interface EventEmitter {
  addEventListener(type: string, listener: EventListener): void;
}

export type EventListener = (ev: any) => any;

export type EventText = {
  text: string;
};

export type ListenerSubmitText = (ev: EventText) => any;

export const EMPTY_FUNCTION = () => {};
export type EmptyFunction = () => void;

export function nullThrows<T>(obj: T | null, justification: string): T {
  if (obj == null) {
    throw new Error(`Expected null to be nonnull: ${justification}`);
  }

  return obj;
}

export function lastIndexOf<T>(
  arr: T[],
  matcher: (elem: T) => boolean,
  startIndex: number = arr.length - 1,
): number {
  const start = Math.max(0, Math.min(arr.length - 1, startIndex));
  for (let i = start; i >= 0; i--) {
    if (matcher(arr[i])) {
      return i;
    }
  }
  // not found
  return -1;
}

export enum EventType {
  MouseEnter = 'mouseenter',
  MouseLeave = 'mouseleave',
  MouseMove = 'mousemove',
  Click = 'click',
  MouseDown = 'mousedown',
  mouseUp = 'mouseup',
}

export function newElem(
  content: string,
  classes: string[] | null = null,
  css: string | null = null,
): HTMLElement {
  const elem = document.createElement('div');
  elem.textContent = content;

  if (css != null) {
    elem.style = css;
  }

  if (classes != null) {
    for (const c of classes) {
      elem.classList.add(c);
    }
  }

  return elem;
}

export function diffDivs(a: HTMLElement, b: HTMLElement): boolean {
  if (a.textContent !== b.textContent) return false;
  if (a.style.cssText !== b.style.cssText) return false;
  if (a.classList.length !== b.classList.length) return false;
  for (const c of a.classList) {
    if (!b.classList.contains(c)) {
      return false;
    }
  }
  return true;
}
