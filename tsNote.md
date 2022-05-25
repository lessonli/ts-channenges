#  Typescript 的安装和编译



+ typescript 是由微软开发的一款开源的编程语言
+ Typescript 是JavaScript 的超集 遵循最新的ES5/ES6 规范 以及新增
+ 越来越多的 项目都是基于 TS来进行开发的  比如 Vue3 React 167+ 学习ts 也是必然的一个趋势、
+ 丰富的类型检查 可以及时的排查错误



# TypeScript 的安装 和编译

## 安装

``` js
npm install typescript -g
```

## vscode + Typscript

##  生成配置文件

```  js
tsc --init

```

```json
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig.json to read more about this file */

    /* Projects */
    // "incremental": true,                              /* Enable incremental compilation */
    // "composite": true,                                /* Enable constraints that allow a TypeScript project to be used with project references. */
    // "tsBuildInfoFile": "./",                          /* Specify the folder for .tsbuildinfo incremental compilation files. */
    // "disableSourceOfProjectReferenceRedirect": true,  /* Disable preferring source files instead of declaration files when referencing composite projects */
    // "disableSolutionSearching": true,                 /* Opt a project out of multi-project reference checking when editing. */
    // "disableReferencedProjectLoad": true,             /* Reduce the number of projects loaded automatically by TypeScript. */

    /* Language and Environment */
    "target": "es5",                                     /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
    // "lib": [],                                        /* Specify a set of bundled library declaration files that describe the target runtime environment. */
    // "jsx": "preserve",                                /* Specify what JSX code is generated. */
    // "experimentalDecorators": true,                   /* Enable experimental support for TC39 stage 2 draft decorators. */
    // "emitDecoratorMetadata": true,                    /* Emit design-type metadata for decorated declarations in source files. */
    // "jsxFactory": "",                                 /* Specify the JSX factory function used when targeting React JSX emit, e.g. 'React.createElement' or 'h' */
    // "jsxFragmentFactory": "",                         /* Specify the JSX Fragment reference used for fragments when targeting React JSX emit e.g. 'React.Fragment' or 'Fragment'. */
    // "jsxImportSource": "",                            /* Specify module specifier used to import the JSX factory functions when using `jsx: react-jsx*`.` */
    // "reactNamespace": "",                             /* Specify the object invoked for `createElement`. This only applies when targeting `react` JSX emit. */
    // "noLib": true,                                    /* Disable including any library files, including the default lib.d.ts. */
    // "useDefineForClassFields": true,                  /* Emit ECMAScript-standard-compliant class fields. */

    /* Modules */
    "module": "commonjs",                                /* Specify what module code is generated. */
    // "rootDir": "./",                                  /* Specify the root folder within your source files. */
    // "moduleResolution": "node",                       /* Specify how TypeScript looks up a file from a given module specifier. */
    // "baseUrl": "./",                                  /* Specify the base directory to resolve non-relative module names. */
    // "paths": {},                                      /* Specify a set of entries that re-map imports to additional lookup locations. */
    // "rootDirs": [],                                   /* Allow multiple folders to be treated as one when resolving modules. */
    // "typeRoots": [],                                  /* Specify multiple folders that act like `./node_modules/@types`. */
    // "types": [],                                      /* Specify type package names to be included without being referenced in a source file. */
    // "allowUmdGlobalAccess": true,                     /* Allow accessing UMD globals from modules. */
    // "resolveJsonModule": true,                        /* Enable importing .json files */
    // "noResolve": true,                                /* Disallow `import`s, `require`s or `<reference>`s from expanding the number of files TypeScript should add to a project. */

    /* JavaScript Support */
    // "allowJs": true,                                  /* Allow JavaScript files to be a part of your program. Use the `checkJS` option to get errors from these files. */
    // "checkJs": true,                                  /* Enable error reporting in type-checked JavaScript files. */
    // "maxNodeModuleJsDepth": 1,                        /* Specify the maximum folder depth used for checking JavaScript files from `node_modules`. Only applicable with `allowJs`. */

    /* Emit */
    // "declaration": true,                              /* Generate .d.ts files from TypeScript and JavaScript files in your project. */
    // "declarationMap": true,                           /* Create sourcemaps for d.ts files. */
    // "emitDeclarationOnly": true,                      /* Only output d.ts files and not JavaScript files. */
    // "sourceMap": true,                                /* Create source map files for emitted JavaScript files. */
    // "outFile": "./",                                  /* Specify a file that bundles all outputs into one JavaScript file. If `declaration` is true, also designates a file that bundles all .d.ts output. */
    // "outDir": "./",                                   /* Specify an output folder for all emitted files. */
    // "removeComments": true,                           /* Disable emitting comments. */
    // "noEmit": true,                                   /* Disable emitting files from a compilation. */
    // "importHelpers": true,                            /* Allow importing helper functions from tslib once per project, instead of including them per-file. */
    // "importsNotUsedAsValues": "remove",               /* Specify emit/checking behavior for imports that are only used for types */
    // "downlevelIteration": true,                       /* Emit more compliant, but verbose and less performant JavaScript for iteration. */
    // "sourceRoot": "",                                 /* Specify the root path for debuggers to find the reference source code. */
    // "mapRoot": "",                                    /* Specify the location where debugger should locate map files instead of generated locations. */
    // "inlineSourceMap": true,                          /* Include sourcemap files inside the emitted JavaScript. */
    // "inlineSources": true,                            /* Include source code in the sourcemaps inside the emitted JavaScript. */
    // "emitBOM": true,                                  /* Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files. */
    // "newLine": "crlf",                                /* Set the newline character for emitting files. */
    // "stripInternal": true,                            /* Disable emitting declarations that have `@internal` in their JSDoc comments. */
    // "noEmitHelpers": true,                            /* Disable generating custom helper functions like `__extends` in compiled output. */
    // "noEmitOnError": true,                            /* Disable emitting files if any type checking errors are reported. */
    // "preserveConstEnums": true,                       /* Disable erasing `const enum` declarations in generated code. */
    // "declarationDir": "./",                           /* Specify the output directory for generated declaration files. */

    /* Interop Constraints */
    // "isolatedModules": true,                          /* Ensure that each file can be safely transpiled without relying on other imports. */
    // "allowSyntheticDefaultImports": true,             /* Allow 'import x from y' when a module doesn't have a default export. */
    "esModuleInterop": true,                             /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables `allowSyntheticDefaultImports` for type compatibility. */
    // "preserveSymlinks": true,                         /* Disable resolving symlinks to their realpath. This correlates to the same flag in node. */
    "forceConsistentCasingInFileNames": true,            /* Ensure that casing is correct in imports. */

    /* Type Checking */
    "strict": true,                                      /* Enable all strict type-checking options. */
    // "noImplicitAny": true,                            /* Enable error reporting for expressions and declarations with an implied `any` type.. */
    // "strictNullChecks": true,                         /* When type checking, take into account `null` and `undefined`. */
    // "strictFunctionTypes": true,                      /* When assigning functions, check to ensure parameters and the return values are subtype-compatible. */
    // "strictBindCallApply": true,                      /* Check that the arguments for `bind`, `call`, and `apply` methods match the original function. */
    // "strictPropertyInitialization": true,             /* Check for class properties that are declared but not set in the constructor. */
    // "noImplicitThis": true,                           /* Enable error reporting when `this` is given the type `any`. */
    // "useUnknownInCatchVariables": true,               /* Type catch clause variables as 'unknown' instead of 'any'. */
    // "alwaysStrict": true,                             /* Ensure 'use strict' is always emitted. */
    // "noUnusedLocals": true,                           /* Enable error reporting when a local variables aren't read. */
    // "noUnusedParameters": true,                       /* Raise an error when a function parameter isn't read */
    // "exactOptionalPropertyTypes": true,               /* Interpret optional property types as written, rather than adding 'undefined'. */
    // "noImplicitReturns": true,                        /* Enable error reporting for codepaths that do not explicitly return in a function. */
    // "noFallthroughCasesInSwitch": true,               /* Enable error reporting for fallthrough cases in switch statements. */
    // "noUncheckedIndexedAccess": true,                 /* Include 'undefined' in index signature results */
    // "noImplicitOverride": true,                       /* Ensure overriding members in derived classes are marked with an override modifier. */
    // "noPropertyAccessFromIndexSignature": true,       /* Enforces using indexed accessors for keys declared using an indexed type */
    // "allowUnusedLabels": true,                        /* Disable error reporting for unused labels. */
    // "allowUnreachableCode": true,                     /* Disable error reporting for unreachable code. */

    /* Completeness */
    // "skipDefaultLibCheck": true,                      /* Skip type checking .d.ts files that are included with TypeScript. */
    "skipLibCheck": true                                 /* Skip type checking all .d.ts files. */
  }
}

