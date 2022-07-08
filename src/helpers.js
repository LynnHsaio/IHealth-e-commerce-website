const getUniqueVals = (array, property) => {
  const uniqueValues = new Set(array.map((item) => item[property]).flat());
  return ["全部", ...Array.from(uniqueValues)];
};

const getMaxNumber = (array) => {
  return Math.max(...array);
};

export { getUniqueVals, getMaxNumber };
