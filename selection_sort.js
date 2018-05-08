function selectionSort(arr){
  for(var i=0; i<arr.length -1; i++){
    var min = i;
    for(var j=i+1; j<arr.length; j++){
      if(arr[j] < arr[min]){
        min = j;
      }
    }
    if(min != i){
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
}

selectionSort([23,56,78,34,1,4,7])