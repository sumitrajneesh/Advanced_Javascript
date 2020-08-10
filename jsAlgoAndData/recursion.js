/**
 * recursions
 */

 /**
  * Why use recursion
  * What is recursion : A process (a function in our case ) that calls itself.
  * 
  * use of Recursion:-
  * 1. JSON.parse/JSON.stringfy
  * 2. documents.getElementById and DOM traversal algorithms
  * 3.Object traversal
  * 4.We will see it with more complex data structures
  * 5.It's sometimes a cleaner alternative to iteration.
  */

  /**
   * Call stack
   * Why do i care?
   * 1.your'e used to functions being pushed on the call stack and poppped off when they are done
   * 2.when we write recursive functions, we keep pushing new function onto the call stack!
   */

//    function takeShower(){
//        return 'Showering'
//    }

//    function eatBreakfast(){
//        let meal = cookFood()
//        return `Eating ${meal}`
//    }
//    function cookFood(){
//        let items = ["Oatmeal","Eggs", "Protein Shake"]
//        return items[Math.floor(Math.random()*items.length)]
//    }

//    function wakeUp(){
//        takeShower()
//        eatBreakfast()
//        console.log('Ok ready to go to work!')
//    }

//    console.log(wakeUp())

/**
 * First Recursive function
 * 1.Base case
 * 2.Different input
 */

//  function countDown(num){
//      if(num <= 0){
//          console.log("All done!")
//          return;
//      }
//      console.log(num);
//      num--;
//      countDown(num)
//  }

//  console.log(countDown(3))

/**
 * second recursive function
 */

//  function sumRange(num){
//      if(num === 1) return 1;
//      return num + sumRange(num - 1)
//  }

//  console.log(sumRange(3))

/**
 * factorial function by recursion
 */

 /**
  * 
  * non-recursive solution
  */
//  function factorial(num){
//      let total = 1;
//      for(let i = num ; i > 0; i++){
//          total *= i
//      }

//      return total
//  }

//  console.log(factorial(4))

function facorial(num){
    if(num === 1) return 1;
    return num* facorial(num - 1);
}

console.log(facorial(5))

