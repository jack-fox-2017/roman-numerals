"use strict"

function to_roman (num) {
  // your implementation code here
  debugger
  let arr = [];
  while(num !== 0){
    if (num<4){
      arr.push("I")
      num = num - 1
    }else if(num == 4){
      arr.push("IV")
      num = num - 4
    }else if (num < 9){
      arr.push("V")
      num = num - 5
    }else if (num == 9){
      //console.log(arr);
      arr.push("IX")
      num = num - 9
    }else if (num >= 40 && num < 50){
      arr.push("XL")
      num = num - 40
    }else if (num < 50){
      arr.push("X")
      num = num - 10
    }else if (num >=90 && num < 100){
      arr.push("XC")
      num = num - 90
    }else if (num < 100){
      arr.push("L")
      num = num - 50
    }else if (num >=400 && num <500){
      arr.push('CD')
      num = num - 400
    }else if (num < 500){
        arr.push("C")
        num = num - 100
    }else if (num < 1000){
      arr.push("D")
      num = num - 500
    }else if (num < 3000){
      arr.push("M")
      num = num - 1000
    }
  }
  arr = arr.join('')
return arr

}

// Drive code

console.log(to_roman(1457));

//
console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|———————')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
