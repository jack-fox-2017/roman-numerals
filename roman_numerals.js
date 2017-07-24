var mat = [
  { n: 1000, r: 'M'},
  {n: 900, r: 'CM'},
  {n: 500, r:  'D'},
  {n: 400, r:  'CD'},
  {n: 100, r:  'C'},
  {n: 90, r: 'XC'},
  {n: 50, r: 'L'},
  {n: 40, r:  'XL'},
  {n: 10, r:  'X'},
  {n: 9, r:  'IX'},
  {n: 5, r:  'V'},
  {n: 4, r:  'IV'},
  {n: 3, r:  'III'},
  {n: 1, r: 'I'}
];

// WITH FOR:
function to_roman (num) {
  var temp = [];
  for (i=0; i<mat.length; i++) {
    if (num >= mat[i].n) {
      temp.push(mat[i].r)
      num -= mat[i].n;
    }
  }
  return temp.join('');
}


// WITH WHILE:
// function to_roman (num) {
//   var temp = [];
//   var i =0;
//
//   while (i<mat.length) {
//     if (num >= mat[i].n) {
//       temp.push(mat[i].r)
//       num -= mat[i].n;
//     }
//     i++;
//   }
//   return temp.join('');
// }

// // Drive code
console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|———————')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
