//-------------------------- cara 1 ---------------------------//
// function to_roman (num) {
//   // your implementation code here
//   var decimal = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
//   var roman = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
//   // var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
//   // var roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
//   var temp = '';
//   var tampung_roman ="";
//   for(let i=decimal.length; i>=0; i--)
//   {
//     debugger
//     while(num >= decimal[i])
//     {
//       if(num == decimal[i])
//       {
//         temp +=roman[i];
//         num -= decimal[i];
//       }
//       else if(decimal[i]<num)
//       {
//         temp += roman[i];
//         num -= decimal[i];
//       }
//     }
//   }
//   return temp;
//
// }
//
// // Drive code
// console.log('My totally sweet testing script for new roman\n')
// console.log('input | expected | actual')
// console.log('——————|——————————|———————')
// console.log('4     | IV       | ', to_roman(12))
// console.log('9     | IX       | ', to_roman(9))
// console.log('13    | XIII     | ', to_roman(13))
// console.log('1453  | MCDLIII  | ', to_roman(1453))
// console.log('1646  | MDCXLVI  | ', to_roman(1646))


//------------------------cara kedua-------------------------//

function to_roman (num) {
  // your implementation code here
  // var decimal = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
  // var roman = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
  var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  var roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  var temp = '';
  var tampung_roman ="";
  for(let i=0; i<decimal.length; i++)
  {
    debugger
    while(num >= decimal[i])
    {
      if(num == decimal[i])
      {
        temp +=roman[i];
        num -= decimal[i];
      }
      else if(decimal[i]<num)
      {
        temp += roman[i];
        num -= decimal[i];
      }
    }
  }
  return temp;

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
