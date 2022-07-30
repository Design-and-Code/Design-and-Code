export const isSSR = typeof document === 'undefined';

export const clsx = (...classes: (string | boolean)[]) => {
  return classes.filter((c) => Boolean(c)).join(' ');
};
