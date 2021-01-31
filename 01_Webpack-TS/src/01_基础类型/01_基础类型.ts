// todo 基础类型
;(() => {
  // 布尔类型  -----> boolean
  // 基本语法
  // let 变量名: 数据类型 = 值
  let flag: boolean = true
  flag = false
  // flag = 10 报错
  console.log(flag)

  console.log('----------------boolean------------------------')

  // 数字类型  -----> number
  let a1: number = 10 // 十进制
  let a2: number = 0b1010 // 二进制
  let a3: number = 0o12 // 八进制
  let a4: number = 0xa // 十六进制
  console.log(a1)
  console.log(a2)
  console.log(a3)
  console.log(a4)
  // a1 = '哈哈' 报错

  console.log('-------------------number---------------------')

  // 字符串类型  ----> string
  let str1: string = '床前明月光'
  let str2: string = '小明去开窗'
  let str3: string = '遇到一耳光'
  let str4: string = '牙齿掉光光'
  console.log(`${str1},${str2},${str3},${str4}`)

  // 字符串和数字之间能够一起拼接
  let str5: string = '我有这么多的钱'
  let num: number = 1000
  console.log(str5 + num)

  // 总结:ts中变量一开始是什么类型,那么后期赋值的时候,只能用这个类型的数据,是不允许用其他类型的数据赋值给当前的这个变量中
  // 如: let str: string = '真香' str=100 ,没有武德(不允许)

  console.log('-----------------string-----------------------')

  // undefined 和 null
  let und: undefined = undefined
  let nll: null = null
  console.log(und)
  console.log(nll)
  // undefined 和 null 都可以作为其他类型的子类型,把undefined 和null 赋值给其他类型的变量的,如:number类型的变量
  // let num2: number = undefined
  // let num2: number = null
  // console.log(num2)

  console.log('-----------------undefined 和 null-----------------------')

  // 数组类型
  // 数组定义方式1
  // 语法: let 变量名: 数据类型[] = [值1,值2,值3]
  let arr1: number[] = [10, 20, 30, 40, 50]
  console.log(arr1)
  // 数组定义方式2:泛型的写法
  // 语法: let 变量名: Array<数据类型> = [值1,值2,值3]
  let arr2: Array<number> = [100, 200, 300]
  console.log(arr2)
  let arr4: Array<number | string | boolean> = [100, 200, 300, 'jack', false]
  console.log(arr4)

  // 注意问题:数组定义后,里面的数据的类型必须和定义数组的时候的类型是一致的,否则有错误提示信息,也不会编译通过的

  // 元组类型:在定义数组的时候,类型和数据的个数一开始就已经限定了
  let arr3: [string, number, boolean] = ['小甜甜', 100.12645, true]
  console.log(arr3)
  // 注意问题:元组类型在使用的时候,数据的类型的位置和数据的个数 应该和在定义元组的时候的数据类型及位置应该是一致的
  console.log(arr3[0].split(''))
  console.log(arr3[1].toFixed(2))

  console.log('-----------------数组 array 和 元祖-----------------------')

  // 枚举类型,枚举里面的每个数据值都可以叫元素,每个元素都有自己的编号,编号是从0开始的,依次的递增加1
  enum Color {
    Red = 1,
    Green,
    Blue
  }
  // 定义一个Color的枚举类型的变量来接收枚举的值
  let color: Color = Color.Red
  console.log(color)
  console.log(Color.Red, Color.Green, Color.Blue)
  console.log(Color[3])
  // 小例子,枚举中的元素可以是中文的数据值,但是不推荐
  // enum Gender {
  //   女,
  //   男
  // }
  // console.log(Gender.男)
  console.log('-----------------枚举 enum-----------------------')

  // any 类型
  // let str: any = 100
  // str = '年少不知富婆好,错把少女当成宝'
  // console.log(str)
  // 当一个数组中要存储多个数据,个数不确定,类型不确定,此时也可以使用any类型来定义数组
  let arr: any[] = [100, '年少不知软饭香,错把青春倒插秧', true]
  console.log(arr)
  // 这种情况下也没有错误的提示信息,any类型有优点,也有缺点
  // console.log(arr[0].split(''))

  console.log('-----------------any-----------------------')

  // void 类型,在函数声明的时候,小括号的后面使用:void,代表的是该函数没有任何的返回值
  function showMsg(): void {
    console.log('只要富婆把握住,连夜搬进大别墅')
    // return
    // return undefined
    // return null
  }
  console.log(showMsg())
  // 定义void类型的变量,可以接收一个undefined的值,但是意义不是很大
  // let vd: void = undefined
  // console.log(vd)

  console.log('-----------------void-----------------------')

  // object 类型
  // 定义一个函数,参数是object类型,返回值也是object类型
  function getObj(obj: object): object {
    console.log(obj)
    return {
      name: '卡卡西',
      age: 27
    }
  }
  // console.log(getObj({ name: '佐助', age: '男' }))
  // console.log(getObj('123')) // 错误的
  // console.log(getObj(new String('123')))
  // console.log(getObj(String))

  console.log('-----------------object-----------------------')

  // todo 联合类型（Union Types）表示取值可以为多种类型中的一种
  // 需求1: 定义一个函数得到一个数字或字符串值的字符串形式值
  // function getString(str: number | string): string {
  //   return str.toString()
  // }
  // console.log(getString('123'))

  // 需求2: 定义一个函数得到一个数字或字符串值的长度

  // todo 类型断言:告诉编译器,我知道我自己是什么类型,也知道自己在干什么
  // 类型断言的语法方式1: <类型>变量名
  // 类型断言的语法方式2: 值 as 类型

  function getString(str: number | string): number {
    // return str.toString().length
    // 如果str本身就是string类型,那么是没有必要调用toString()方法的

    // if ((<string>str).length) {
    //   // str.length存在吗?如果存在也就说明str是string类型的
    //   // return (<string>str).length
    //   return (str as string).length
    // } else {
    //   // 此时说明str是number类型
    //   return str.toString().length
    // }
    if ((str as string).length) {
      // str.length存在吗?如果存在也就说明str是string类型的
      return (<string>str).length
    } else {
      // 此时说明str是number类型
      return str.toString().length
    }
  }
  console.log(getString(12345))
  console.log(getString('0123456'))

  console.log('-----------------联合类型 类型断言-----------------------')

  // 类型推断:没有明确的指定类型的时候推测出一个类型
  // 有下面2种情况:
  // 1. 定义变量时赋值了, 推断为对应的类型.
  // 2. 定义变量时没有赋值, 推断为any类型

  // let txt = 100 // number 类型
  // // txt = '小甜甜好帅'
  // console.log(txt)

  let txt2 // any 类型
  txt2 = 100
  txt2 = '帅杨好帅哦'
  console.log(txt2)
  console.log('-----------------类型推断-----------------------')
})()
