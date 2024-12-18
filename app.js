// "use strict";
// chapter no 4
// // Qno1 Declare 3 variables in one statement.?
// let addingNumber = 99;
// let addingNumberTwo = 100;
// let addingNumberThree = 101;

// console.log(addingNumber+addingNumberTwo+addingNumberThree);

// Qno2 Declare 5 legal & 5 illegal variable names.?

// `muhammadHamzaKabeer`(camelcase);
// `since_2024`(underscore);
// `jhunk_food`(snakecase);
// `userName34`(same predifine value adding somethings new add);
// `totalGrossEstimate` (adding a multiple concanating word first letter capital);

// Qno3 Display this in your browser
// document.write("<h1>Rules for Naming JS Variables</h1>");
// document.write("<h4>Variable names can only contain $hamza,_javascript,*system and crowd.</h4>");
// document.write("<h4>Variables must begin with a $smit,_roots,*suggest</h4>");
// document.write("<h4>Variable names are case ksmit,sroots </h4>");
// document.write("<h4>Variable names should not be JS suppose camelCase</h4>");    

// chapter no 5
// // Qno1 Write a program that take two numbers & add them in a new variable. Show the result in your browser.
// let add1 = 3;
// let add2 = 5;
// sum = add1 + add2;
// document.write("sum of 3 and 5 is " + sum);

// Qno2 Repeat task1 for subtraction, multiplication, division &modulus.?

// let = $sub1 = 10;
// let = $sub2 = 6;
// $sub3 = $sub1 - $sub2;
// document.write("<h3> sum of 10 and 6 is "+ $sub3 +" </h3>" )
 
// let = $mul1 = 45;
// let = $mul2 = 23;
// $mul3 = $mul1 * $mul2;
// document.write("<h3> sum of 45 and 23 is "+ $mul3 +" </h3>" )

// let = $div1 = 41;
// let = $div2 = 89;
// $div3 = $div1 / $div2;
// document.write("<h3> sum of 41 and 89 is "+ $div3 +" </h3>" )

// let = _mod1 = 6;
// let = _mod2 = 2;
// _mod3 = _mod1 % _mod2;
// document.write("<h3>" + "sum of 6 add 2 is" + _mod3 + "</h3>");

// Qno3 Do the following using JS Mathematic Expressions?

//  // Step a: Declare a variable
//  let number;

//  // Step b: Show the value of the variable after declaration
//  document.write("Value after variable declaration is: " + number + "<br>");

//  // Step c: Initialize the variable with a number
//  number = 5;

//  // Step d: Show the initial value
//  document.write("Initial value: " + number + "<br>");

//  // Step e: Increment the variable
//  number++;

//  // Step f: Show the value after increment
//  document.write("Value after increment is: " + number + "<br>");

//  // Step g: Add 7 to the variable
//  number += 7;

//  // Step h: Show the value after addition
//  document.write("Value after addition is: " + number + "<br>");

//  // Step i: Decrement the variable
//  number--;

//  // Step j: Show the value after decrement
//  document.write("Value after decrement is: " + number + "<br>");

//  // Step k: Calculate the remainder after dividing the variable by 3
//  let remainder = number % 3;

//  // Step l: Show the remainder
//  document.write("The remainder is: " + remainder + "<br>");


// Qno4 Cost of one movie ticket is 600 PKR. Write a script to store?

// // Store the cost of one movie ticket
// let ticketPrice = 600;

// // Calculate the cost of buying 5 tickets
//         let totalCost = ticketPrice * 5;

// // Display the result on the webpage
// document.write("The cost of one movie ticket is: " + ticketPrice + " PKR<br>");
// document.write("The cost of buying 5 movie tickets is: " + totalCost + " PKR<br>");

// Qno5 Write a script to display multiplication table of any number in your browser. E.g?

//  // Prompt user for the number they want the multiplication table for
//  let number = parseInt(prompt("Enter a number to display its multiplication table:", "5"));

//  // Check if input is a valid number
//  if (!isNaN(number)) {
//      document.write("<h3>Multiplication Table of " + number + "</h3>");
//      // Generate and display the multiplication table
//      for (let i = 1; i <= 10; i++) {
//          document.write(number + " x " + i + " = " + (number * i) + "<br>");
//      }
//  } else {
//      document.write("Invalid input! Please refresh and enter a valid number.");
//  }

