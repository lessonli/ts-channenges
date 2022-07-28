

// type MyAwaited<T extends Promise<unknown>>= T extends Promise<infer X>
//   ? X extends Promise<unknown>
//     ? MyAwaited<X>
//     : X
//   :never



/* myAwaited 其实是一个 promise 我们要实现一个 promsie 的泛型 */

/* 
  1. promise 
*/


type MyAwaited<T extends Promise<unknown>>= 
T extends Promise<infer X>? X extends Promise<unknown>?MyAwaited<X>:X :never


