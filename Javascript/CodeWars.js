// The museum of incredible dull things
// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.
// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.
// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.
// Don't change the order of the elements that are left.

function removeSmallest(numbers) {
  const smallestNum = Math.min.apply(null, numbers);
  const position = numbers.indexOf(smallestNum);
  return numbers.slice(0, position).concat(numbers.slice(position + 1))
}

// You live in the city of Cartesia where all roads are laid out in a perfect grid.
// You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk.
// The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point.
// Return false otherwise.

function isValidWalk(walk) {
  let vertical = 0
  let horizontal = 0
  walk.forEach(function(element){
    if(element === 'n'){
      vertical++;
    } else if(element === 's'){
      vertical--;
    } else if(element === 'e'){
      horizontal++;
    } else {
      horizontal--;
    }
  })
  if(vertical == 0 && horizontal == 0 && walk.length == 10){
    return true;
  } else {
    return false;
  }
}

// Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers
// differs from the others. Bob observed that one number usually differs from the others in evenness.
// Help Bob — to check his answers,he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

function iqTest(numbers){
  let arrayOfNumbers = numbers.split(" ").map(x => x % 2);
  let sum = arrayOfNumbers.reduce((a,b) => a + b);
  let targetIndex = sum > 1 ? 0 : 1;
  return arrayOfNumbers.indexOf(targetIndex) + 1;
}

// Count the number of divisors of a positive integer n.
// Random tests go up to n = 500000.

function getDivisorsCnt(n){
  let count = 0;
  for (let i = 1; i <= n; i++){
    if (n % i === 0){
      count++;
    }
  }
  return count
}

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.

function validatePIN (pin) {
  let isnum = /^\d+$/.test(pin);
  if(pin.length === 4 || pin.length === 6){
    if (isnum) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

// You are given an odd-length array of integers, in which all of them are the same, except for one single number.
// Complete the method which accepts such an array, and returns that single different number.

function stray(numbers) {
  let countHash = {}
  numbers.map((element) => {
    countHash.hasOwnProperty(element) ? countHash[element] += 1 : countHash[element] = 1
  })
  return parseInt(Object.keys(countHash).find(key => countHash[key] === 1));
}

// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
// What if the string is empty? Then the result should be empty object literal, {}.

function count (string) {  
  let arrayOfLetters = string.split('');
  let countObject = {};
  arrayOfLetters.map(letter => {
    countObject[letter] ? countObject[letter] += 1 : countObject[letter] = 1
  })
  return countObject;
}

// Enough is enough!
// Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motive usually repeats. He isn't fond of seeing the Eiffel tower 40 times. He tells them that he will only sit during the session if they show the same motive at most N times. Luckily, Alice and Bob are able to encode the motive as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?
// Task
// Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering. For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].

function deleteNth(arr,n){
  let returnedArray = []
  function countOccurences(element){
    let count = 0
    returnedArray.forEach(item => {
      item === element ? count++ : null
    })
    return count
  }
  arr.forEach(item => {
    if(countOccurences(item) < n){
      returnedArray.push(item)
    }
  })
  return returnedArray;
}

// Let us begin with an example:
// A man has a rather old car being worth $2000. He saw a secondhand car being worth $8000. He wants to keep his old car until he can buy the secondhand one.
// He thinks he can save $1000 each month but the prices of his old car and of the new one decrease of 1.5 percent per month. Furthermore this percent of loss increases of 0.5 percent at the end of every two months. Our man finds it difficult to make all these calculations.
// Can you help him?
// How many months will it take him to save up enough money to buy the car he wants, and how much money will he have left over?

function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
  //your code here
  if (startPriceNew <= startPriceOld){
    return [0, Math.round(startPriceOld - startPriceNew)];
  };
  let months = 0;
  let total = startPriceOld;
  while (startPriceNew >= total){
    months++;
    total += savingperMonth;
    total -= startPriceOld * percentLossByMonth / 100
    startPriceNew -= startPriceNew * percentLossByMonth / 100;
    startPriceOld -= startPriceOld * percentLossByMonth / 100;
    months % 2 ? percentLossByMonth += 0.5 : percentLossByMonth;
  }
  return [months, Math.round(total - startPriceNew)]
}