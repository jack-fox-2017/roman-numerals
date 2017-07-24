function to_roman (num) {
  // your implementation code here
  // let roman = ["I", "IV", "V", "IX", "X"]
  // let number = [1, 4, 5, 9, 10]
  let roman = ["M","CM","D","CD","C","XC","L","XL","X", "IX", "V", "IV", "I"]
  let number = [1000,900,500,400,100,90,50,40,10, 9, 5, 4, 1]

  var temp = '';
  // let input = num.split()
  for(let i = 0; i < number.length; i++){
    // if (num >= number[i]){
    //   while(num >= number[i]){
    //     temp += roman[i]
    //     num -=number[i]
    //     // return temp
    //   }
    // }
    while(num >= number[i]){
      // if(num>=number[i]){
        temp+=roman[i]
        num -= number[i]
      // }
    }
  }
  return temp
}




// Drive code
console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|———————')
console.log('3     | III      | ', to_roman(3))
console.log('4     | IV       | ', to_roman(5))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
console.log('1646  | MDCXLVI  | ', to_roman(2080))
