function to_roman (num) {
  // your implementation code here
  var obj = {
  	1: 'I',
  	5: 'V',
  	10: 'X',
  	50: 'L',
  	100: 'C',
  	500: 'D',
  	1000: 'M'
  }

  var result = ''
  var split = num.toString().split('');

  for (var i = 0; i < split.length; i++) {

  	var nilai = Math.pow(10,(split.length - 1 - i)) //1, 10, 100, 1000, dst
  	var digit = Number(split[i])
  	switch(digit) {
  		case 1:
  		case 5:
  			result += obj[digit * nilai]
  			break;
  		case 4:
  		case 9:
  			result += obj[nilai] + obj[(digit + 1) * nilai]
  			break;
  		case 0:
  			break;
  		default:
  			var repeatRoman = ''
  			var repeater = digit < 5 ? digit : Math.abs(digit - 5)

  			for (var j = 0; j < repeater; j++) {
  				repeatRoman += obj[nilai]
  			} 

  			if (digit === 2 || digit === 3) {
  				result += repeatRoman
  			} else {
  				result += obj[5 * nilai] + repeatRoman
  			}
  			break;
  	}
  }

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