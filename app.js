const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function removeElement(array, item) {

    const index = array.indexOf(item);
  
    if (index >= 0) {
      array.splice(index, 1);
    }
  
    return array;
  }

  removeElement(array2, 12);
  
  console.log(array2);