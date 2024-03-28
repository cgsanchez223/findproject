// findUserByUsername accepts an array of objects, each with a key of username, and a string. Returns first object with the key of username that matches the string passed to the function. If not, return undefined.

const users = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'}
  ]; // Each entry is an object located in an array

  function findUserByUsername(arr, username) {
    return arr.find(function(user){
        return user.username === username;
    })
  } // .find searches for criteria and returns results if 1 matches.

  console.log(findUserByUsername(users, 'mlewis')); // {username: 'mlewis'}
  console.log(findUserByUsername(users, 'taco')); // undefined - no taco in entry



  // removeUser accepts and array of objects, each with a key of username, and a string. Removes the object from the array and returns if object is found. If not, undefined.

  function removeUser(arr, username) {
    let newIndex = arr.findIndex(function(user){
        return user.username === username;
    })
    if(newIndex === -1) return;

    return arr.splice(newIndex,1)[0]; // splice is able to cut and make a new array. 1 is the position of akagen
  }
  console.log(removeUser(users, 'akagen')); // {username: 'akagen'}
  console.log(removeUser(users, 'akagen')); // undefined - since we removed it, it is no longer there