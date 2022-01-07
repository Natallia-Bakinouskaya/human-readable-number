module.exports =
function toReadable (number) {
  let arr= [];
  if(typeof number == 'number'){
    if(number === 0){
      return 'zero';
    }
    else if(number > 0 && number < 10 ){
      return readOnes(number.toString())
    }
    else if(number > 9 && number < 20 ){
      return readElevens(number.toString())
    }
    else if(number > 19 && number < 100 ){
      
      arr.push(readTens((number.toString())[0]), readOnes((number.toString())[1]));
      return arr.join(' ').trim();
      
    }
    else if(number > 99 && number < 1000) {
      
      if(number.toString()[1] === '1'){
      
        arr.push(readOnes((number.toString())[0]), 'hundred', readElevens(number.toString()[1] + number.toString()[2]));
        return arr.join(' ').trim();
      }
      else if(number.toString()[1] === '0'){
        
        arr.push(readOnes((number.toString())[0]), 'hundred', readOnes((number.toString())[2]));
        return arr.join(' ').trim();
      } 
      else {
        
        arr.push(readOnes((number.toString())[0]), 'hundred', readTens((number.toString())[1]).trim(), readOnes((number.toString())[2]).trim());
        return arr.join(' ').trim();
      } 
    }
  }
}


function readOnes(n) {
  switch(n){
    case '1': n = 'one';
    break;
    case '2': n = 'two';
    break;
    case '3': n = 'three';
    break;
    case '4': n = 'four';
    break;
    case '5': n = 'five';
    break;
    case '6': n = 'six';
    break;
    case '7': n = 'seven';
    break;
    case '8': n = 'eight';
    break;
    case '9': n = 'nine';
    break;
    default: n = '';
    
  }
 return n;

}

function readElevens(n) {
  switch(n){
    case '10': n = 'ten';
    break;
    case '11': n = 'eleven';
    break;
    case '12': n = 'twelve';
    break;
    case '13': n = 'thirteen';
    break;
    case '14': n = 'fourteen';
    break;
    case '15': n = 'fifteen';
    break;
    case '16': n = 'sixteen';
    break;
    case '17': n = 'seventeen';
    break;
    case '18': n = 'eighteen';
    break;
    case '19': n = 'nineteen';
    break;
    default: n = '';
    
  }
 return n;

}

function readTens(n) {
  switch(n){
    case '2': n = 'twenty';
    break;
    case '3': n = 'thirty';
    break;
    case '4': n = 'forty';
    break;
    case '5': n = 'fifty';
    break;
    case '6': n = 'sixty';
    break;
    case '7': n = 'seventy';
    break;
    case '8': n = 'eighty';
    break;
    case '9': n = 'ninety';
    break;
    default: n = '';
  
  }
 return n;

}
