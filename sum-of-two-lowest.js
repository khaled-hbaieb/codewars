function sumTwoSmallestNumbers(numbers) {  
    let min1 = Math.min(...numbers)
    let arr = numbers.filter(item => item !== min1)
    let min2 = Math.min(...arr) 
    return (min1 + min2)
  }