

//  涉及到的知识点
/**
 *  + const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
 *    as const 断言的 意思 as 表示断言 const 表示不可变 因此就是 只读
 *  + ts 怎么遍历数组
 *    P in T[number] 
 * 
 */




/* 元组转换为对象
  1. 元组  已知元素数量和类型的的数组 各个元素的类型不必相同
  2. extends 类型约束  T 是一个元组 首先必须满足数组的要求
  3. T[number] T 是一个元组 number 是一个数据类型 指的是 任何一个数字  放一起 就代表数组的每一个元素
  4. in 数组每一个元素的 key 
*/



/
type TupleToObject<T extends any[]> = {
 [P in T[number]]:P
}