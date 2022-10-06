// SCOPE


/*

scope in javascript refers to the context in which variables are accessible within a code

- Global scope
- Local scope

 */














const species = "human";

const transform = () => {
  //const species = "werewolf";
  return species
}

console.log(species);
console.log(transform());
