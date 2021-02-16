function findMinAndRemoveSorted(array) {
  return array.shift();                            // return first item in array
}

function merge(arr1, arr2) {
  let res = [];                                    // define sorted array
  while (arr1.length != 0 && arr2.length != 0) {   // loop while neither subarrays are empty...
    if (arr1[0] < arr2[0]) {                       // if subarray1 < subarray2 at index [0],
      res.push(findMinAndRemoveSorted(arr1));      // pass arr1 to function to return smallest element
    } else {                                       // otherwise,
      res.push(findMinAndRemoveSorted(arr2));      // pass arr2 to function to return smallest element
    }
  }
  return res.concat(arr1).concat(arr2);            // return the subarrays as a single array
}

function mergeSort(array) {
  let middle = array.length/2;                         // define midpoint of array
  let firstHalf = array.slice(0, middle);              // define first half of array
  let secondHalf = array.slice(middle, array.length);  // define second half of array
  let sorted;                                          // declare 'sorted'
  if (array.length < 2 ) {                             // if the array contains 1 or fewer items,
    return array;                                      // return- already sorted
  } else {                                             // otherwise,
    sorted = merge(                                    // pass in each half to merge function
      mergeSort(firstHalf),
      mergeSort(secondHalf)
    );
  }
  return sorted;                                       // return sorted
}