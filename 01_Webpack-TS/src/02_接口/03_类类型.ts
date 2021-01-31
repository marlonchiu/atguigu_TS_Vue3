// TODO 接口 - 类类型
// 类 类型: 类的类型,类的类型可以通过接口来实现

;(() => {
  // 定义一个接口
  interface IFly {
    // 该方法没有任何的实现(方法中什么都没有)
    fly(): void
  }

  // 定义一个类,这个类的类型就是上面定义的接口
  // (实际上也可以理解为, IFly接口约束了当前的这个Person类)

  class Person implements IFly {
    // 实现接口中的方法
    fly() {
      console.log('我会飞了,我是超人')
    }
  }

  // 实例化对象
  const person = new Person()
  person.fly()

  // 定义一个接口
  interface ISwim {
    swim(): void
  }

  class Person2 implements IFly, ISwim {
    // 实现接口中的方法
    fly() {
      console.log('我会飞了~~~~')
    }
    swim() {
      console.log('我会游泳啦~~~~')
    }
  }

  const person2 = new Person2()
  person2.fly()
  person2.swim()

  // 总结: 类可以通过接口的方式,来定义当前这个类的类型
  // 类可以实现一个接口, 类也可以实现多个接口, 要注意, 接口中的内容都要真正的实现

  // 定义了一个接口,继承其他的多个接口
  interface IMyFlyAndSwim extends IFly, ISwim {}
  // 定义一个类,直接实现IMyFlyAndSwim这个接口
  class Person3 implements IMyFlyAndSwim {
    fly() {
      console.log('我会飞了33333333333')
    }
    swim() {
      console.log('我会游泳啦333333333333')
    }
  }
  const person3 = new Person3()
  person3.fly()
  person3.swim()

  // TODO 总结:
  // 接口和接口之间叫继承(使用的是extends关键字),
  // 类和接口之间叫实现(使用的是implements)
})()
