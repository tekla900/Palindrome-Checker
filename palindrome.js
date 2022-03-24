function palindrome(str) {
  let arr = str.replace(/[\W_]/g, '').toLowerCase().split('');
  let copy = [...arr];
  let reversedArr = copy.reverse();
  if (arr.join('') == reversedArr.join('')) {
    return true;
  } else {
    return false;
  }
}

palindrome("0_0 (: /-\ :) 0-0");
