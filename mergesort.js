function split(wholeArray) {
  /* your code here to define the firstHalf and secondHalf arrays */
  let aLength = wholeArray.length;
  if (aLength === 0 || aLength === 1) {
    return wholeArray;
  }
  let firstHalf = [];
  let secondHalf = [];
  let half = Math.ceil(aLength / 2);
  for (let x = 0; x < half; x++) {
    firstHalf.push(wholeArray[x]);
  }
  for (let y = half; y < aLength; y++) {
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
    if(y >= array2.length){
      mergedArray.push(array[x]);
      x++;
      continue;
    }
    else if(x >= array.length){
      mergedArray.push(array2[y]);
      y++;
      continue;
    }
    if (array[x] < array2[y]) {
      mergedArray.push(array[x]);
      x++;
    } else if (array[x] > array2[y]) {
      mergedArray.push(array2[y]);
      y++;
    }
  }
  return mergedArray;
}

function mergeSort(array) {
  if (array.length == 1) return array;
  let splittedArray = split(array);
  let splitOne = splittedArray[0];
  let splitTwo = splittedArray[1];
  return merge(mergeSort(splitOne),mergeSort(splitTwo))
}
