let person = {
  name: '小明',
  age: 18,
  address: {
    city: 'ChongQing',
    area: 'RedRock'
  },
  title: ['student',{year:2025, title:'GoodStudent'}]
}
let {name, age, address: {city, area}, title: [student, {year, title}]} = person
console.log(name) 
console.log(year) 
console.log(city) 
console.log(area) 
console.log(student) 
console.log(title) 


// 递归
function func1(i){
    if(i==1||i==0){
        return 1
    }
    else if(i>1){
        return i*func1(i-1)  
    }
}
console.log(func1(10))

// 嵌套
function func2(i){
    let sn=1
    for(let i=2;i<=10;i++){
      sn=sn*i
    }
    return sn
} 
console.log(func2(10))
