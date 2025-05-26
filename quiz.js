//SDFT14 JS PRACTICE QUIZ
//Daniel Muhia
//Caleb Muindi
//Yussuf Abdirizak


/*1. What will be the output of the following code?
let a = 5;
let b = "5";
console.log(a == b);
console.log(a === b);*/
//Output: true
//      : false

/*2. Write a program that takes a number and prints "Even" if it’s even, and "Odd" if it’s odd.*/
function evenOrOdd(n) {
  console.log(n % 2 === 0 ? "Even" : "Odd");
}

// Example:
evenOrOdd(4); // "Even"
evenOrOdd(7); // "Odd"


/*3. Given a score out of 100, print:
"A" for 90–100


"B" for 80–89


"C" for 70–79


"Fail" for anything below 70*/
function getGrade(score) {
  if (score >= 90 && score <= 100) {
    console.log("A");
  } else if (score >= 80 && score <= 89) {
    console.log("B");
  } else if (score >= 70 && score <= 79) {
    console.log("C");
  } else if (score < 70 && score >= 0) {
    console.log("Fail");
  } else {
    console.log("Invalid score");
  }
}

// Example usage:
getGrade(95);  // Output: "A"

/*4. Write a function isPrime(n) that returns true if the number is prime, false otherwise.*/
function isPrime(n) {
  if (n <= 1) {
    return false; 
  }
  if (n <= 3) {
    return true; 
  }
  if (n % 2 === 0 || n % 3 === 0) {
    return false; 
  }
  
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}


/*5. Write a function that takes a string and returns the reversed version of that string.*/
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Example:
console.log(reverseString("fresh")); // "hserf"



/*6. Write a simple login simulation:
If username is "admin" and password is "1234", print "Access granted".
Otherwise, print "Access denied".*/
function login(username, password) {
  if (username === "admin" && password === "1234") {
    console.log("Access granted");
  } 
  else {
    console.log("Access denied");
  }
}

/*7. Write a function that evaluates a password string:
At least 8 characters
Includes at least one number
Includes at least one uppercase letter 
Return "Strong" if all true, else "Weak".*/
function evaluatePassword(password) {
  const hasLength = password.length >= 8;
  const hasNumber = /\d/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  if (hasLength && hasNumber && hasUppercase) {
    return "Strong";
  } 
  else {
    return "Weak";
  }
}



/*8. Create a function that accepts a string and returns true if it is a palindrome.*/
function isPalindrome(str) {
  const s = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return s === s.split("").reverse().join("");
}

/*9.Print numbers from 1 to 50. For multiples of 3, print "Fizz"; for multiples of 5, 
print "Buzz"; for both, print "FizzBuzz". */
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) { 
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

/*10.Write a function drawTree(n) that prints a left-aligned triangle of asterisks (*) with n rows.
Each row should contain one more * than the previous row. */
function drawTree(n) {
  for (let i = 1; i <= n; i++) {
    console.log("*".repeat(i));
  }
}


