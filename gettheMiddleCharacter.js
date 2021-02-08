function getMiddle(s){
    let len = s.length
    let result = ''
    if(len % 2 === 0) {
      return (result = s[Math.ceil((len - 2) / 2)] + s[Math.ceil((len - 2) / 2 + 1)])
    }
    return result = s[(len - 1) / 2]
  }