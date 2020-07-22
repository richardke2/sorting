function split(wholeArray) {
  /* your code here to define the firstHalf and secondHalf arrays */
  let length = wholeArray.length;
  if (length === 0 || length === 1) {
    return wholeArray;
  }
  let firstHalf = [];
  let secondHalf = [];
  let half = Math.ceil(length / 2);
  for (let x = 0; x < half; x++) {
    firstHalf.push(wholeArray[x]);
  }
  for (let y = half; y < length; y++) {
    secondHalf.push(wholeArray[y]);
  }
  return [firstHalf, secondHalf];
}

function merge(array, array2) {
  let mergedArray = [];
  let x = 0;
  let y = 0;
  if (array.length === 0 && array2.length === 0) {
    return mergedArray;
  }
  while (mergedArray.length < array.length + array2.length) {
    if (array[x] < array2[y] || y >= array2.length) {
      mergedArray.push(array[x]);
      x++;
    } else if (array[x] > array2[y] || x >= array.length) {
      mergedArray.push(array2[y]);
      y++;
    }
  }
  return mergedArray;
}

function mergeSort(array) {
  let length = array.length;
  while (length > 1) {
    let splitArray = split(array);
  }
  for (let x = 0; x < length; x++) {
    let splitArray = split(array);
    innerLength = splitArray[0].length;
  }
}
