// TODO 泛型 -- 多个泛型参数的函数
// 多个泛型参数的函数:函数中有多个泛型的参数
// 常用参数 U T K V

;(() => {
  // 定义一个函数
  function getMsg<K, V>(value1: K, value2: V): [K, V] {
    return [value1, value2]
  }
  const arr1 = getMsg<string, number>('jack', 100.2345)
  console.log(arr1[0].split(''))
  console.log(arr1[1].toFixed(1))
})()
