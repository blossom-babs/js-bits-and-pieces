// conditional in map function

const students = [
  {
    name: "Blossom",
    age: "16",
    location: "Lagos",
    hobbies: ['reading, exercise']
  },
  {
    name: "Liza",
    age: "18",
    location: "Paris",
    hobbies: ['horse-racing, exercise']
  },
  {
    name: "Dani",
    age: "14",
    location: "Lagos",
    hobbies: ['fishing, football']
  }
]

students.map(item => {
  if (item.location == "Lagos") {
    console.log(item)
  }
})

students.map(item => {
  item.location == "Lagos" ?
    console.log(item) : ""
})

students.map(item => {
  item.location == "Lagos" &&
    console.log(item)
})
