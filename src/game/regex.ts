export const THE = '(?: (?:the|ye|that|those))? ';

export function match(basis: string): RegExp {
  return new RegExp(`^${basis}$`, 'i');
}
