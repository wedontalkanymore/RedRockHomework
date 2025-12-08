function person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}

const 小陈 = new person('小陈', 19, '男');
const 小吴 = new person('小吴', 19, '女');

function copy(insertObj) {
  let newObj = {};
  for (let i in insertObj) {
    newObj[i] = insertObj[i];
  }
  return newObj;
}


let obj1 = copy(小陈);
let obj2 = copy(小吴);

let arr = [];

arr.push(obj1, obj2);

console.table(arr);



