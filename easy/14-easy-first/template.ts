// type First<T extends any[]> = any
/* 
// 如果 T 的长度等于0  never  否则就取第一个
type First1<T extends readonly any[]> = T["length"] extends 0? never:T[0];
// 如果T 是空数组 则 never 否则 就取第一个
type First2<T extends readonly any[]> = T extends [] ? never : T[0];

// 如果 T[0] 在 数组中存在 就取第一个 否则就never
type First3<T extends readonly any[]> = T[0] extends T[number]? T[0]: never

type First4<T extends readonly any[]> = T extends [infer first, ...infer rest] ?first:never

 */

/**
 *  + T[length]: 表示数组的长度
 *  + T[number]: 表示数组中的每一个值 union
 */


/* 获取数组的第一个元素
  1. T[0] 数组中的第一个元素
  2. never 代表不会出现的值
  3. T[length] 任意数组的长度 因为我们每一个数组都是有 length 属性的
  4 表示在 extends 条件语句中待推断的类型变量。 
    + 推断 一般都跟随者条件表达式

*/

// type First<T extends any[]> = T[0] extends any[] ? T[0] : never

// type First<T extends any[]> = T['length'] extends 0 ? never :T[0]

type First<T extends any[]> = T extends [infer first, ...infer arg]?first: never