```

# 强类型 于弱类型（类型安全维度）

 + 强类型

   + 语言层面限制函数的实参类型必须与形参类型相同

   + 强类型 不允许随意的隐式类型转换 

+ 弱类型
  + 语言层面 不限制 实参与形参的数据类型相同
  + 弱类型允许随意的类型转换



### 强类型的优势

	+ 错误更早暴露  编译阶段提醒
	+ 代码更只能 编码更准确（类型推断 代码提示）

 + 重构更牢靠
   + 指修改 更加确定
 + 减少不必要的类型判断



# 数据类型

## 布尔类型(boolean)

```typescript
let flag:boolean = true
```

## 数字类型 （number）

``` typescript
let age:number = 20
```

## 字符串类型（string）

```typescript
let name: string = 'lisen'
```

## 数组类型(array)

```typescript
// ts 中描述数组的几种写法
let arr:[] = [1,2,3] // 这种写法 ts 认为 是一个空数组
let arr_1: string[] = ['1','2']
let arr_2:Array<string> = ['1','2']

let arr1:[number, number,number] = [1,2,3]
let arr2:[number,string, boolean]= [1,'2', false]


let hobbies: number[] = []
let hobbies1:string[] = ['1', '2', '3']
let arr3:Array<number> = [1,23,4]
```

##  元组(touple **英** [tjʊpəl; ˈtʌpəl)

**概念： 表示数量和类型已知的数组**

```typescript
let arr:[string, number] = ['lisen', 18]
```

| 元组                         | 数组                 |
| ---------------------------- | -------------------- |
| 每一项可以是不同的类型       | 每一项都是固定的类型 |
| 有预定义的长度(长度是已知的) | 没有固定的长度       |
| 用于表示一个固定的结构       | 用于表示一个列表     |

## 枚举类型(enum)

### 普通枚举

+ 事先考虑 某一个变量可能存在的值 
+ 比如 星期 性别 月份 等。。。

```typescript
enum sex {
  girl,
  boy
}


let p1:sex = sex.girl // 0
let p2:sex = sex.boy // 1


// 编译后的文件
var sex;
(function (sex) {
    sex[sex["girl"] = 0] = "girl";
    sex[sex["boy"] = 1] = "boy";
})(sex || (sex = {}));





let sex = {}

(function(){
  sex['girl'] = 0
	sex[0] = 'girl'
	sex['boy'] = 1
	sex[1] = boy
})(sex)


// 产出
sex = {
	0: 'girl',
  1: 'boy',
  girl:0,
  boy:1
}

```

###  常量枚举

+ 常数枚举(不可变) 与 普通枚举的区别是 它会在编译阶段被删除 并且不能包含 计算成员
+ 如果包含了计算成员, 则会在编译阶段报错

> 通过 const 定义的 枚举 会在 使用完成之后 删除掉 该枚举 因此常量枚举 直接 打印该常量 会报错

+ ```typescript
  const enum sex ={
    girl,box
  }
  
  enum sex1 = {
   girl,boy 
  }
  // 通过定义 常量枚举 在编译之后 被删除掉 如果在外部使用 则不存在
  ```

+ 

## any

**any**就是可以赋值给任意类型

+ 第三方库 没有提供类型文件时一般用any
+ 类型转换 遇到困难时可以用any
+ 数据结构太复杂难以定义
+ \(^o^)/~ 不会写 类型时用

### 非空类型断言



+ ```typescript
  //非空断言操作符
  // getElementById(elementId: string): HTMLElement | null;
  let root:HTMLElement|null = document.getElementById('root')
  root!.style.color = 'red'
  ```

## null 和undefined

+ Null 和undefined 是其他类型的子类型, 可以赋值给其他类型，比如数字类型，此时赋值后端类型会变成 null 或者undefined

+ `strictNullChecks` 参数用于新的严格空检查模式，在严格空检查模式下， null 和 undefined 的值都不属于任何一个类型，他们只能赋值给自己这种类型 或者any

  ```typescript
  // 非严格 模式
  let x: number;
  x =1
  x = null
  x = undefined
  
  // 严格模式
  let y:number|null|undefined;
  y=1
  y=null
  y=undefined
  
  let a: null = null
  let b = undefined = undefined
  
  ```

##  void 类型

> 表示没有任何类型 通常用于函数没有返回值

```typescript
function  greeting(name:string):void{
    // return null
    // return undefined
}
```

**如果是 严格空检查模式 只能是undefined  严格空检查模式 任我 null 和 undefined 是两个不同的类型**

## never  类型

**never 是其他类型(null undefined)的子类型 代表不会出现的值**

> 永远不知道 返回什么类型



### 作为不会返回(return) 的函数的返回值类型

+ 死循环 
+ 抛出了错误
+ 不可能出现的值

```typescript
// 如果一个函数 永远不会返回, 那么它的 返回值类型 就是never
function sun():never{
    while(true){

    }
}

