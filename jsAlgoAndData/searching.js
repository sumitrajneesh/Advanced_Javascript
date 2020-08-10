/**
 * Searching in Javascript
 * 1.Describe what a searching algorithms is
 * 2.Implement linear search on arrays
 * 3.Implement binary search on sorted arrays
 * 4.Implement a naive string searching algorithm
 * 5.Implement the KMP string searching algorithm
 */

 /**
  * JavaScript has Search
  * There are many different search methods on arrays in javaScript:
  *  1.indexOf
  *   2.includes
  *  3.find
  *  4.findIndex 
  */

 /**
  * linear search
  */



  /**
   * linear search 
   * Pseudocode
   * 1.This function accepts an array and a value
   * 2.Loop through the array and check if the current array element is equal to the value
   * 3.If it is , return the index at which the element is found
   * 4.If the value is never found , return -1
   */

   function linearSearch(arr,val){
       for(var i = 0; i < arr.length; i++){
           if(arr[i] === val) return i
       }
       return -1
   }

   console.log(linearSearch([34,51,1,2,3,45,56,687],100))