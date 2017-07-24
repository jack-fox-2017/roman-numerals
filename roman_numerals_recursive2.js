function to_roman (num) {
 var roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
 var angka = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
 var result = "";


    for (var i = 0;i<=angka.length;i++) {
        if (num >= angka [i]){

            num = num-angka[i];
            if (num > 0){
              result += roman[i]+ to_roman(num+1-angka[i]);
              // return result;
              // break;
            }
            else{
              result+= roman[i];
              // return result;
            }
            // return result;
            // else {
            //   result += roman[i];
            //   //  return result;
            // }
        }

    }
 return result;

}

console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|———————')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
