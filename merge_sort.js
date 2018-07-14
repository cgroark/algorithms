

function mergeArrays(a, b){
  let merged = [];
  while(a.length > 0 && b.length > 0){
    if(b[0] < a[0]){
      merged.push(b.shift())
    }else{
      merged.push(a.shift())
    }
  }
  return merged.concat(a,b)

}

// mergeArrays([1,5,8,9], [3,7,9,11,45])

function mergeSort(arr){
  if(arr.length <= 1){
    return arr
  }
  else{
    let middleIndex = Math.round((arr.length)/2)
    let left = arr.slice(0,middleIndex);
    let right = arr.slice(middleIndex, arr.length)
    let leftSorted = mergeSort(left);
    let rightSorted = mergeSort(right);
    return mergeArrays(leftSorted, rightSorted);
  }
}

mergeSort([6,8,4,6,2,7,6,5,4,78,45,23])
