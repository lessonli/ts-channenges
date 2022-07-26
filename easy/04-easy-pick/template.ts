// type MyPick<T, K> = any


// js to ts

// type MyPick<T, K extends keyof T> = {
//   [P in K] : T[P]
// }




interface Person {
  name: string;
  age: number;
}

/* 
 1. keyof: 索引类型查询操作符 对于任何类型 T keyof T 的结果为 T 上已知的 公共属性的联合 let personProps: keyof Person; // 'name' | 'age'
其实就是 把 一个泛型的类型属性 转换为了 union 类型

2. 索引访问操作符  T[k]  只要确保 k 类型 约束与 T 就可以 K extends T
3. in 操作符
  + in 运算符可以被用于参数类型的判断
  + 它的语法与索引签名的语法类型，内部使用了 for .. in。 具有三个部分：

    + 类型变量 K，它会依次绑定到每个属性。
    + 字符串字面量联合的 Keys，它包含了要迭代的属性名的集合。
    +属性的结果类型。

*/


type MyPick<T, K extends keyof T> ={
  [P in K]: T[P]
}
