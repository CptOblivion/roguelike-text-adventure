export class Box {
  top: number;
  bottom: number;
  left: number;
  right: number;

  constructor(left: number, top: number, right: number, bottom: number) {
    this.top = top;
    this.bottom = bottom;
    this.left = left;
    this.right = right;
  }
}

export class Position {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

export enum EventType {
  MouseEnter = 'mouseenter',
  MouseLeave = 'mouseleave',
  MouseMove = 'mousemove',
  Click = 'click',
  MouseDown = 'mousedown',
  mouseUp = 'mouseup',
}

const eventTypes = Object.values(EventType);

export type EventCallback = (e: Event) => void;

export class Event {
  public eventType: EventType;
  public position: Position;

  constructor(eventType: EventType, position: Position) {
    this.eventType = eventType;
    this.position = position;
  }
}

type CallbackWrapper = {
  box: Box;
  callback: EventCallback;
};

interface Element {
  addEventListener(eventType: string, callback: () => void): void;
}

export class EventManager {
  private static instance: EventManager;

  private events: { [key in EventType]?: CallbackWrapper[] } = {};

  private constructor(throwOnDuplicate: boolean = true) {
    if (throwOnDuplicate && EventManager.instance != null) {
      throw new Error('Attempted to initialize event manager but a manager already exists!');
    }
    EventManager.instance = this;
    eventTypes.forEach((eventType) => {
      this.events[eventType] = [];
    });
  }

  public static initialize(throwOnDuplicate: boolean = true) {
    new EventManager(throwOnDuplicate);
  }

  public static addListener(eventType: EventType, callback: EventCallback, box: Box): void {
    EventManager.instance.events[eventType]?.push({ box, callback });
  }

  public static removeListener(eventType: EventType, callback: EventCallback): void {
    EventManager.instance.events[eventType] = EventManager.instance.events[eventType]?.filter(
      (wrapper) => wrapper.callback != callback,
    );
  }

  private static eventCallback(eventType: EventType, position: Position): void {
    // TODO: given an html element, map back to the richText that populated it
    // TODO: generically handle target, position

    for (const wrapper of EventManager.instance.events[eventType] ?? []) {
      if (
        position.x < wrapper.box.top ||
        position.x > wrapper.box.bottom ||
        position.y < wrapper.box.left ||
        position.y > wrapper.box.right
      ) {
        continue;
      }
      wrapper.callback(new Event(eventType, position));
    }
  }

  public static registerElement(elem: Element, position: Position): void {
    eventTypes.forEach((eventType) => {
      elem.addEventListener(eventType, () => {
        this.eventCallback(eventType, position);
      });
    });
  }
}
