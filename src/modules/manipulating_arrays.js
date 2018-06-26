function getItems(arr) {
  console.log('The array is: ' + arr.toString());
  return arr;
}

function addItem(obj, arr) {
  console.log('The added object is: ' + obj.toString());
  arr.push(obj)
  console.log('The new array is: ' + arr.toString());
  return arr;
}

function removeItem(obj, arr) {

  for ( var i = 0; i < arr.length; i++) {
    console.log(arr[i].id, obj.id);
    if (arr[i].id === obj.id) {
      console.log('The removed object is: ' + obj.toString());
      arr.splice(arr[i], 1);
      console.log('The new, spliced array is: ' + arr.toString());
      return true;
    } if ( i === arr.length - 1 ) {
      console.log('The object was not found in the array.');
      return false;
    }
  }
}

export { getItems, addItem, removeItem };
