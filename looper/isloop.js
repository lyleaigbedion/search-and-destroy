'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
  let current = linkedlist.head;
  const whereWeveBeen = {}
  while (current && !whereWeveBeen[current.value]) { // while not null
    //console.log(current.value);
    whereWeveBeen[current.value] = true;
    current = current.next;
  }
  if(!current){
    return false;
  }
  return true
};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop
