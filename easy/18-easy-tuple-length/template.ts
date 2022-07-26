// type Length<T> = any




type Length<T extends any[]> = T['length']


/* 求元组的长度 
  1. T['length'] 数组的length 属性
  2. 因为是 求数组 我们要把 泛型 限制到 数组 <T extends any[]> 

*/