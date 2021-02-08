function highAndLow(numbers){
    let arr = numbers.split(' ')
    var max = parseInt(arr[0])
    var min = parseInt(arr[0])
    let result = ''
    for(let i = 0; i < arr.length; i++) {
      if(parseInt(arr[i]) < min ) min = parseInt(arr[i]) 
      if(parseInt(arr[i]) > max) max = parseInt(arr[i]) 
    }
    return (result += max + ' ' + min) 
  }