def findSmallest(arr):
  smallest = arr[0]
  smallest_index = 0
  for i in range(1, len(arr)):
    if arr[i] < smallest:
      smallest = arr[i]
      smallest_index = i 
  return smallest_index
  
def selectionSort(arr):
  newArr = []
  for i in range(len(arr)):
    smallest = findSmallest(arr)
    newArr.append(arr.pop(smallest))
  return newArr

print selectionSort([3,6,9,2,6,243])


def selection_sort(list):
  for i in range(len(list)-1):
    min = i
    for j in range(i+1,len(list)):
      if list[j] < list[min]:
        min = j
    if min != i:
      list[min], list[i] = list[i], list[min]
  return list

print(selection_sort([34,67,52,6,78,12]))
      