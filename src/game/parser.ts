/**
 * return ActionParsed to send action to game logic, return string to print response directly with no further impact
 */
type MatcherAction = (args: RegExpMatchArray) => ActionParsed | string;

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
    return this.action(result);
  }
}

function goDirection([, direction]): ActionParsed {
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
  new Matcher('greeting', /^(hi|hello|howdy|heya)$/i, () => 'hi!'),
  new Matcher('go_shorthand', /^(north|south|east|west|n|s|e|w)$/i, goDirection),
  new Matcher(
    'go_object',
    /^go (.+)(?: (?:the|ye|that|those))? (.+)$/,
    ([, direction, target]) => ({ action: Action.go, direction: direction, subject: target })
  ),
  new Matcher('go_simple', /^go (.+)/i, goDirection),
  new Matcher(
    'get',
    /^get(?: (?:the|ye|that|those))? (.+)$/, // should we add a `from` clause?
    ([, target]) => ({
      action: Action.get,
      subject: target,
    })
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
    console.log(`cleaned: "${inputCleaned}"`);

    for (const matcher of MATCHERS) {
      const resp = matcher.match(inputCleaned);
      if (resp) {
        return resp;
      }
    }

    return RESPONSES_PARSE_FAILURE[Math.floor(Math.random() * RESPONSES_PARSE_FAILURE.length)](
      input
    );
  }
}
