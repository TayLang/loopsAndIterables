/**
 * PART 0
 *
 * Write a function that calculates the sum of all the numbers in an array
 */
var arraySum = function(x) {
    var sum = 0
	for (var i = 0; i < x.length; i++) {
        sum += x[i]
    }
    return sum
}
// PART 1

// Write a function maxOfArray() that takes an array of
// numbers as an argument and returns the highest number in the array.

var maxOfArray = function(numberArray) {
	var max = 0
	for(var i = 0; i < numberArray.length; i++) {
        log(numberArray[i])
		if (numberArray[i] > max)	{
			max = numberArray[i]
		}
    }
	return max
}

/**
 * PART 2
 *
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * as input and returns true if it is a vowel, false otherwise.
 */

var isVowel = function(char) {
    var vowelArray = ['a','e','i','o','u']
 	for (var i = 0; i<vowelArray.length; i=i+1) {
        if (char === vowelArray[i]) {
            return true
        }
        else {
            return false
        }
    }
}

/**
 * Part 3
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */

var reverse = function(word) {
 var revWord = ''
 for (var i = word.length-1; i>=0; i--) {
 revWord += word[i] 
 }
  return revWord
 }


/**
 * Part 4
 *
 * write a function the returns a fizzbuzz string for an input number. 
 A fizzbuzz string is defined as the following:
 For every number from 1 to the input number...
 * - if that number isn't a multiple of 3 or 5, add a period "." to the fizzbuzz string
 * - for every number that is a multiple of 3 (but not 5), add "fizz" to the fizzbuzz string
 * - for every number that is a multiple of 5 (but not 3), add "buzz" to the fizzbuzz string
 * - for every number that is a multiple of 3 and 5, add "fizzbuzz" to the fizzbuzz string
 For example, the fizzbuzz string for the number 3 is "..fizz"
 For the number 15, the fizzbuzz string is "..fizz.buzzfizz..fizzbuzz.fizz..fizzbuzz"
 */
var fizzy = function(fizznum) {
    var fizzstring = ''
    //if ( var i = 0; /*//figuring out how to apply all numbers*/; i++;) {
    if (i !== fizznum % 3 && i !== fizznum % 5) {
      return '.'   
     }
    else if (i === fizznum % 3 && i !== fizznum % 5) {
         return "fizz"   
        }
    else if (i !== fizznum % 3 && i === fizznum % 5) {
         return "buzz"
    	}
    else if (i === fizznum % 3 && i === fizznum % 5) {
     	 return "fizzbuzz"   
    	}
    }
        
}

/**
 * Part 5
 *
 * Write a function findLongestWord() that takes a string of 
 words and returns the longest word.
 * i.e. findLongestWord("a book full of dogs") should return "book"
 */


/**
 * PART 6
 *
 * write a function that returns the Greatest Common Denominator of two numbers
 * - if no GCD exists, return 1
 */

