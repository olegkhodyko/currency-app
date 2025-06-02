export const isDigit = (char: string): boolean => {
  return /^\d$/.test(char);
};

export const isLetter = (char: string): boolean => {
  return /^[a-zA-Z]$/.test(char);
};

export const isWhitespace = (char: string): boolean => {
  return /^\s$/.test(char);
};