// 如果函数一定会抛出错误 那么它也永远 不会正常结束 它的返回类型 也永远不会结束
function minus():never{
    throw Error('出错了')
}


function fn(x:number|string){
    if(typeof x === 'number'){
        // x => number
        console.log(x)
    }else if(typeof x === 'string'){
        // x => string
        console.log(x)
    } else {
        // x=> never
        console.log(x)
    }
}
```

### never 和 void 的区别

+ void 可以被赋值为 null 和undefined 的类型。naver 则是一个 不包含值的类型
+ 拥有void 类型的函数可以 正常运行 而拥有never 返回值类型的函数无法正常返回 无法终止 或者抛出异常

## 类型推论

+ 是指编程语言中能够自动推导出 值的类型的能力， 它是一些 强静态类型语言中出现的特性
+ 定义时 未赋值 就会推论成any 类型
+ 如果定义的时候就赋值 就能利用到类型推论

```typescript
let x = 10;
// 此时 x 就会被推论成 number 类型
x = 'demo' // 如果要改变改值类型 编译阶段就会报错


let demo ;
demo =10
demo = 'lesosn'
demo = undefined
demo = null
// 这样都是没问题的 因为 初始值 demo 被推论为 any
```

## 包装对象

+ js  的数据类型分为两种：原始类型(Primitive data types) 和 对象类型 （Object types）

+ 所有的原始类型都没有 属性(property)

  + js 有 一个自动装箱的过程 如果对一个基本类型调用方法的话 会在内部迅速做一次包装 把这个基本类型包装成对象 然后就可以调用方法了

  + ```typescript
    let x1 = 'hello'
    x1.toLowerCase()
    //=> new String(x1).toLowerCase
    ```

  + 

+ 原始 数据类型 

  + Number String  Boolean Null Undefined 

## 联合类型

+ 联合类型表示 取值 可以为 多种类型中的一种
+ 未赋值联合类型上只能**访问(提示)**两个类型共有的属性和方法

```typescript
let lname: number|string
// 此时只能访问 number | string 公用方法

// 或者后面给lname 定义具体的类型



```

 ## 类型断言

```typescript
// 不可以断言 联合类型之外的类型
console.log((lname as string).length)
console.log((lname as number).toFixed(2))
```

+  可以吧 字符串 数字 布尔值 组成一个联合类型

```typescript
type Ltype = 1|'lisen'| true
let t1:Ztype = 1
let t2:Ztype = 'lisen'
```



## 字符串字面量 vs 联合类型

+ 字符串字面量类型 用来约束取值只能是 某几个字符串 中的一个 联合诶新 表示取值 可以为 多种类型的一个
+ 字符串字面量限定了 使用改字面量的地方仅接收特定的值 联合类型 对于值没有限定 仅仅限定知道类型需要保持一致

# 函数

    ## 函数的定义

+ 可以指定参数的类型 和 返回值的类型

  ```typescript
  function hello(name:String){
    return 'hello'+ name
  }
  hello('lisen')
  ```

  

 ## 函数表达式

+ 定义函数类型

  ```typescript
  type GetUserName = (x:string,y:string)=>string
  
  let getUserName:GetUserName = (firstName:string,lastName:string)=>{
    return (firstName+lastName)
  }
  
  let getUserName1:GetUserName = function (firstName,lastNAme){
    return (firstName + lastNAme)
  }
  ```

## 没有返回值

```typescript
function  print(name:string|number):void{
  console.log(name)
return undefined
}
```

## 可选参数

**在ts 中 函数的形参和实参 必须一样 不一可选参数, 而且必须是最后一个参数**

```typescript
// 可选参数
function log(name?:string,age?:number):void{
  console.log(name,age)
}
log('lisen')
```

## 默认参数

```typescript
function ajax(url:string,methord:string ='get'){
  console.log(url,methord)
}
ajax('/user/index')
```

## 剩余参数

```typescript
function  sum(...nums:number[]){
  console.log(nums, 'nums')
  return nums.reduce((prev,current)=>prev+=current, 0)
}

```

## 函数重载

+ 在 Java 中的重载 指的是 两个或者两个以上的同名函数 参数不同

+ 在Typescript 中表现为 给同一个函数提供多个函数类型定义

  **为一个函数提供多种类型**

```typescript
//函数重载
let obj:any = {}
function attr(val:string):void
function attr(val:number):void
function attr(val:any):void{
  if(typeof val ==='string'){
    obj.name = val
  } else if(typeof val ==='number'){
    obj.age = val
  }
}
attr('lisen')
attr(10)
// attr(true)
```

# 类 class

## 定义类

```typescript
//类
class Person{
    //有一种严格模式 要求 class 必须初始化属性   "strictPropertyInitialization": true,      "strictNullChecks": true,  同时开启
    // name:string ; // 实例的属性
    /*第一中初始化 方法*/
    // name:string='李森'
    /*第二中 方法*/
    name:string
    constructor(name:string) {
        this.name = name
    }
    getName():void{
        console.log(this.name)
    }
}



