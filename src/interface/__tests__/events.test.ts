import { Box, EventManager, EventType, Position } from '../events';

class Spy {
  callbacks: { [key: string]: () => void } = {};
  callback(eventType: string): void {
    this.callbacks[eventType]();
  }
  addEventListener(eventType: string, callback: () => void) {
    this.callbacks[eventType] = callback;
  }
}

describe('event manager', () => {
  let cb1Count = 0;
  let cb2Count = 0;

  const CB1 = () => {
    cb1Count++;
  };
  const CB2 = () => {
    cb2Count++;
  };

  beforeEach(() => {
    EventManager.initialize(false);
    cb1Count = 0;
    cb2Count = 0;
  });

  test('events can be added', () => {
    const spy = new Spy();
    EventManager.registerElement(spy, new Position(0, 0));

    EventManager.addListener(EventType.Click, CB1, new Box(0, 1, 0, 1));
    EventManager.addListener(EventType.Click, CB2, new Box(0, 1, 0, 1));
    spy.callback('click');
    expect(cb1Count).toBe(1);
    expect(cb2Count).toBe(1);
  });

  test('events can be removed', () => {
    const spy = new Spy();
    EventManager.registerElement(spy, new Position(0, 0));

    EventManager.addListener(EventType.Click, CB1, new Box(0, 1, 0, 1));
    EventManager.addListener(EventType.Click, CB2, new Box(0, 1, 0, 1));

    EventManager.removeListener(EventType.Click, CB2);
    spy.callback('click');
    expect(cb1Count).toBe(1);
    expect(cb2Count).toBe(0);
  });

  test('duplicate events can be added', () => {
    const spy = new Spy();
    EventManager.registerElement(spy, new Position(0, 0));

    EventManager.addListener(EventType.Click, CB1, new Box(0, 1, 0, 1));
    EventManager.addListener(EventType.Click, CB1, new Box(0, 1, 0, 1));

    spy.callback('click');

    expect(cb1Count).toBe(2);
  });

  test('duplicate events can be removed', () => {
    const spy = new Spy();
    EventManager.registerElement(spy, new Position(0, 0));

    EventManager.addListener(EventType.Click, CB1, new Box(0, 1, 0, 1));
    EventManager.addListener(EventType.Click, CB1, new Box(0, 1, 0, 1));

    EventManager.removeListener(EventType.Click, CB1);

    spy.callback('click');

    expect(cb1Count).toBe(0);
  });
});
