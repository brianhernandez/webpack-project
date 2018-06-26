function reverseAnyInput(value) {
  if (value === undefined) {return console.log('Sorry, please enter a number, string or an array.');}

  if (typeof value === 'number') {
    // console.log('The reverse of number ' + value + ' is:');
    return parseFloat(value.toString().split("").reverse().join(""));
  } else {
    // console.log('The reverse of string/array ' + value + ' is:');
    return value.toString().split("").reverse().join("");
  }
}

console.log('This is from reverse.js file.');

export { reverseAnyInput };