// var Person = /** @class */ (function () {
//     function Person() {
//     }
//     Person.prototype.getName = function () {
//         console.log(this.name);
//     };
//     return Person;
// }());
```

## 存取器

	+ 在 TypeScript 中 我们可以通过存取器 Gibson一个类中的属性 和赋值行为

 + 构造函数
   + 主要用于初始化类的成员变量属性
   + 类的对象创建时自动 调用执行
   + 没有返回值

```typescript
class User{
    myName: string;
    constructor(myName:string) {
        this.myName = myName
    }
    get name(){
        return this.myName
    }
    set name(newName:string){
        this.myName = newName
    }
}
let u = new User('lisen')
u.name = 'lesson'

```

##  属性修饰符readOnly

+ readOnly 修饰的变量 只能在构造函数中 初始化
+ 在 Typescrupt 中 const 是常量标识符  其值不能够被重新分配
+ typescript 的类型系统同样 也允许 讲 interface type class 上的 属性标识为 readonly
+ Readonly 实际上 只是在 编译阶段 进行代码检查 而 const 则会在 运行时检查

```typescript
class Animal{
    public readonly name:string
    constructor(name:string) {
        this.name = name
    }
    changeName(name:string){
        this.name = name // 失败 只读变量 默认不可更改
    }
}

```

## 继承

+  子类 继承父类后 子类的实例就有了 父类中的属性和方法 可以增强代码的复用性
+  把子类公用的方法 抽象出来 放在父类中 自己的特殊逻辑 放在子类用重写父类的逻辑
+  super 可以调用父类上的属性和方法

```typescript
class Person{
    name:string // 定义实例中的属性 默认省略 public 修饰符
    age:number
    constructor(name:string,age:number) {
        this.name = name
        this.age = age

    }
    getName(){
        return this.name
    }
    setName(newName:string){
        this.name = newName
    }
}

class  Student extends Person{
    no:number
    constructor(name:string, age:number, no:number) {
        super(name,age); // 执行父类的属性和方法
        this.no = no
    }
    getNo():number{
        return this.no
    }
}
let s1 = new Student('lisen', 18, 1)

```

## 类里面的修饰符

+ public
+ private
+ protected

```typescript
class  Father{
    public name:string  // 类 里面 子类 实例 等都可以访问
    protected age:number // 受保护的 只有 类 以及 子类可以访问
    private money: number // 只有当前类可以访问 子类 实例 都不可以访问

    constructor(name:string,age:number,money:number) {
        this.name = name
        this.age = age
        this.money = money
    }
    getName():string{
        return  this.name
    }
    setName(newName:string):void{
        this.name = newName
    }
    getMoney():number{
        console.log(this.money)
        return( this.money)
    }
}
class  Child extends Father{
    constructor(name:string,age:number,money:number) {
        super(name,age,money);
    }
    desc():void{
        // 此处访问 不到 money
        console.log(`${this.name} ${this.age}`)
    }
}

let child = new Child('lesson', 19, 12)
console.log(child)
console.log(child.getMoney())
```

## 静态属性和方法

 ```typescript
class Father1{
    static classname:string = 'father'
    static getClassName():string{
        return  this.classname
    }
    public name:string 
    constructor(name:string) {
        this.name = name

    }
}

console.log(Father1.classname)
console.log(Father1.getClassName())
 ```

## 抽象类

+ 抽象描述一种抽象的概念 无法实例化 只能被继承
+ 无法创建抽象类的实例
+ 抽象方法不能在抽象类中实现 只能在抽象类的具体子类中实现 而且 必须实现

**一用于封装公共的方法 供子类使用**

```typescript
// 抽象类
abstract class Animal1{
    name:string
    abstract speak():void
    constructor(name) {
        this.name = name
    }
}
class Cat extends Animal1{
    //抽象类上的方法  必须在子类中实现
    constructor(name) {
        super(name);
    }
    speak() {
        console.log('喵喵');
    }
}
// let animal = nwe Animal1() // 无法创建抽象类的实例
let cat = new Cat('猫')
console.log(cat.speak());
console.log(cat.name)

```

| 访问控制修饰符  | private protected public |
| :-------------- | ------------------------ |
| 只读属性        | readOnly                 |
| 抽象类 抽象方法 | abstrict                 |
|                 |                          |

## 抽象类 和接口

+ 不同类之间公用的属性和方法 可以抽象为一个接口
+ 抽象类是供其他基础的基类 抽象类 不允许被实例化 抽象类中的抽象方法 必须在子类中实现
+ 抽象类本身是一个无法被实例化的类 其中能够实现方法 和初始化属性 而接口 仅能够用于描述  既不提供 方法的实现 也不为属性进行初始化
+ 抽象类也可以实现接口
+ 一个类 可以继承一个类 或者抽象类 但可以实现(implement)多个接口

```typescript
abstract class Animal3{
    name:String
    constructor(name) {
        this.name = name

    }
    abstract speak():void
}

interface Flying{
    fly():void
}
interface Eating{
  eat():void
}
class Duck extends Animal3 implements  Flying, Eating{
    speak() {
        console.log('gagaga')
    }
    fly() {
        console.log('飞飞飞')
    }
  	eat(){
      console.log('我会吃')
    }
}
let duck = new Duck('小李')
duck.fly()
duck.speak()


 
```

## 抽象方法

+ 抽象类 和方法 不包含 具体实现 必须在子类中实现
+ 抽象方法只能在抽象类中
+ 子类可以对抽象类进行不同的实现

```typescript
abstract class Animal_1{
    abstract speak():void
}
class Dog_1 extends Animal_1{
    speak() {
        console.log('汪汪汪')
    }
}
class Cat_1 extends Animal_1{
    speak() {
        console.log('喵喵喵')
    }
}
let dog_1 = new Dog_1()
let cat_1 = new Cat_1()
dog_1.speak()
cat_1.speak()
```

## 重写(override) 和 重载(ovreload)

+ 重写 是指 子类 重写 继承自父类中方法
+ 重载 是指为同一个函数提供多个类型定义

```typescript
class Cat_2 extends Animal_2{
    speak(word: string): string {
        return '猫叫'+ word
    }
}

let cat_2  = new Cat_2()
console.log(cat_2.speak('hello')) // 猫叫 hello

// 重载
function double(val:string):string
function double(val:number):number
function double(val:string|number):number|string{
    if(typeof val ==='number'){
        return val *2
    }
    if(typeof val === 'string'){
        return  (val + val)
    }
}

