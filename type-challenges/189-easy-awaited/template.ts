// type MyAwaited = any


// type MyAwaited<T extends Promise<any>> = T extends Promise<infer X>
//   ? X extends Promise<any>
//     ?MyAwaited<X>
//     :X
//   : never

type MyAwaited<T extends Promise<unknown>>= T extends Promise<infer X>
  ? X extends Promise<unknown>
    ? MyAwaited<X>
    : X
  :never




/**
 *  + infer 
 *    + 只能在条件类型里面使用
 *    + 设置未知数 变量
 */