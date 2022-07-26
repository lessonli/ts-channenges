type MyReturnType<T extends (...args:any[])=>any> =
 T extends (...arg:any[])=> infer R ? R: never



//  约束 T 是 一个函数 借用 infer 推断
//  如果 infer 推断出来 则直接采用 推断不出来 则就是 never (什么也不做)


