
exports.min = function min (array) {
  
  if (typeof array == 'object' && array.length > 0) {
    return Math.min.apply(null, array);
  }
    return 0
  
}

exports.max = function max (array) {
  if (typeof array == 'object' && array.length > 0) {
    return Math.max.apply(null, array);
  } 
    return 0
  }


exports.avg = function avg (array) {
  let total = 0;
  if (typeof array == 'object' && array.length > 0) {
    for (let i = 0; i != array.length; i++) {
      total += array[i]
    }
    
    return (total / array.length)  

  }
  return 0;
}
