




type MyReadonly<T> = {
  readonly [P in keyof T] : T[P]
}

/* 
  1. in 索引 类型 的判断
  2 keyof 索引查询操作符
  3. T[P] 索引访问


*/