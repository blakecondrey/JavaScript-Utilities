export const memoize = (callBack) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);

    const result = callBack(...args);
    cache.set(key, result);
    return result;
  };
};
