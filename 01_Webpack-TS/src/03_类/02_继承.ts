// TODO 类 -- 继承
// 继承:类与类之间的关系
// 继承后类与类之间的叫法:
// A类继承了B这个类,那么此时A类叫子类,B类叫基类
// 子类---->派生类
// 基类---->超类(父类)
// 一旦发生了继承的关系,就出现了父子类的关系(叫法)

;(() => {
  // 定义一个类,作为基类(超类/父类)
  class Person {
    // 声明属性
    name: string
    age: number
    gender: string

    // 定义构造函数:为了将来实例化对象的时候,可以直接对属性的值进行初始化
    constructor(name: string = '小甜甜', age: number = 16, gender: string = '女') {
      this.name = name
      this.age = age
      this.gender = gender
    }
    // 定义实例方法
    sayHello(str: string) {
      console.log(`大家好, 我是${this.name}, ${str}`)
    }
  }

  // 定义一个类,继承自Person
  class Student extends Person {
    constructor(name: string, age: number, gender: string) {
      // 调用的是父类中的构造函数,使用的是super
      super(name, age, gender)
    }

    sayHello() {
      // 可以调用父类中的方法
      console.log('我是学生类中的 sayHello 方法')
      // 调用父类中的sayHi方法
      super.sayHello('哈哈~~')
    }
  }

  // 实例化Person
  const person = new Person()
  person.sayHello('嘎嘎')
  // 实例化Student
  const student = new Student('大明明', 29, '男')
  student.sayHello()

  // TODO 总结:
  // 类和类之间如果要有继承关系, 需要使用extends关键字
  // 子类中可以调用父类中的构造函数,使用的是super关键字(包括调用父类中的实例方法,也可以使用super)
  // 子类中可以重写父类的方法
})()
