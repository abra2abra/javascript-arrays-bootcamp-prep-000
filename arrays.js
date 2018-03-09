var chocolateBars = [
  'snikers',
  'hundred grand',
  'kitkat',
  'skittles'
  ];
  
chocolateBars =  [...chocolateBars, 'choco'];
  
  function addElementToBeginningOfArray(array, element){
    return [element, ...array];
  }
  
  function destructivelyAddElementToBeginningOfArray(array, element){
    array.unshift(element);
    return array;
  }
  
  function addElementToEndOfArray(array, element){
    var newArray = [ ...array, element];
    return newArray;
  }
  
  function destructivelyAddElementToEndOfArray(array, element){
    array.push(element);
    return array;
  }
  
  function accessElementInArray(array, index){
    return array[index];
  }
  
  function destructivelyRemoveElementFromBeginningOfArray(array){
    array.shift()
    return array;
  }
  
  function removeElementFromBeginningOfArray(array){
    var newArray = array.slice(1);
    return newArray;
  }