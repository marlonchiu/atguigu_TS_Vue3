# 6. 其它

## 声明文件

当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能  

什么是声明语句  

假如我们想使用第三方库 jQuery，一种常见的方式是在 html 中通过 `<script>` 标签引入 `jQuery`，然后就可以使用全局变量 `$` 或 `jQuery` 了。  

但是在 ts 中，编译器并不知道 $ 或 jQuery 是什么东西  

```typescript
/* 
当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能。
声明语句: 如果需要ts对新的语法进行检查, 需要要加载了对应的类型说明代码
  declare var jQuery: (selector: string) => any;
声明文件: 把声明语句放到一个单独的文件（jQuery.d.ts）中, ts会自动解析到项目中所有声明文件
下载声明文件: npm install @types/jquery --save-dev
*/

jQuery('#foo');
// ERROR: Cannot find name 'jQuery'.
```

这时，我们需要使用 declare var 来定义它的类型

```typescript
declare var jQuery: (selector: string) => any;

jQuery('#foo');
```

declare var 并没有真的定义一个变量，只是定义了全局变量 jQuery 的类型，仅仅会用于编译时的检查，在编译结果中会被删除。它编译结果是：

```typescript
jQuery('#foo');
```

一般声明文件都会单独写成一个 `xxx.d.ts` 文件

创建 `01_jQuery.d.ts`, 将声明语句定义其中, TS编译器会扫描并加载项目中所有的TS声明文件
```typescript
declare var jQuery: (selector: string) => any;
```

很多的第三方库都定义了对应的声明文件库, 库文件名一般为 `@types/xxx`, 可以在 `https://www.npmjs.com/package/package` 进行搜索  

有的第三库在下载时就会自动下载对应的声明文件库(比如: webpack),有的可能需要单独下载(比如jQuery/react)

## 内置对象

JavaScript 中有很多内置对象，它们可以直接在 TypeScript 中当做定义好了的类型。  

内置对象是指根据标准在全局作用域（Global）上存在的对象。这里的标准是指 ECMAScript 和其他环境（比如 DOM）的标准。

1. ECMAScript 的内置对象

> Boolean  
> Number  
> String  
> Date  
> RegExp  
> Error  

```typescript
/* 1. ECMAScript 的内置对象 */
let b: Boolean = new Boolean(1)
let n: Number = new Number(true)
let s: String = new String('abc')
let d: Date = new Date()
let r: RegExp = /^1/
let e: Error = new Error('error message')
b = true
// let bb: boolean = new Boolean(2)  // error
```

2. BOM 和 DOM 的内置对象

> Window  
> Document  
> HTMLElement  
> DocumentFragment  
> Event  
> NodeList  

```typescript
const div: HTMLElement = document.getElementById('test')
const divs: NodeList = document.querySelectorAll('div')
document.addEventListener('click', (event: MouseEvent) => {
  console.dir(event.target)
})
const fragment: DocumentFragment = document.createDocumentFragment()
```




