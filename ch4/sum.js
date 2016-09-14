// sum :: [Number] -> Number 
function sum(arr) {
  var total = arr.reduce(function(prev, curr) {
    return prev + curr;
  });
  return total;
}

console.log(sum(range(1, 10)));
// → 55