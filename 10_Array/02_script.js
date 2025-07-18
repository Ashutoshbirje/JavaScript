// Splicing and Slicing Arrays

const arr1=[1,2,3,4];
console.log(arr1);

// Splice --> add new items to an array
// arr_name.splice(start_index,number_of_place_to_remove,new values)
// make change in old array // imp
arr1.splice(1,2,'ashu');
console.log(arr1);
arr1.splice(2,0,"6","7");
console.log(arr1);

// create a new array ??
// const arr2=arr1.toSpliced(0, 1);
// console.log(arr2);
 
// slice --> slices out a piece of an array into new array
// arr_name.slice(start_index,number_of_place_to_move_in_new_array)
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

