function hello_world(num) {
    if (num % 2 == 0) {
      return "Hello Even World"
    } else {
      console.log('meep');
      console.log('meep');
      return "Hello Odd World"
    }
}


function test(num) {
  if (num % 1 == 0) {
    return "Hello Even World"
  }
}

module.exports = hello_world;