// range :: (Number, Number, Number) -> [Number]
function range(start, end, step) {
  var results = [];
  if (step == null) {
    step = 1;
  }
  if (step > 0) {
    for (var i = start; i <= end; i += step) {
      results.push(i);
    }
  } else {
    for (var i = start; i >= end; i += step) {
      results.push(i);
    }
  }
  return results;
}

console.log(range(1, 10, 1));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//console.log(range(5, 2, -1));
// → [5, 4, 3, 2]