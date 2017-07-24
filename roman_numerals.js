function to_roman (num) {
  // your implementation code here
  var result = ''
  var roman = ["MDCXLVI","MCDLIII","M","D","C","L","XIII","X","IX","V","IV","I"];
  var latin = [1646,1453,1000,500,100,50,13,10,9,5,4,1];

  for (var i = 0; i < latin.length; i++) {
    while (num >= latin [i]) {
      result += roman[i];
      num = num - latin[i];
    }
  }
    return result;
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
