
/**first function */
// function addUpTo(n){
//     let total = 0;
//     for(let i = 1; i<=n; i++){
//         total += i
//     }

//     return total
// }

/**
 * function with timing
 */

//  function addUpTo(n){
//      let total = 0;
//      for(let i = 1; i<=n ; i++){
//          total += i
//      }

//      return total;
//  }

//  let t1 = performance.now()
//  addUpTo(1000000000);
//  let t2 = performance.now();

//  console.log(`Time Elapsed: ${(t2 - t1) / 1000}   seconds.`)

// console.log(addUpTo(6))
// console.log(addUpTo(3))


/**second function */
// function addUpTo1(n){
    //     return n*(n+1)/2
    // }
    
    // console.log(addUpTo1(6))
    
    /**function with timing */
    function addUpTo1(n){
        return n*(n+1)/2
    }
    
    let t1 = performance.now();
    addUpTo1(1000000000);
    
    let t2 = performance.now();
     console.log(`Time Elapsed: ${(t2 - t1) / 1000}   seconds.`)


console.log(addUpTo1(6))


