function convertToRoman(num) {
  let result = '';
  
  let symbols = ['I','V','X','L','C','D','M'];
  num = String(num);
  let lenNum = num.length;
  let startIndex;
  switch (lenNum) {
    case 1:
      startIndex = 0;
      break;
    case 2:
      startIndex = 2;
      break;
    case 3:
      startIndex = 4;
      break;
    case 4:
      startIndex = 6;
      break;
  }
  for (let i = 0; i < lenNum; i++) {
    switch (num[i]) {
      case '1':
        result += symbols[startIndex];
        break;
      case '2':
        result += symbols[startIndex];
        result += symbols[startIndex];
        break;
      case '3':
        result += symbols[startIndex];
        result += symbols[startIndex];
        result += symbols[startIndex];
        break;
      case '4':
        result += symbols[startIndex];
        result += symbols[startIndex + 1];
        break;
      case '5':
        result += symbols[startIndex + 1];
        break;
      case '6':
        result += symbols[startIndex + 1];
        result += symbols[startIndex];
        break;
      case '7':
        result += symbols[startIndex + 1];
        result += symbols[startIndex];
        result += symbols[startIndex];
        break;
      case '8':
        result += symbols[startIndex + 1];
        result += symbols[startIndex];
        result += symbols[startIndex];
        result += symbols[startIndex];
        break;
      case '9':
        result += symbols[startIndex];
        result += symbols[startIndex + 2];
        break;
      case '0':
        result += '';
        break;
    }

    startIndex -= 2;
  }

  return result;
 }