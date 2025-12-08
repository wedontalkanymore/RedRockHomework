
// 方式1: 输出函数引用（当前代码）
console.log(Person);
const Person = function person(name, age, sex) {
  this.name = name
  this.age = age
  this.sex = sex
}

// 方式2: 直接在console.log中定义并输出函数表达式
console.log(function person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
});

// 方式3: 直接在console.log中定义并调用函数
console.log(
  // 1. 立即执行函数表达式(IIFE)的开始
  (
    // 2. 匿名函数定义部分
    function (name, age, sex) {
      // 3. 函数参数：name, age, sex分别接收传入的值
      // 4. 函数体：使用模板字符串返回格式化文本
      // 5. 模板字符串：`${变量}`用于在字符串中嵌入变量值
      return `姓名: ${name}, 年龄: ${age}, 性别: ${sex}`;
    }
      // 6. 立即调用函数，传入三个实参
      ('张三', 25, '男')
  )
  // 7. 整个IIFE的结果作为console.log的参数被输出
);

// 解释：
// - console.log是JavaScript的内置函数，用于将信息输出到控制台
// - 这种写法创建了一个立即执行函数表达式(IIFE - Immediately Invoked Function Expression)
// - 执行流程：定义函数 → 立即调用 → 获取返回值 → console.log输出返回值

// 定义一个多维数组
let Arr = [[1, [2, 3], 4], [5, [6, 7], 8, 9]];

// 定义扁平化函数，将多维数组转为一维数组
function flatten(arr) {
  // 使用reduce方法遍历数组
  // reduce方法接收两个参数：回调函数和初始值
  return arr.reduce(
    // 回调函数：接收两个参数 result(累积结果) 和 item(当前遍历项)
    (result, item) => {
      // 检查当前项是否为数组
      if (Array.isArray(item)) {
        // 如果是数组，递归调用flatten函数处理嵌套数组
        // 然后将处理结果与当前累积结果合并
        return result.concat(flatten(item));
      } else {
        // 如果不是数组，直接将当前项添加到累积结果中
        return result.concat(item);
      }
    },
    // 初始值：空数组[]，作为第一次调用回调函数时的result值
    []
  );
}

// 调用flatten函数并输出结果
// 输出: [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(flatten(Arr));

// 代码执行流程说明：
// 1. 初始调用：flatten([[1, [2, 3], 4], [5, [6, 7], 8, 9]])，result=[]
// 2. 遍历第一项 [1, [2, 3], 4]，是数组，递归调用flatten
//    a. 递归调用flatten([1, [2, 3], 4])，result=[]
//    b. 遍历1，不是数组，result变为[1]
//    c. 遍历[2, 3]，是数组，递归调用flatten
//       i. 递归调用flatten([2, 3])，result=[]
//       ii. 遍历2，不是数组，result变为[2]
//       iii. 遍历3，不是数组，result变为[2, 3]
//       iv. 返回[2, 3]，与上层result[1]合并为[1, 2, 3]
//    d. 遍历4，不是数组，与result[1, 2, 3]合并为[1, 2, 3, 4]
//    e. 返回[1, 2, 3, 4]，与最上层result[]合并为[1, 2, 3, 4]
// 3. 遍历第二项 [5, [6, 7], 8, 9]，是数组，递归调用flatten
//    a. 递归调用flatten([5, [6, 7], 8, 9])，result=[]
//    b. 遍历5，不是数组，result变为[5]
//    c. 遍历[6, 7]，是数组，递归调用flatten
//       i. 递归调用flatten([6, 7])，result=[]
//       ii. 遍历6，不是数组，result变为[6]
//       iii. 遍历7，不是数组，result变为[6, 7]
//       iv. 返回[6, 7]，与上层result[5]合并为[5, 6, 7]
//    d. 遍历8，不是数组，与result[5, 6, 7]合并为[5, 6, 7, 8]
//    e. 遍历9，不是数组，与result[5, 6, 7, 8]合并为[5, 6, 7, 8, 9]
//    f. 返回[5, 6, 7, 8, 9]，与最上层result[1, 2, 3, 4]合并为最终结果
// 4. 最终返回并输出完整的一维数组：[1, 2, 3, 4, 5, 6, 7, 8, 9]