// function that takes a user object
// it removes a favSong id from an array
// object contains:

// {
//     id: 1,
//     username: "michaelIsAwesome",
//     favSongs: [154, 21, 5839, 45]
// }

// it takes the object, and the id to remove

// behaviors to test:

// 1. if not an object or not a number/string number (assume)
// 2. if favSongs does not exist as a key
// 3. if favSongs array is empty
// 4. if song id is not in favSongs
// 5. successfully remove song id and retain the length of array - 1

// implement the following solution, then ask if this is the best solution
// the test will pass, but is it the best test?
// the following code return a different object. We are testing only for the content of the object to match,
// not ensuring that the returned object is the original (e.g. same memory reference)
// will have to add expect(result).toBe(userObj); to ensure this.

// for use after the first implementation
// ======================
// let counter = 0;
// const objectMap = new WeakMap();

// function getUniqueId(obj) {
//   if (!objectMap.has(obj)) {
//     const id = `id_${counter++}`;
//     objectMap.set(obj, id);
//   }
//   return objectMap.get(obj);
// }

// const obj1 = getUniqueId(userObj);
// console.log(obj1);

// const obj2 = getUniqueId(newUserObj);
// console.log(obj2);

// =======================

export const removeSongId = (userObj, songId) => {
  if (typeof userObj !== "object" || typeof songId !== "number")
    return "Invalid input";

  if (userObj.favSongs === undefined)
    return "favSongs does not exist on this object";

  if (userObj.favSongs.length < 1) return "The favSongs array is empty";

  const filteredArr = userObj.favSongs.filter((el) => el !== songId);

  if (filteredArr.length === userObj.favSongs.length) {
    return "song id not found";
  }

  const newUserObj = {
    ...userObj,
    favSongs: filteredArr,
  };

  return newUserObj;

  // userObj.favSongs = filteredArr;

  // return userObj;

  // return {
  //   ...userObj,
  //   favSongs: filteredArr,
  // };
};

console.log(
  removeSongId({ username: "michael", favSongs: [154, 21, 5839, 45] }, 154)
);
