// type Unshift<T, U> = any


// Unshift 就是把 元素放到第一个位置

type Unshift<T extends any[], U> = [U,...T]