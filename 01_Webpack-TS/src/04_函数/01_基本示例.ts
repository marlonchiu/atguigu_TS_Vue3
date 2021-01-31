// TODO 函数 -- 基本示例
// 函数:封装了一些重复使用的代码,在需要的时候直接调用即可

;(() => {
  // js中的书写方式----->在ts中同样的可以这么写
  // 函数声明,命名函数
  // function add(x, y) { // 求和的函数
  //   return x + y
  // }
  // 函数表达式,匿名函数
  // const add2 = function (x, y) {
  //   return x + y
  // }

  // ts中的书写方式
  // 函数声明,命名函数
  // 函数中的x和y参数的类型都是string类型的,小括号后面的:string,代表的是该函数的返回值也是string类型的
  function add(x: string, y: string): string {
    return x + y
  }
  const result1: string = add('111', '222')
  console.log(result1)

  // 函数表达式,匿名函数
  // 函数中的x和y参数的类型都是number类型的,小括号后面的:number,代表的是该函数的返回值也是number类型的
  const add2 = function (x: number, y: number): number {
    return x + y
  }
  console.log(add2(10, 20))

  // 函数的完整的写法
  // add3---->变量名--->函数add3
  // (x: number, y: number) => number 当前的这个函数的类型
  // function (x: number, y: number): number { return x+y }  就相当于符合上面的这个函数类型的值
  const add3: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y
  }
  console.log(add3(10, 100))
})()