// Qno6 The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.?

//  // Step a: Store a Celsius temperature into a variable
//  let celsius = 25;

//  // Step b: Convert Celsius to Fahrenheit
//  let fahrenheitFromCelsius = (celsius * 9 / 5) + 32;

//  // Output the conversion
//  document.write(celsius + "°C is " + fahrenheitFromCelsius + "°F<br>");

//  // Step c: Store a Fahrenheit temperature into a variable
//  let fahrenheit = 77;

//  // Step d: Convert Fahrenheit to Celsius
//  let celsiusFromFahrenheit = (fahrenheit - 32) * 5 / 9;

//  // Output the conversion
//  document.write(fahrenheit + "°F is " + celsiusFromFahrenheit.toFixed(2) + "°C<br>");


// Qno7 Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables?

// // Store the price of items
// let item1Price = 650; // Price of item 1
// let item2Price = 100; // Price of item 2

// // Store the quantity of items
// let item1Quantity = 3; // Quantity of item 1
// let item2Quantity = 7; // Quantity of item 2

// // Store shipping charges
// let shippingCharges = 200;

// // Calculate the total cost of each item
// let item1Total = item1Price * item1Quantity;
// let item2Total = item2Price * item2Quantity;

// // Calculate the total cost of the shopping cart
// let totalCost = item1Total + item2Total + shippingCharges;

// // Display the checkout details
// document.write("<h2>Shopping Cart Checkout</h2>");
// document.write("Price of item 1: " + item1Price + " PKR<br>");
// document.write("Quantity of item 1: " + item1Quantity + "<br>");
// document.write("Price of item 2: " + item2Price + " PKR<br>");
// document.write("Quantity of item 2: " + item2Quantity + "<br>");
// document.write("Shipping Charges: " + shippingCharges + " PKR<br><br>");
// document.write("Total cost of your order is: " + totalCost + " PKR");


// Qno8 Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser?

// // Store total marks and marks obtained by the student
// let totalMarks = 500; // Example: Total marks
// let marksObtained = 400; // Example: Marks obtained by the student

// // Compute the percentage
// let percentage = (marksObtained / totalMarks) * 100;

// // Display the result
// document.write("<h2>Marks Percentage Calculator</h2>");
// document.write("Total Marks: " + totalMarks + "<br>");
// document.write("Marks Obtained: " + marksObtained + "<br>");
// document.write("Percentage: " + percentage.toFixed(2) + "%");

// Qno9 Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 278.20 Pakistani Rupee and 1 Saudi Riyal = 74.02 Pakistani Rupee)?

//  // Currency amounts
//  let usDollars = 10;
//  let saudiRiyals = 25;

//  // Exchange rates
//  let usdToPkr = 278.20; // 1 US Dollar to PKR
//  let sarToPkr = 74.02;  // 1 Saudi Riyal to PKR

//  // Total amount in Pakistani Rupees (single expression)
//  let totalPkr = (usDollars * usdToPkr) + (saudiRiyals * sarToPkr);

//  // Display the result
//  document.write("<h2>Currency Conversion to Pakistani Rupees</h2>");
//  document.write("Amount in US Dollars: " + usDollars + " (1 USD = " + usdToPkr + " PKR)<br>");
//  document.write("Amount in Saudi Riyals: " + saudiRiyals + " (1 SAR = " + sarToPkr + " PKR)<br><br>");
//  document.write("Total in Pakistani Rupees: " + totalPkr.toFixed(2) + " PKR");

// Qno10 Write a program to initialize a variable with some number and do arithmetic in following sequence: a. Add 5 b. Multiply by 10 c. Divide the result by 2 Perform all calculations in a single expression

//   // Initialize a variable with some number
//   let number = 10;

//   // Perform all calculations in a single expression
//   let result = ((number + 5) * 10) / 2;

//   // Display the result
//   document.write("<h2>Arithmetic Operations</h2>");
//   document.write("Initial number: " + number + "<br>");
//   document.write("Result after adding 5, multiplying by 10, and dividing by 2: " + result);


// Qno11 The Age Calculator: Forgot how old someone is? Calculate it! a. Store the current year in a variable. b. Store their birth year in a variable. c. Calculate their 2 possible ages based on the stored values.?

//  // Step a: Store the current year in a variable
//  let currentYear = 2024;

//  // Step b: Store the birth year in a variable
//  let birthYear = 2001;

