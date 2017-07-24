function to_roman (num) {
  hasil = []

  while (num > 0) {
    if(num > 0 && num < 4){
      hasil.push('I');
      num -= 1;
    } else if (num === 4) {
      hasil.push('IV');
      num -= 4;
    } else if (num >= 5 && num < 9) {
      hasil.push('V')
      num -= 5
    } else if (num === 9) {
      hasil.push('IX')
      num -= 9
    } else if (num >= 10 && num < 40) {
      hasil.push('X')
      num -= 10
    } else if (num >= 40 && num < 50) {
      hasil.push('XL')
      num -= 40
    } else if (num >= 50 && num < 90) {
      hasil.push('L')
      num -= 50
    } else if (num >= 90 && num < 100) {
      hasil.push('XC')
      num -= 90
    } else if (num >= 100 && num < 400) {
      hasil.push('C')
      num -= 100
    } else if (num >= 400 && num < 500) {
      hasil.push('CD')
      num -= 400
    } else if (num >= 500 && num < 900) {
      hasil.push('D')
      num -= 500
    } else if (num >= 900 && num < 1000) {
      hasil.push('CM')
      num -= 900
    } else if (num >= 1000 && num < 3000) {
      hasil.push('M')
      num -= 1000
    }

  }
  return hasil.join('')
  // your implementation code here
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
console.log(to_roman(975));
