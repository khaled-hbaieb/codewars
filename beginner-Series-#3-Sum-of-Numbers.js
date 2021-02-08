function getSum( a,b ){
    var min;
    var max;
    let arr = [];
    let result = 0
    if( a === b) return a
    if(a - b > 0) {
        max = a;
        min = b
    }
    if(a - b < 0) {
        min = a;
        max = b
    }
    for(let i = min; i <= max; i++) {
    arr.push(i)
    }
    for(let i = 0; i < arr.length; i++) {
      result += arr[i]
    }
    return result
  }