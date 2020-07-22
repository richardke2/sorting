function bubbleSort(array) {

    /* your code here */
    if (array.length === 0 && array.length === 1) return array;
    let length = array.length;
    let i = 0;
    while (length > 0){
        if(array[i]>array[i+1]){
            let swap = array[i];
            array[i] = array[i+1];
            array[i+1]=swap;
        }
        if(i === length-1){
            i = 0;
            length--;
        } 
        else i++;
    }
    return array;
  }