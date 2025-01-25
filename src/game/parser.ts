type MatcherArgs = string[];

type MatcherAction = (args: MatcherArgs) => any;

class Matcher {
  name: string;
  regex: RegExp;
  action: MatcherAction;

  constructor(name: string, pattern: RegExp, action: MatcherAction) {
    this.name = name;
    this.regex = new RegExp(pattern);
    this.action = action;
  }
}

const MATCHERS = [
  new Matcher(
    'get',
    /^get(?: (?:the|ye|that|those))? (.+)$/i, // should we add a `from` clause?
    (args: MatcherArgs) => {}
  ),
  new Matcher('go_object', /^go (.+)(?: (?:the|ye|that|those))? (.+)$/i, (args: MatcherArgs) => {}),
  new Matcher('go_simple', /^go (.+)/i, (args: MatcherArgs) => {}),
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
    // loop over matchers
    // call action for matched matcher
    // pass result to world state
    // print response
    console.log(`cleaned: "${inputCleaned}"`);
    // return inputCleaned;

    return RESPONSES_PARSE_FAILURE[Math.floor(Math.random() * RESPONSES_PARSE_FAILURE.length)](
      input
    );
  }
}
