// difference between strict and loose equal

/*
      strict(===)                 loose(==)
1.    compares values and types   compares type
2.    no conversion               implicit conversion
3.    follows the same rules      !=
      for negation (!==)

*/

console.log("999" === 999)

let str = Number("1")
console.log(typeof str)

