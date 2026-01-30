import { THE, match } from './regex';

/**
 * return ActionParsed to send action to game logic, return string to print response directly with no further impact
 */
type MatcherAction = (args: { [key: string]: string }) => ActionParsed | string;

export enum Action {
  go = 0,
  get = 1,
  use = 2,
  give = 3,
  put = 4, // extends to throw, place, drop, etc
}

interface ActionParsed {
  action: Action;
  direction?: string;
  // world state will try to find a matching valid subject
  subject?: string;
  object?: string;
}

class Matcher {
  name: string;
  regex: RegExp;
  action: MatcherAction;

  constructor(name: string, pattern: RegExp, action: MatcherAction) {
    this.name = name;
    this.regex = new RegExp(pattern);
    this.action = action;
  }

  match(input: string): ActionParsed | string | null {
    const result = this.regex.exec(input);
    if (result === null) return null;
    return this.action(result.groups);
  }
}

function goDirection({ direction }: { [key: string]: string }): ActionParsed {
  direction = direction.toLowerCase();
  const shorthand = {
    n: 'north',
    s: 'south',
    e: 'east',
    w: 'west',
  };
  return { action: Action.go, direction: shorthand[direction] ?? direction };
}

const MATCHERS = [
  new Matcher('greeting', match('(hi|hello|howdy|heya)'), () => 'hi!'),

  new Matcher('go_shorthand', match('(?<direction>north|south|east|west|n|s|e|w)'), goDirection),

  new Matcher(
    'go_object',
    match(`go (?<direction>.+)${THE}(?<target>.+)`),
    ({ direction, target }) => ({
      action: Action.go,
      direction: direction,
      subject: target,
    }),
  ),

  new Matcher('go_simple', match('go (?<direction>.+)'), goDirection),

  new Matcher(
    'get',
    match(`get${THE}(?<target>.+)`), // should we add a `from` clause?
    ({ target }) => ({
      action: Action.get,
      subject: target,
    }),
  ),

  new Matcher(
    'use',
    match(`(use)${THE}(?<subject>.+) (on|with)${THE}(?<object>.+)`),
    ({ subject, object }) => ({
      action: Action.use,
      subject,
      object,
    }),
  ),

  new Matcher(
    'give',
    match(`(give)${THE}(?<subject>.+) (to)${THE}(?<object>.+)`),
    ({ subject, object }) => ({
      action: Action.give,
      subject,
      object,
    }),
  ),

  new Matcher(
    'put',
    match(`(put|place|drop|set)${THE}(?<subject>.+) (on|in)${THE}(?<object>.+)`),
    ({ subject, object }) => ({
      action: Action.put,
      subject,
      object,
    }),
  ),
];

const RESPONSES_PARSE_FAILURE: ((prompt: string) => string)[] = [
  () => 'Could you put that another way?',
  () => "I didn't get that.",
  (prompt) => `what did you mean by "${prompt}"?`,
];

export class Parser {
  parse(input: string): ActionParsed | string {
    // wipe punctuation and normalize whitespace
    // not sure how they'd get a tab in there, but why not cover it anyways
    let inputCleaned = input.replace(/(?:\.|,|\!|\?|\t| )+/g, ' ').trim();
    // console.log(`cleaned: "${inputCleaned}"`);

    for (const matcher of MATCHERS) {
      const resp = matcher.match(inputCleaned);
      if (resp) {
        return resp;
      }
    }

    return RESPONSES_PARSE_FAILURE[Math.floor(Math.random() * RESPONSES_PARSE_FAILURE.length)](
      input,
    );
  }
}
