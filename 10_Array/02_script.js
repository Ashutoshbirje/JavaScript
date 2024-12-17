// Splicing and Slicing Arrays

// Splice --> add new items to an array
const arr1=[1,2,3,4];
console.log(arr1);
// arr_name.splice(start_index,number_of_place_to_remove,new values)
arr1.splice(1,2,'ashu');
console.log(arr1);
arr1.splice(2,0,"6","7");
console.log(arr1);
// ??
// arr1.tospliced(0,1); 
// console.log(arr1);

// slice --> slices out a piece of an array into new array
console.log(arr1.slice(2,5));
console.log(arr1.slice(2));
console.log(arr1.slice());// cpy of original array

// join
const joined = arr1.join(',');
console.log(joined);

// split
let msg = "this a personal message"
let part=msg.split(' ');
console.log(part);