```

## 继承 和多态

+ 继承: 子类继承父类 子类除了拥有父类所有的特性外 还有一些更具体的特性
+ 多态 由继承而产生了 相关的不同的类 对同一个方法可以有不同的行为

```typescript
// 继承和多态
class  Animal_3{
    speak(word:string):string {
        return  'Animal'+word
    }
}
class Cat_3 extends Animal_3{
    speak(word: string): string {
        return "Cat"+word;
    }
}
class Dog_3 extends Animal_3{
    speak(word: string): string {
        return "Dog"+word;
    }
}
let cat_3 = new Cat_3()
let dog_3 = new Dog_3()

console.log(cat_3.speak('hello'))
console.log(dog_3.speak('hello'))

```

# 接口

+ 接口一方面可以自在面向对象编程中表示为 `行为的抽象` 另外可以用来描述`对象的形状`
+ 接口就是把一些类中共有的属性 和方法抽象出来 可以用来约束实现此接口的类
+ 一个类可以继承另一个类 并且实现多个接口
+ 接口像插件一样 是用来增强类的  而 抽象类 是具体类的抽象概念
+ 一个类可以实现多个接口 一个接口也可以被多个类实现  一个类可以有多个子类 但是只能有一个父类

## 接口

+ interface 中可以用分号或者逗号 分割每一项 也可以什么都不加

### 对象的形状

```typescript
//接口可以用来描述对象的形状 少属性 或者多属性都会报错

interface SpeakAble{
    speak():void,
    name?: string // 表示可选属性
    
}
let speakMan:SpeakAble={
    speak(){},// 少属性会报错  我们可以用？ 表示可选属性避免报错
    name:name,
    age // 多属性会报错
}

interface Rectangle{
    width:number,
    height:number
}
let r:Rectangle = {
    width:10,
    height:20
}

```

### 行为的对象

```typescript
// 行为的抽象

interface AnimaLike{
    eat():void,
    move():void
}

// 接口可以继承
interface PersonLike extends AnimaLike{
    speak():void

}
class Dog_4 implements AnimaLike{
    eat() {
    }
    move() {
    }
}
class Boy implements PersonLike{
    eat() {
    }
    move() {
    }
    speak() {
    }
}
// 规定一个 变量对应的接口类型必须有 id 和 name 其他属性任意
interface Person_1{
    readonly id:number
    name:string,
    [propName:string]:any  // 任意类型 
}
let p:Person_1 = {
    id:1,
    name:'lesson',
    age:12,
    home: '江南府'
}
```

## 接口的继承

+ 一个接口可以继承自另外一个接口

```typescript
// 行为的抽象

interface AnimaLike{
    eat():void,
    move():void
}

// 接口可以继承
interface PersonLike extends AnimaLike{
    speak():void

}
class Dog_4 implements AnimaLike{
    eat() {
    }
    move() {
    }
}
class Boy implements PersonLike{
    eat() {
    }
    move() {
    }
    speak() {
    }
}
// 规定一个 变量对应的接口类型必须有 id 和 name 其他属性任意
interface Person_1{
    readonly id:number
    name:string,
    [propName:string]:any  // 任意类型
}
let p:Person_1 = {
    id:1,
    name:'lesson',
    age:12,
    home: '江南府'
}
```

## readonly

+ 使用readonly 定义只读属性 可以避免由于多人写作或者项目较为复杂 等因素造成对象的值被重写

```typescript
interface Person_1{
    readonly id:number
    name:string,
    [propName:string]:any  // 任意类型
}
let p:Person_1 = {
    id:1,
    name:'lesson',
    age:12,
    home: '江南府'
}

p.id = 2 // 报错
```

## 函数类型接口 

+ 对方传入的参数 和返回值进行约束

```typescript
interface discount{
    (price:number):number
}
let cost:discount = function (price:number):number{
    return price* 0.2
}


interface SumInterface{
    (...args:number[]):number
}
let sum_1:SumInterface = function (...args:number[]):number{
  return   args.reduce((prev,current)=>prev+current, 0)
}
```

## 可索引接口

+ 对数组和对象进行约束

+ userInterface 表示`index` 的类型是number 那么值类型必须是string

+ userInterface2 表示`index` 的类型是string  那么值类型必须是string

  ```typescript
  interface  userInterface{
      [index:number]:string
  }
  let arr: userInterface = ['李', '森']
  
  interface userInterface2{
      [index:string]:string
  }
  let obj_1:userInterface2 = {
      name:'lisen'
  }
  ```

## 类的接口

+ 对类的约束

```typescript
nterface SpeakInterface{
    name:string,
    age:number,
    eat1(food:string):void
}
class Person_1 implements SpeakInterface{
    name:string = 'li'
    age:number = 12
    constructor(name:string,age:number) {
        this.name = name
        this.age = age
    }
    eat1(food:string):void {
        console.log('eat'+ food)
    }
}

let p_1 = new Person_1('lisen',12)
p_1.eat1('米饭')

```

## 构造函数的类型

+ 在ts 中 我们可以用 interface 来描述类
+ 同时 也可以使用 interface 李特殊的关键字 new 来描述 类的构造函数类型

```typescript
// 构造函数类型
class Animal_4{
    constructor(public name:string) {
    }
  // 等同于
  /*name:string
     constructor( name:string) {
       this.name = name
    }
    */
  
}

interface withClassName{
  // new 表示 构造函数   Animal_4 表示实例
    new (name:string):Animal_4
}

function createAnimal(clazz:withClassName, name:string){
    return new clazz(name)
}
let a = createAnimal(Animal_4, '猪')
console.log(a, 'a')

```

# 泛型

+ f泛型是指在定义函数 接口或者类的时候 不预先 指定具体的类型 而在使用的时候再指定类型的一种特性
+ 泛型 `T` 作用域 仅限于 函数内部 

## 泛型函数 

+ 首先 实现一个函数 createArr 它可以创建一个指定长度的数组 同时将每一项 都填充一个默认值

```typescript
function createArr(length:number, value:any):any[]{
    let result:any = []
    for (let i = 0; i <length; i++ ){
        result[i] = value
    }
    return  result
}

let result = createArr(3, 'ddd')

