export const splitUntilSecondSlash = (input: string): string => {
  const parts = input.split("/");

  return parts.length > 2 ? parts.slice(2, parts.length).join("/") : input;
};
