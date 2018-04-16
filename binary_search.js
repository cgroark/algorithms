//for any list of n, binary searcy will take log2 n steps to run in worst case. 
//simple serach will take n steps
//logarithms are the opposite of exponentials. log10 100 = 2 becuase it takes two 10s 
//	multiplied to get 100 (like how 10^2 = 100)
//algorithms assume you're using log2 of whatever (like log2 n or log2 8 -- log2 8 = 3)

//binary search only works with a sorted list

//binary search runs in logarithmic time or log time.
//Big O notation is O(log n)
//simple linear search is O(n) 


function binarySearch(arr, item){
  let low = 0;
  let high = arr.length -1;
  
  while(low <= high){
    mid = Math.round((low + high) / 2);
    guess = arr[mid];
    if(guess > item){
      high = mid -1;
    }else if(guess < item){
      low = mid + 1;
    }else{
      return mid;
    }
  }
  return null;
}

binarySearch([1,3,5,7,8,9],8)