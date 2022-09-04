// why does an empty array evaluate to true?

console.log(Boolean([]))

const students = []

if(students.length > 0){
  console.log('something')
}