// Other types of funtions

// 1. anonymous function

let named = function () {
  console.log('hello world')
}


setTimeout(function () {
  console.log('Execute later after 1 second')
}, 1000);




// 2. Immediately Invoked functions(IIFE)


(function named() {
  console.log('an IIFE')
}())



(function () {
  console.log('an IIFE')
}())



// 3. Nested functions

function outer() {
  let name = 'Yusef';

  function inner() {
    let pet = 'dog'
    console.log('hello ' + name)
  }

  console.log(pet)
  inner()
}

outer()