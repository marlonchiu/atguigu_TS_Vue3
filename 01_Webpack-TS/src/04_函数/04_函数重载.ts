// TODO 函数 -- 函数重载
// 函数重载:函数名字相同,函数的参数及个数不同

;(() => {
  // 定义一个函数
  // 需求: 我们有一个add函数，它可以接收2个string类型的参数进行拼接，也可以接收2个number类型的参数进行相加

  // 函数重载声明
  function add(x: string, y: string): string
  function add(x: number, y: number): number

  // 函数声明
  function add(x: number | string, y: number | string): number | string {
    if (typeof x === 'number' && typeof y === 'number') {
      return x + y // 数字相加
    } else if (typeof x === 'string' && typeof y === 'string') {
      return x + y // 字符串拼接
    }
  }

  // 两个参数都是字符串
  console.log(add('诸葛', '孔明'))
  // 两个参数都是数字
  console.log(add(10, 20))
  // 此时如果传入的是非法的数据，ts应该给我提示出错误的信息内容,报红色错误的信息
  // console.log(add('真香', 10))
  // console.log(add(100, '真好'))
})()