```

**使用泛型后**

```typescript
// 使用了泛型后
// 定义的时候不知道类型 使用的时候才知道具体类型 会传一个具体的类型
function createArray<T>(length:number, value:T):T[]{
    let result:T[] = []
    for (let i = 0; i <length; i++ ){
        result[i] = value
    }
    return  result

}
let arr_1 = createArray<number>(3, 4)
let arr_2 = createArray<string>(5, 'ls')
console.log(arr_1)
```

## 类数组

+ 类数组 (array-like Object) 不是数组类型 比如 argument

```typescript
// 类数组
function sum(){
    let args:IArguments = arguments;
    for (let i = 0; i < args.length; i++) {
        console.log(args[i])
    }
}

sum(1,2,3)

let root = document.getElementById('root')
let child:HTMLCollection = (root as HTMLElement).children
let childNodes:NodeListOf<ChildNode> = root!.childNodes
console.log(childNodes.length);
```

##  泛型类

**类里面用到了 泛型**

```typescript
// 泛型类
class  MyArray<T>{

    list:T[] = [];
    constructor() {
    }

    add(element:T){
        this.list.push(element)
    }
    getMax():T{
        let maxVal = this.list[0]
        for (let i = 1; i < this.list.length; i++) {
            if(this.list[i] > maxVal){
                maxVal = this.list[i]
            }
        }
    return  maxVal
    }

}

let arr_3 = new MyArray<number>()
console.log(arr_3)
arr_3.add(1)
arr_3.add(2)
arr_3.add(3)
arr_3.add(4)
console.log(arr_3.getMax())

```

## 泛型接口

+ 泛型接口 可以用来约束函数

```typescript
interface Calulate{
    <T>(a:T,b:T):T
}
let add:Calulate = function (a,b){
    return a
}
```

## 多个泛型

```typescript
// 多个泛型 的使用
// 不借助 中间变量 交换两个变量的值
//let a=1,b=2;
// [a,b] = [b,a]
function swap<A,B>(tuple:[A,B]):[B,A]{
    return  [tuple[1],tuple[0]]
}

let ret = swap([1,'s'])
console.log(ret, 'ret')

```

## 默认泛型

```typescript
// 默认泛型

function createArray1<T=number>(length:number, value:T):T[]{
    let result:T[] = []
    for (let i = 0; i <length; i++ ){
        result[i] = value
    }
    return  result

}
let arr__1 =  createArray1(1,2)
```

## 泛型约束

+ 在函数中使用泛型 由于预先不知道 泛型的类型 所以不能随意访问相应类型的属性或者方法

```typescript
// 泛型约束
interface LengthWise{
    length: number
}

function logger<T>(value:T){
//    由于不知道泛型的类型 所以无法直接使用对应的属性或者方法
//     console.log(value.length)  // 报错
}

function logger2<T extends  LengthWise>(val:T){
    console.log(val.length)
}
```

## 泛型接口

+ 在定义接口的时候也可以使用接口

```typescript
// 在定义接口的时候 也可以指定泛型

interface Cart<T>{
    list: T[]
}
// interface
let cart: Cart<number> = {list:[1,2,3,4]}

```

## 泛型类型 别名 type

+ 泛型别名 可以表达更复杂的类型

```typescript
// 泛型的别名 type 可以定义 别名 小名


type Cart2<T> = {list: T[]} | T[]

let c_1:Cart2<number> = {list:[1,2,3,4]}
let c_2:Cart2<number> = [1,2,3,4]
```

## 泛型接口 和泛型 类型别名

+ 接口创建了一个新的名字 它可以在任意地方被调用。而类型别名 并不创建新的名字 比如 报错信息就不会使用别名
+ 类型别名不能被 继承(extend) 和 实现(implements) 我们应该尽量使用接口 代替 类型别名
+ 当我们需要使用联合类型 或者元组类型的时候 类型别名会更合适

# 结构类型系统

## 接口的兼容性

+ 如果传入的变量和声明的类型 不匹配 TS 就会进行 兼容性检查
+ 原理是 `Duck-Check`, 就是说 只要目标类型中声明的属性变量在源类型中都存在就是兼容的

```typescript
// 接口的兼容性
interface Animal{
    name:string,
    age:number
}
interface Person{
    name:string
    age:number
    married:boolean //
}

function getAnimalName(animal:Animal){
    return animal.name
}

let p1:Person = {name:'李森', age:10, married:true}

// 只要 传入进来的属性 包含 源始值类型的属性 就可以 兼容通过
getAnimalName(p1)

```

## 基本类型的兼容性

```typescript
// 基本 类型的兼容性检查

let num:string | number;
let str:string = 'lesson'

num = str

let num2 : {
    toString():string
}
let str2:string = 'lesson'
num2 =  str2

```

## 类的兼容性 todo:

+ 在ts 中 是结构类型的系统, 只会对比结构 不关心 类型

```typescript
class Animal{
    public name:string= 'lesson'
}
class Bird extends Animal{
    public age:number = 12
}
let a:Animal
a = new Bird()

// 不关系 是否 包含父子类 只关系 属性
let b:Bird
b = new Animal()

```

##  函数的兼容性

+ 比较函数的时候 是要先比较函数的参数 再比较函数的返回值

### 比较参数

### 比较返回值

```typescript
// 函数的兼容性
// 比较函数的时候 要先检查函数的参数在检查返回值
type sumFun = (a:number,b:number)=>number
let sum:sumFun;
function fun1(a:number,b:number):number{
    return  a+b
}
sum = fun1

function fun2(a:number):number{
    return  a
}
// 没有完全匹配 也可以
// 先比较参数 可少不可多 , 再检查返回值
sum = fun2

```

## 函数参数的协变

## 泛型的兼容性

## 枚举的兼容性

# 类型保护

+ 类型保护就是一些表达式 他们在编译的时候就可以通过类型信息 确保 某个作用域内变量的类型
+ 类型保护就是能够通过关键字 判断出分支中的类型

**可以更明确的 判断 某个分支作用域中的类型**

**类型保护是为了更具体的调用参数上的属性和方法**

## type of 类型保护

```typescript
function double (input: string|number|boolean){
    if(typeof input ==="string"){
        return input + input
    } else {
        if(typeof input === 'number'){
            return  input * 2
        }else {
            return  !input
        }
    }
}

```

## instanceof 类型保护

```typescript
// instanceof  类型保护
class Animal{
    name!: string
}
class Brid extends Animal {
    age!:number
}
function getName (animal:Animal){
    if(animal instanceof Brid){
        console.log(animal.age)
    } else {
        console.log(animal.name)
    }
}

