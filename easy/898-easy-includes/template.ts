



type Equals<X, Y> =
(<T>() => T extends X ? 1 : 2) extends
(<T>() => T extends Y ? 1 : 2) ? true : false;

/**
 *  + 借用 递归 实现
 */


type Includes<T extends readonly any[], U> = T extends [infer First, ...infer Reset]
  ? Equals<First,U> extends true
    ? true
    : Includes<Reset, U>
  : false


  /**
   *  Equals 判断 是否相等 暂时不会 
   */