// type MyExclude<T, U> = any

type MyExclude<T, U> = T extends U? never:T


//  其实底层是有一个分布式的 对比的

 /**
  *  + 当ts 中 extends 中两边的数据类型都是 union (都是联合类型的时候) 表示分布式 常用于遍历对比
  */