```

## null 保护

```typescript
// 如果说 开启了 stringNullCHecks 选项的话 那么 就不能直接调用可能为null 的变量方法了
// 加 感叹号 断言 或者 采用 str = str || ''

function  getFirstLetter(str:string|null){
    return str?.charAt(0)
}

```

## 链判断运算符(可选链)

+ 链判断运算符 是一种 先检查属性是否存在 在尝试访问该属性的运算符 其符号 为`？`
+ 如果运算符左侧传操作符 `?.`计算为 `null`或`undefuned` 。否则正常触发 目标属性访问 方法 或函数调用

## 可辨识的联合类型

+ 就是利用 联合类型中的共有字段进行类型保护

```ts
interface WarningBtn {
    class:'warning',
    text1: '修改'
}
interface DangerBtn {
    class:'Danger',
    text2: '删除'
}

type  Button = WarningBtn | DangerBtn
function getText(button:Button){
    if(button.class === 'warning'){
        console.log(button.text1)
    } else {
        console.log(button.text2)
    }
}
```

## in 操作符

+ in 操作符可以用于参数类型的判断

**用于判断某个对象有没有某个属性**

```tsx
interface Bird {
    swing: number,
    fly():void
}
interface  Dog{
    leg:number,
    run():void
}

function getNumber(animal:Bird|Dog){
    if('swing' in animal){
        console.log(animal.swing);
        console.log(animal.fly())
    } else {
        console.log(animal.run());
    }
}
```

## 自定义类型保护

+ TS 里面的类型保护本质是一些 表达式 他们会在运行时就检查类型信息 以确保在 某个作用域中的类型是符合预期的
+ 要定义一个类型保护，只需要简单地为这个类型保护定义一个函数即可 这个函数的返回值是一个类型谓词
+ 类型谓词 的语法为 `parameteName is Type` 这种形式 其中 `parametename`必须是当前 函数签名里的一个参数名



```tsx
interface Bird2{
    leg: number
}
interface Dog2{
    leg:number
}

function isBird2(x:Bird2|Dog2):x is Bird2{
    // 如果是两条腿 就认为是鸟
    return (x as Bird2).leg === 2
}
function  getAnimal(animal:Bird2 | Dog2):string{
    if(isBird2(animal)){
        return '这是个鸟'
    } else{
        return  '这是个狗'
    }
}

```

# 类型变换

## 交叉类型

+ 交叉类型 （intersection Types） 表示多个类型合并为一个类型

```tsx
interface Bird {
    name: string
    fly:()=>void
}
interface Person{
    name:string
    talk():void
}

type birdMan =  Bird & Person

let bm: birdMan = {
    name:'lisen',
    fly:()=>{},
    talk() {
    }
}
```

## typeof

+ 可以获取一个变量的类型

```tsx
// typeof 用来获取变量的类型
 // 先定义类型 再定义变量
type  People= {
    name:string
    age:number
    gender:0
}
// 先拿到 一个对象 然后通过 对象 获取 反推 这个对象的类型
let p2 = {name:'sanmu', age:12, gender:0};
type  Person2 = typeof  p2
let p22:Person2 = {name:'sanmu', age:12, gender:0}
```

## 索引访问操作符

+ 索引类型查询操作符

```tsx
interface Person3 {
    name:string,
    age:number,
    job:{
        name:string
    },
    interests:{name:string,level:number}[]
}

let FrontEndJob:Person3["job"] = {
    name:'frontEnd'
}
let interests:Person3["interests"] = [{name:'唱歌',level:1}];
```

## keyof

+ 索引类型查询操作符

```ts
interface Person4 {
    name:string,
    age:number
    gender:number
}
//Object.keys
type  PersonKey = keyof Person4

type PersonKey1 = 'name'|'age'|'gender'

function getValueKey(p:Person4,key:PersonKey1){
    return p[key]
}
let p1:Person4 = {name:'李森',age:12,gender:0};
let val = getValueKey(p1,'name')

```

## 映射类型

+ 在定义类型的时候 采用in 操作符 批量定义类型中的属性

```tsx
// 映射类型
interface Person5 {
    name:string,
    age:number,
    gender:'male'| 'female'
};

// 批量定义
type  PersonSearch ={
    [key in keyof Person5]?:Person5[key]
}

let p5:Person5 = {name:'sanmu',age:12,gender:'male'}
let p55:PersonSearch = {age:12,gender:'male'}

```

## 内置工具类型

+ TS 中内置 了一些工具类型 来帮助我们更好的使用类型系统

### Partial

+ Partial 可以讲 传入的属性 由非可选变为可选 

```ts
//  type Partical<T> = {key in keyof T}?: T[key] // 大概实现过程

interface A {
	name:String
  age:number,
}
type Ia = Partical<A>
const a:Ia = {} // 不会报错
```

### Required

+ Required 可以将传入的属性中的可选项变为必选项 用 修饰符`-？`来实现

```tsx
// type Required<T> = {
//     [key in keyof T]-?:T[key]
// }



let p6:Person6 = {name:'张三',age:12}
type requiredPerson6 = Required<Person6>;

let p6Required:requiredPerson6 = {name:'张三',age:12,gender:0} //少写会报错

```

### readOnly  

+ 批量定义 只读

```tsx
//ReadOnly
interface Person7 {
   readonly name:string,
    age:number,
    gender:number

}
interface Person77 {
    name:string,
    age:number,
    gender:number

}

// 批量 readonly
// type ReadOnly<T> = {readonly  [key in keyof T]:T[key]}

let p7:Person7 = {name:'三木', age:12,gender:0}
// p7.name = 'lisen' // 报错 不让修改
let p77:Person77 = {name:'三木', age:12,gender:0}
p7.name = 'lisen' // 报错 不让修改
```

### Pick 

**从泛型中检出一个**

```ts
// Pick 检的意思 从一个大类型中检出 若干个 小类型

interface Person8 {
    name:string,
    age:number,
    gender:number

}
// type Pick<T,key extends keyof T> ={
//     [p in key]:T[p]
// }
type Person8Sub = Pick<Person8, 'name'>



