// TODO 类 -- 存取器
// 存取器:让我们可以有效的控制对 对象中的成员的访问,通过getters和setters来进行操作

;(() => {
  class Person {
    firstName: string
    lastName: string
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName
      this.lastName = lastName
    }

    // 读取器----负责读取数据的
    get fullName() {
      console.log('get中...')
      return this.firstName + '_' + this.lastName
    }
    // 设置器----负责设置数据的(修改)
    set fullName(val) {
      console.log('set中...')
      const [firstName, lastName] = val.split('_')
      this.firstName = firstName
      this.lastName = lastName
    }
  }

  const person: Person = new Person('东方', '不败')
  console.log(person)
  console.log(person.fullName)
  person.fullName = '诸葛_孔明'
  console.log(person.lastName)
})()
