'use strict';

// Complete this algo
const binarySearch = (array, target) => {

	//create a start pointer and end pointer
	let start = 0;
	let end = array.length;
	while(start < end){
		let midPoint = Math.floor((start + end)/2);
		if(array[midPoint] === target){
			return true
		}else if(start === end -1){
			return false;
		}else if(array[midPoint] < target){
			start = midPoint;
		}else if(array[midPoint] > target){
			end = midPoint;
		}
	}

// edge cases //

// if (array.length === 1 && target === array[0]){
// return true
// }
// if (array.length === 0) return false


// const midPoint = Math.floor(array.length/2)

// if (array[midPoint] === target){
// 	return true
// }else {

// 	if (array[midPoint] > target) {
// 		// call binary function and pass newly sliced array //
// 		const leftArray = array.slice(0,midPoint)
// 		if (binarySearch(leftArray,target)) return true
// 		return false
// 	}

// 	if (array[midPoint] < target) {


// 		const rightArray = array.slice(midPoint+1)
// 		if (binarySearch(rightArray,target)) return true
// 		return false
// 	}

// }

};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
