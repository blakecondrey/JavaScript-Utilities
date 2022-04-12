export const first = (array, n = 1) => {
  if (n === 1) return array[0];
  return array.filter((_, index) => index < n);
};

export const last = (array, n = 1) => {
  if (n === 1) return array[array.length - 1];
  return array.filter((_, index) => array.length - index <= n);
};

export const pluck = (array, key) => {
  return array.map((element) => element[key]);
};

export const groupObjectBy = (array, key) => {
  return array.reduce((group, element) => {
    const value = element[key];
    return { ...group, [value]: [...(group[value] ?? []), element] };
  }, {});
};
