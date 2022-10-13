console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
   console.log('Hello,', name + '!');
}
// Remember to call the function to test
helloName('Stacy');

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  let answer = firstNumber + secondNumber;
  return answer;
}  
// return firstNumber + secondNumber;
console.log('Function 3:', addNumbers(9,15));

// 4. Function to multiply three numbers & return the result
function multiplyThree( firstNumber, secondNumber, thirdNumber ){
  let answer = firstNumber * secondNumber *  thirdNumber;
  return answer
}

console.log('Function 4:', multiplyThree(1,2,3))
// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }if ( number <= 0 ){
    return false;
  }
};

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
  let lastItem = array.pop();
  return lastItem;
}

console.log('Function 6:', getLast([1,2,3,4,5,8]))
console.log('Function 6 empty array:', getLast([]));
// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  for (let x=0; x<array.length; x++){
  if (array[x]==value)
    return true;
  }
};

console.log('Function 7',find(9,[6,7,8,9]))

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (letter == string.charAt(0)){
    return true;
  }else {
    return false;
  }
};

console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  for (let x=0; x<array.length; x+=1){
    sum += array[x];
  }
  // TODO: loop to add items
  return sum;
};

console.log('Function 9:',sumAll([1,2,3,4,5,6,7,8,9]))
// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function sumAllPositive(array){
  let sum = 0
  for (let x=0; x<array.length; x+=1)
    if(array[x]>0)
      sum += array[x];
    return sum;
};

console.log('Function 10:',sumAllPositive([1,2,3,4,5,6,7,8,-9]))
// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


//Complete the square sum function so that it squares each number passed into it and then sums the results together.
//www.codewars.com
function squareSum(numbers){
  let sum = 0;
  for (let x=0; x<numbers.length; x+=1){
    sum += numbers[x] * numbers[x];
  }return sum;
};


//Testing
console.log(squareSum([1,2,3,4,5,6]));
console.log(squareSum([-1,2,-3,4,5,6]));
console.log(squareSum([876,933.3]));

//This weeks slack question
function laundry(basketFull, detergentEmpty){
  if(basketFull == true && detergentEmpty == false){
    return 'Run Load!';
  }else if(basketFull == true && detergentEmpty == true){
    return 'Go to store!';
  } else{
    return 'Your all caught up!';
  }
};
console.log(laundry(false,true));