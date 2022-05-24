// type MyExclude<T, U> = any

type MyExclude<T, U> = T extends U? never:T


//  其实底层是有一个分布式的 对比的



