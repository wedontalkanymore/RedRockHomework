let Arr = [[1, [2, 3], 4], [5, [6, 7], 8, 9]];
function flatten(arr) {
  return arr.reduce(
    (result, item) => {
      if (Array.isArray(item)) {
        return result.concat(flatten(item));
      } else {
        return result.concat(item);
      }
    },
    []
  );
}
console.log(flatten(Arr));