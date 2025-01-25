type MatcherAction = (args: RegExpMatchArray) => string;

class Matcher {
  name: string;
  regex: RegExp;
  action: MatcherAction;

  constructor(name: string, pattern: RegExp, action: MatcherAction) {
    this.name = name;
    this.regex = new RegExp(pattern);
    this.action = action;
  }

  match(input: string): string | null {
    const result = this.regex.exec(input);
    if (result === null) return null;
    return this.action(result);
  }
}

function goDirection([, direction]): string {
  direction = direction.toLowerCase();
  const shorthand = {
    n: 'north',
    s: 'south',
    e: 'east',
    w: 'west',
  };
  return `you go ${shorthand[direction] ?? direction}`;
}

const MATCHERS = [
  new Matcher('go_shorthand', /^(north|south|east|west|n|s|e|w)$/i, goDirection),
  new Matcher(
    'go_object',
    /^go (.+)(?: (?:the|ye|that|those))? (.+)$/,
    ([, direction, target]) => `you go ${direction} the ${target}`
  ),
  new Matcher('go_simple', /^go (.+)/i, goDirection),
  new Matcher(
    'get',
    /^get(?: (?:the|ye|that|those))? (.+)$/, // should we add a `from` clause?
    ([, target]) => `you pick up the ${target}`
  ),
];

const RESPONSES_PARSE_FAILURE: ((prompt: string) => string)[] = [
  () => 'Could you put that another way?',
  () => "I didn't get that.",
  (prompt) => `what did you mean by "${prompt}"?`,
];

export class Parser {
  parse(input: string): string {
    // wipe punctuation and normalize whitespace
    // not sure how they'd get a tab in there, but why not cover it anyways
    let inputCleaned = input.replace(/(?:\.|,|\!|\?|\t| )+/g, ' ').trim();
    console.log(`cleaned: "${inputCleaned}"`);

    // TODO: plug into game logic
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
