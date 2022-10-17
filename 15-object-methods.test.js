// object methods

const animal = {
  specie: 'goat',
  breeds: ['Australian brown', 'barbari', 'chigu', 'damascus'],
  legs: 4,
  hasTail: true,
  sound: () => {
    return 'meh meh'
  }
}













// Object.keys()
// let ex = Object.keys(animal)
// if(ex.includes('breed')){
//   console.log('something')
// }























// Object.values()
//console.log(Object.values(animal))

















// Object.entries()
let ex = Object.entries(animal)

for(let item of ex){
  console.log(item[0])
}