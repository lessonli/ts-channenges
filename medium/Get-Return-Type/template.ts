// type MyReturnType<T extends (...args:any[])=>any> =
//  T extends (...arg:any[])=> infer R ? R: never



//  约束 T 是 一个函数 借用 infer 推断
//  如果 infer 推断出来 则直接采用 推断不出来 则就是 never (什么也不做)


type MyReturnType<T extends (...arg:any[])=>any> = T extends (...arg:any[])=>infer F?F:never

/* 
  处理一个函数的返回值类型 

  首先是一个函数  测试用例上 会对函数 添加参数 
  infer 推断

*/