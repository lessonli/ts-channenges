// type TupleToObject<T extends readonly any[]> = any


type TupleToObject<T extends readonly any[]> ={
  [P in T[number]]: P
}

//  涉及到的知识点
/**
 *  + const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
 *    as const 断言的 意思 as 表示断言 const 表示不可变 因此就是 只读
 *  + ts 怎么遍历数组
 *    P in T[number] 
 * 
 */

const arr: string[] = ['a','b','c']


type IObj = TupleToObject<['a','b','c', {}, {a:1}]>

const demo:IObj = {
  a: 'a',
  b: 'b',
  c: 'c',
}


