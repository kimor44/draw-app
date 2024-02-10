export const waiting = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
