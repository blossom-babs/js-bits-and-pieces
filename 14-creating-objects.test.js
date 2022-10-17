// Different ways of creating objects

// Object literals

const object = {
  property: 'value'
}












// By creating an instance of an object
const obj = new Object()
obj.prop = 'value'

console.log(obj)

















// By using an object constructor

class Person {
  constructor(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
}

const person1 = new Person('Blossom', 'Babs', 20, 'blue')
console.log(person1)