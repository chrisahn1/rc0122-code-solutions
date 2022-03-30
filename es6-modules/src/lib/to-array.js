function toArray(value) {
  return Array.isArray(value) ? value : [value];
}

export default toArray;
// module.exports = toArray;

// class toArray {
//   constructor(value) {
//     return Array.isArray(value) ? value : [value];
//   }
// }
