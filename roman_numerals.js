function to_roman (num) {
  // your implementation code here
  var roman = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M']
  var arab = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000]
  var result = ''
  var input = num

  for (let i=arab.length-1; i>=0; i--) {
    while(input>=arab[i]) {
      result += roman[i]
      input -= arab[i]
    }
  }
  // console.log(latin.length);

  return result
}

// Drive code
console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|———————')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
console.log('13    | XIII     | ', to_roman(13))
console.log('14    | XIV      | ', to_roman(14))
console.log('1     | I        | ', to_roman(1))
console.log('2     | II       | ', to_roman(2))
