// type MyExclude<T, U> = any

// type MyExclude<T, U> = T extends U? never:T


//  其实底层是有一个分布式的 对比的

 /**
  *  + 当ts 中 extends 中两边的数据类型都是 union (都是联合类型的时候) 表示分布式 常用于遍历对比
  *  + U 中的 元素 出现在 T 中的 话 就从 T 中排除掉
  */


 type MyExclude<T, U extends T> = T extends U? never : T

 /* 实现一个 exclude 第一个是联合类型 union 第二个 是 union 里面的 某个 */

