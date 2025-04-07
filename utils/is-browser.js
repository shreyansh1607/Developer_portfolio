export const isBrowser = () => typeof window !== 'undefined' && typeof document !== 'undefined';

export const safeDocument = () => {
  if (isBrowser()) {
    return document;
  }
  return null;
};

export const safeWindow = () => {
  if (isBrowser()) {
    return window;
  }
  return null;
}; 