let p8:Person8Sub = {name:'李森', } // 不再支持别的属性
```

### 映射类型修饰符的控制

+ ts 中增加了对映射类型修饰符的控制
+ 具体而言 一个 `readOnly` 或 `？`修饰符 在一个映射类型李可以用前缀 `+ `或`-	`来表示这个修饰符 应该被添加或者移除
+ TS 中部分内置工具类 类型就是利用了这个特性（Partical Required ReadOnly） 

## 条件类  型

+ 在定义泛型的时候可以添加逻辑分支 以后泛型更加灵活

###  定义条件类型

```tsx
interface Fish{
    name:string
}

interface Water {
    name:string
}
interface Bird {
    name:string
}
interface  Sky {
    name:string
}
type Condition<T> = T extends Fish ? Water :Sky

let condition:Condition<Fish> = {name:'水'}

```

### 条件类型的分发

```ts
interface Fish{
    fish:string
}

interface Water {
    water:string
}
interface Bird {
    bird:string
}
interface  Sky {
    sky:string
}
type Condition<T> = T extends Fish ? Water :Sky

let condition:Condition<Fish | Bird> = {water:'水'}
let condition1:Condition<Fish | Bird> = {sky:'天空'}
```

###  内置条件类型

+ TS 在 内置了一些常用的条件类型 可以在[lib.est.d.ts](https://github.com/microsoft/TypeScript/blob/main/lib/lib.es5.d.ts)中查看

#### EXCLUDE

+ 从类型中排除某一个
+ 多个接口中提取其中一个接口
+ 不能提取类似 某个接口的 索引

```tsx
// EXCLUDE
type  E = Exclude<string|boolean|number, string>

let e:E = 10
let e1:E = true
// let e2:E = '12'

```

#### EXTRACT 提取

```ts
type E2 = Extract<string|number, boolean|string>

let e22:E2 = 'hello'
// let e23:E2 = 12 // 报错
```

#### NonNullable

** 排除 null 和 undefined**

```ts
// 排除 null 和 undefined
type E3 = NonNullable<number|undefined|null>
```

#### returnType

```ts
// 获取 类型
type UserInfo = ReturnType<typeof getUserInfo>
                           
function getUserInfo(){
	return {
    name:'ll',
    age:12
  }
}

let userinfo:UserInfo = {name:'lesson', age:12}
```

#### instanceType

**获取 类的实例的类型**

```ts
class Person777{
    name: string;
    constructor(name:string) {
        this.name = name
    }
}
type P777 = InstanceType<typeof Person777>

let p777:P777 = {name:'李森'}
```

# 类型声明

**声明文件可以让我们不需要 将js 重构为 TS 只需要加上上面文件 就可以使用功能**

**类型声明在编译的时候都会被删除，不会影响真正的代码**

## 普通类型声明

## 外部枚举

```ts
// 我们可以给js 写类型声明文件 // 此处的箭头并不是箭头函数 而是类型声明的语法
declare const $:(select:string)=>{
    click():void;
    width(length:number):void
}

$('#root').click()
$('#root').width(12)

declare let name:string;
declare let age:number;
declare function getName():string
declare class Animal{name:string}
interface Person {
    name:string
}
type Student = {
    name:string
}

// 外部的枚举
/*声明在外部 是一个枚举*/
// 直接使用 编译完成之后 会 丢失 Season 所以要用 常量枚举
declare const enum Season{
    Spring,
    Summer,
    Autumn,
    Winter
}
let sersons = [Season.Spring,Season.Summer,Season.Autumn, Season.Winter]
console.log(sersons)
```

## nameSpace

+ 如果一个全局变量包括了很多 子属性 可能使用 namespace

+ 在声明文件中的nameSpace 表示一个全局变量  包含很多子属性

+ 在命名空间内部不需要使用 declare 声明属性或方法

  



## 类型声明文件

+ 可以在类型声明文件中使用类型声明

+ 文件命名规范为`*.d.ts`

  

# 静态类型于动态类型(类型检查)

 + 静态类型
   + 一个变量声明时它的类型就是明确的
   + 这个变量声明过后 就不允许被修改
 + 动态类型
   + 运行阶段才能够明确变量类型
   + 变量的类型可以随时发生变化

**`关于弱类型就动态类型 静态类型就是 强类型等 说法都是错误的 他们只是不同维度之间的划分`**



`js 是一门动态类型并且是弱类型的语言`

# flow



> Flow 是javascript的 类型检查器, flow 只是一个小工具 使用比较简单

## 使用Flow

​	+ 

  +  flow 是以npm 模块来工作的 因此需要初始化 npm init  `npm i flow-bin`

 +  需要 在被检查的文件 顶部 使用 `// @flow` 声明当前文件使用类型注解
 +  使用 flow 注解功能 还需要 yarn flow init 生成 配置文件 `.flowconfig`
 +  然后就可以使用 yarn flow 来使用 注解功能了
    + 使用 yarn flow 其实是启用了一个 服务 来扫描代码 
    + 当 执行结束后 我们 可以使用· `yarn flow stop` 来终止服务
 +  flow-bin 是一个 类型注解的工具 但是在 当我们运行js 代码的时候 就会报错 所以我们使用完 之后 就要移除类型注解





## 移除类型注解

 + `flow-remove-types` 官方推荐移除类型注解的方式

   + ` yarn flow-remove-types ./flow.js -d dist` 第一个参数 需要移除注解的 文件 第二个 -d 指输出的文件夹
   + 

 + babel  配合 一个插件 实现移除类型注解

   + `@babel/core bebel 核心模块`   `@babel/cli babel 命令工具` `@babel/preset-flow 移除注解插件`

   + 创建babel 配置文件  `.babelrc` 

     + ```json
       {
         "presets": ["@babel/preset-flow"]
       }
       ```

   + `yarn babel ./flow.js -d dist2  `

​	**一般还会 利用编辑器插件 来实现编辑器的类型提示 `flow language support 这个是flow 官方实现的编辑器插件`** [各个编辑器插件支持](https://flow.org/en/docs/editors/ )

## flow 类型推断

##  flow 类型注解

## 原始类型

 + string  `const a:string = '1'` 
 + boolean `const flag:boolean = true`
 + null  `const n:null = null`
 + undefined `const unde:undefined = undefined`
 + symbol `const s:symbol = Symbol()`

##  引用类型



 + 数组

   + `const arr1:Array<string> = ['a','b']` 	`const arr2:[]<string> = ['1']`

 + 对象

   ...



 ### 运行环境 api

