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