//  // Step c: Calculate the two possible ages
//  let age1 = currentYear - birthYear;      
//  let age2 = age1 - 1;                     

//  // Display the result
//  document.write("<h2>Age Calculator</h2>");
//  document.write("Current Year: " + currentYear + "<br>");
//  document.write("Birth Year: " + birthYear + "<br>");
//  document.write("They are either " + age2 + " or " + age1 + " years old.");

// Qno12 The Geometrizer: Calculate properties of a circle.?

// // Step a: Store a radius into a variable
// let radius = 7;

// // Constant for π
// const pi = 3.142;

// // Step b: Calculate the circumference
// let circumference = 2 * pi * radius;

// // Calculate the area
// let area = pi * radius * radius;

// // Display the results
// document.write("<h2>The Geometrizer</h2>");
// document.write("Radius of the circle: " + radius + "<br>");
// document.write("The circumference is: " + circumference.toFixed(2) + "<br>");
// document.write("The area is: " + area.toFixed(2));

// chapter 6 

// Qno1 Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:?

 // Step 1: Take a number and store it in a variable
//  let number = 10; // You can change this value

//  // Step 2: Perform the arithmetic operations
//  let result = ((number + 10) * 5) - 20;

//  // Step 3: Display the result in the browser
//  document.write("<h2>Arithmetic Operations Result</h2>");
//  document.write("The number you entered is: " + number + "<br>");
//  document.write("The result of the operations is: " + result);

// Qno2 What will be the output in variables a, b & result after execution of the following?

//  // Initialize variables
//  let value1 = 5;
//  let value2 = 3;

//  // Perform an arithmetic operation
//  let sum = value1 + value2;

//  // Display the results
//  document.getElementById("value1").innerText = `value1 is ${value1}`;
//  document.getElementById("value2").innerText = `value2 is ${value2}`;
//  document.getElementById("sum").innerText = `sum is ${sum}`;

// Qno3 Write a program that takes input a name from user & greet the user.?

//  // Take input from the user
//  let userName = prompt("Please enter your name:");

//  // Greet the user
//  if (userName) {
//      document.getElementById("greeting").innerText = `Hello, ${userName}! Welcome to our site.`;
//  } else {
//      document.getElementById("greeting").innerText = "Hello, Guest! Welcome to our site.";
//  }

// Qno4 Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.?

//   // Take input from the user
//   let number = prompt("Enter a number to display its multiplication table:");
        
//   // Use default value 5 if no input is given
//   number = number ? parseInt(number) : 5;
  
//   // Generate the multiplication table
//   let tableContent = `<h2>Multiplication Table of ${number}</h2>`;
//   for (let i = 1; i <= 10; i++) {
//       tableContent += `${number} x ${i} = ${number * i} <br>`;
//   }
  
//   // Display the table
//   document.getElementById("table").innerHTML = tableContent;

// Qno6 Take?

// function calculateResults() {
//     // Get the values from the input fields
//     const subject1 = document.getElementById('subject1').value;
//     const subject2 = document.getElementById('subject2').value;
//     const subject3 = document.getElementById('subject3').value;

//     const marks1 = parseInt(document.getElementById('marks1').value);
//     const marks2 = parseInt(document.getElementById('marks2').value);
//     const marks3 = parseInt(document.getElementById('marks3').value);

//     // Calculate total marks and percentage
//     const totalMarks = marks1 + marks2 + marks3;
//     const totalPercentage = (totalMarks / 300) * 100;

//     // Set the results in the table
//     document.getElementById('sub1').textContent = subject1;
//     document.getElementById('sub2').textContent = subject2;
//     document.getElementById('sub3').textContent = subject3;

//     document.getElementById('ob1').textContent = marks1;
//     document.getElementById('ob2').textContent = marks2;
//     document.getElementById('ob3').textContent = marks3;

//     document.getElementById('perc1').textContent = (marks1 / 100) * 100 + '%';
//     document.getElementById('perc2').textContent = (marks2 / 100) * 100 + '%';
//     document.getElementById('perc3').textContent = (marks3 / 100) * 100 + '%';

//     document.getElementById('totalMarks').textContent = totalMarks;
//     document.getElementById('totalPercentage').textContent = totalPercentage.toFixed(2) + '%';

//     // Show the table with results
//     document.getElementById('marksTable').style.display = 'block';
// }