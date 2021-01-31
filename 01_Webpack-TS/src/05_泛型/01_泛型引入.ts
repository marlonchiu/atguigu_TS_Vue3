// TODO 泛型 -- 泛型引入
// 泛型:在定义函数、接口、类的时候不能预先确定要使用的数据的类型,而是在使用函数、接口、类的时候才能确定数据的类型

;(() => {
  // 需求:定义一个函数,传入两个参数,第一参数是数据,第二个参数是数量,函数的作用:根据数量产生对应个数的数据,存放在一个数组中
  // 定义一个函数
  function getArr1(value: number, count: number): number[] {
    // 根据数据和数量产生一个数组
    // const arr: number[] = []
    // for (let i = 0; i < count; i++) {
    //   arr.push(value)
    // }
    // return arr
    return Array(count).fill(value)
  }
  const arr1 = getArr1(100.123, 3)
  console.log(arr1)

  // 定义一个函数,同上,只不过传入的是字符串类型
  function getArr2(value: string, count: number): string[] {
    return Array(count).fill(value)
  }
  const arr2 = getArr2('abc', 4)
  console.log(arr2)

  // 需求:可以传入任意类型的数据,返回来的是存储这个任意类型数据的数组
  function getArr3(value: any, count: number): any[] {
    return Array(count).fill(value)
  }
  const arr3 = getArr3(100, 4)
  console.log(arr3)
  const arr4 = getArr3('asdfg', 4)
  console.log(arr4)
  // arr3中存储的是数字类型的数据
  // arr4中存储的是字符串类型的数据
  console.log(arr3[0].toFixed(2)) // 没有任何的智能提示的信息(要么有方法名字的提示信息,要么有错误的提示信息)
  console.log(arr4[0].split('')) // 没有任何的智能提示的信息(要么有方法名字的提示信息,要么有错误的提示信息)

  function getArr4<T>(value: T, count: number): T[] {
    return Array(count).fill(value)
  }
  const arr5 = getArr4<number>(200.12345, 5)
  const arr6 = getArr4<string>('abcde', 5)
  console.log(arr5)
  console.log(arr6)
  console.log(arr5[0].toFixed(3))
  console.log(arr6[0].split(''))
})()
