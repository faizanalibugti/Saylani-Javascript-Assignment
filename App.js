document.write("<h1>Chapter 1</h2><br>");

document.write("<p>1. Write a script to greet your website visitor using JS alert box.</p><br>");
alert("Welcome to my website");

document.write("<p>2. Write a script to display following message on your web page:</p><br>");
alert("Error! Please enter a valid password.");

document.write("<p>3. Write a script to display following message on your web page: (Hint : Use line break)</p><br>");
alert("Welcome to JS Land...\nHappy Coding!");

document.write("<p>4. Write a script to display following messages in sequence:</p><br>");
alert("Welcome to JS Land");
alert("Happy Coding!");

document.write("<p>5. Generate the following message through browser’s developer console:</p><br>");
console.log("Hello... I can run JS through my web browser's console");

document.write("<h1>Chapter 2</h2><br>");

document.write("<p>1. Declare a variable called username.</p><br>");
var username;

document.write("<p>2. Declare a variable called myName & assign to it a string that represents your Full Name.</p><br>");
var myName = "Faizan Ali Bugti";

document.write("<p>3. Write script to: <br> a) Declare a JS variable, titled message. <br> b) Assign “Hello World” to variable message <br> c) Display the message in alert box.</p><br>");
var message;
message = "Hello World";
alert(message);

document.write("<p>4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.</p><br>");
var name = "John Doe";
var age = "15 years old";
var course = "Certified  Mobile Application Developer"

alert(name);
alert(age);
alert(course);

document.write("<p>5. Write a script to display the following alert using one JS variable:</p><br>");
var message = "PIZZA";
alert(message + "\n" + message.slice(0, 4) + "\n" + message.slice(0, 3) + "\n" + message.slice(0, 2) + "\n" + message.slice(0, 1));

document.write("<p>6. Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatenation)</p><br>");
var email = "faizanalibugti@outlook.com"
alert("My email address is " + email);

document.write("<p>7. Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box:</p><br>");
var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book " + book);

document.write("<p>8. Write a script to display this in browser through JS</p><br>");
var html = "Yah! I can write HTML content through JavaScript";
document.write(html + "<br>");

document.write("<p>9. Store following string in a variable and show in alert and browser through JS</p><br>");
var string = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(string);

document.write("<h1>Chapter 3</h2><br>");

document.write("<p>1. Declare a variable called age & assign to it your age. Show your age in an alert box.</p><br>");
var age = 23;
alert("I am " + age + " years old");

document.write("<p>2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page.</p><br>");

var n = localStorage.getItem('on_load_counter');
if (n === null) {
    n = 0;
}
n++;
localStorage.setItem("on_load_counter", n);
nums = n.toString().split('').map(Number);
for (var i of nums) {
    alert("You have visited this site " + n + " times")
}

document.write("<p>3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:</p><br>");
var birthYear = 1996;
document.write("My birth year is " + birthYear + "<br>" + "Data type of the declared variable is number" + "<br>");

document.write("<p>4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information: <br> a. Visitor’s name <br> b. Product title <br> c. Quantity i.e. how many products a visitor wants to order <br> Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store </p>")

var visitorname = "John Doe";
var product = "T-shirt";
var quantity = 5;
document.write("<br>" + visitorname + " ordered " + quantity + " " + product + "(s) on XYZ Clothing store <br>");

document.write("<h1>Chapter 4</h2><br>");

document.write("<p>1. Declare 3 variables in one statement.</p><br>");
var column = 0, row = 0, index = 0;

document.write("<p>2. Declare 5 legal & 5 illegal variable names. </p><br>");
// var name, $name, _name, $age, age;
// var 1name, 3, alert, 4age;

document.write("<p>3. Display this in your browser <br> a)  A heading stating “Rules for naming JS variables” <br> b) Variable names can only contain ______, ______, ______ and ______.For example $my_1stVariable <br> c) Variables must begin with a ______, ______ or _____.For example $name, _name or name <br> d) Variable names are case _________ <br> e) Variable names should not be JS _________ </p > <br>");
document.write("<h1>Rules for naming JS variables<br></h1><p>Variable names can only contain numbes, $ and _. For example : $my_1stVariable <br> Variables must begin with a letter, $ or _. For example:  $name, _name or name<br>Variable names are case sensitive <br> Variable names should not be JS keywords<br></p>")

document.write("<h1>Chapter 5</h2><br>");

document.write("<p>1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.</p><br>");
document.write("<h1>Addition</h1>")
alert("Addition");
var x = Number(prompt("Input value of x: "));
var y = Number(prompt("Input value of y: "));
var ans = x + y;
document.write("Sum of " + x + " and " + y + " is " + ans);
document.write("<h1>Subtraction</h1>")
alert("Subtraction");
var x = Number(prompt("Input value of x: "));
var y = Number(prompt("Input value of y: "));
var ans = x - y;
document.write("Subtraction of " + x + " and " + y + " is " + ans);
document.write("<h1>Multiplication</h1>")
alert("Multiplication");
var x = Number(prompt("Input value of x: "));
var y = Number(prompt("Input value of y: "));
var ans = x * y;
document.write("Product of " + x + " and " + y + " is " + ans);
document.write("<h1>Modulus</h1>")
alert("Modulus");
var x = Number(prompt("Input value of x: "));
var y = Number(prompt("Input value of y: "));
var ans = x % y;
document.write("Modulus of " + x + " and " + y + " is " + ans);

document.write("<p>3. Do the following using JS Mathematic Expressions <br> a.Declare a variable. <br> b.Show the value of variable in your browser like “Value after variable declaration is: ??”.<br>c. Initialize the variable with some number.<br>d. Show the value of variable in your browser like “Initial value: 5”.<br>e. Increment the variable.<br>f. Show the value of variable in your browser like “Value after increment is: 6”.<br>g. Add 7 to the variable.<br>h. Show the value of variable in your browser like “Value after addition is: 13”.<br>i. Decrement the variable.<br>j. Show the value of variable in your browser like “Value after decrement is: 12”.<br>k. Show the remainder after dividing the variable’s value by 3.<br>l. Output : “The remainder is : 0”.</p><br>");
var a;
document.write("Value after declaration is " + a + "<br>");
a = 5;
document.write("Initial value: " + a + "<br>");
a = ++a;
document.write("Value after increment is: " + a + "<br>");
a = a + 7;
document.write("Value after addition is: " + a + "<br>");
a = --a;
document.write("Value after decrement is: " + a + "<br>");
a = a / 3;
document.write("The remainder is: " + a + "<br>");

document.write("<p>4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:</p><br>");
document.write("<h1>Movie Tickets</h1><br>")
var ticketPrice = 600;
var cost = ticketPrice * 5;
document.write("Total cost to buy 5 tickets to a moive is: " + cost + " PKR" + "<br>");

document.write("<p>5. Write a script to display multiplication table of any number in your browser</p><br>");
document.write("<h1>Multiplication Table</h1><br>")
var display;
for (i = 1; i <= 10; i++) {
    var multiplier = 4;
    var result = i * 4;
    display = multiplier + " * " + i + " = " + result + "<br>";
    document.write(display);
}

document.write("<p>6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here. <br>a.  Store a Celsius temperature into a variable. <br>b. Convert it to Fahrenheit & output “NNoC is NNoF”. <br>c. Now store a Fahrenheit temperature into a variable. <br>d. Convert it to Celsius & output “NNoF is NNoC”.</p><br>");
document.write("<h1>Temperature Conversion</h1>")
var celsiusTemp = 25;
farhenheit = (celsiusTemp - 9 / 5) + 32;
document.write(celsiusTemp + "◦C is " + farhenheit + "◦F" + "<br>");
var farhenheit = 70;
celsiusTemp = (frameElement - 32) * 5 / 9;
document.write(farhenheit + "◦F is " + celsiusTemp + "◦C" + "<br>");

document.write("<p>7.  Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables<br>a. Price of item 1 <br>b. Price of item 2 <br>c. Ordered quantity of item 1 <br>d. Ordered Quantity of item 2 <br>e. Shipping charges <br>Compute the total cost & show the receipt in your browser.</p><br>");
document.write("<h1>Shopping Cart</h1>")
var priceItem1 = 650;
var priceItem2 = 100;
var quantity1 = 3;
var quantity2 = 7;
var shippingCharges = 100;
var total = (priceItem1 * quantity1) + (priceItem2 * quantity2);
document.write("Price of item 1 is " + priceItem1 + "<br>");
document.write("Quantity of item 1 is" + quantity1 + "<br>");
document.write("Price of item 2 is " + priceItem2 + "<br>");
document.write("Quantity of item 2 is" + quantity2 + "<br>");
document.write("Shipping Charges " + shippingCharges + "<br>");
document.write("Total cost of your order is " + total + "<br>");

document.write("<p>8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser</p><br>");
document.write("<h1>Marks Sheet</h1>")
var totalMarks = 980;
var marksObtained = 804;
percentage = (marksObtained / totalMarks) * 100;
document.write("Total marks: " + totalMarks + "<br>");
document.write("Marks obtained " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "<br>");

document.write("<p>9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)</p><br>");
var dollars = 10;
var riyals = 25;
pkr = (dollars * 104.80) + (riyals * 28);
document.write("Total cureency in PKR: " + pkr + "<br>");

document.write("<p>10. Write a program to initialize a variable with some number and do arithmetic in following sequence: a. Add 5 b. Multiply by 10 c. Divide the result by 2 Perform all calculations in a single expression</p><br>");
var x = 10;
ans = ((x + 5) * 10) / 2;
document.write("Result of arithmetic operation is: " + ans + "<br>");

document.write("<p>11. The Age Calculator: Forgot how old someone is? Calculate it! <br>a. Store the current year in a variable. b. Store their birth year in a variable. <br>c. Calculate their 2 possible ages based on the stored values. <br>Output them to the screen like so: “They are either NN or NN years old”.</p><br>");
document.write("<h1>Age Calculator</h1>")
var currentYear = 2020;
var birthYear = 1996;
age = currentYear - birthYear;
document.write("<br>" + "Current year: " + currentYear + "<br>");
document.write("Birth Year: " + birthYear + "<br>")
document.write("Your age is : " + age + "<br>");

document.write("<p>12. The Geometrizer: Calculate properties of a circle. <br>a. Store a radius into a variable. <br>b. Calculate the circumference based on the radius, and output “The circumference is NN”. <br>(Hint : Circumference of a circle = 2 π r , π = 3.142) Calculate the area based on the radius, and output “The  area is NN”. (Hint : Area of a circle = π r2, π = 3.142) </p><br>");
document.write("<h1>The Geometrizer</h1>")
var radius = 20;
const pi = 3.142;
circumference = 2 * pi * radius;
document.write("The circumference is : " + circumference + "<br>");
area = pi * radius * radius;
document.write("The area is: " + area + "<br>");

document.write("<p>13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more. a. Store your favorite snack into a variable b. Store your current age into a variable. c. Store a maximum age into a variable. d. Store an estimated amount per day (as a number). e. Calculate how many would you eat total for the rest of your life. <br>Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.</p><br>");
document.write("<h1>The Lifetime Supply Calculator</h1>")
var favoriteSnack = "Chocolates";
var currentAge = 23;
var maximumAge = 70;
var amountDay = 3;
total = (maximumAge - currentAge) * (3 * 365);
document.write("Favourite snack : " + favoriteSnack + "<br>");
document.write("Current age: " + currentAge + "<br>");
document.write("Maximum age: " + maximumAge + "<br>");
document.write("You will need " + total + " " + favoriteSnack + " to last you until the ripe age of " + maximumAge + "<br>");

document.write("<h1>Chapters 6 - 9</h2><br>");

document.write("<p>1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:</p><br>");
var a = 10;
document.write("Result: <br> The value of a is : " + a + "<br>");
document.write("----------------------------------------------------------------------- <br>")
document.write("The value of ++a is: " + ++a + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");
document.write("The value of a++ is: " + a++ + "<br>");
document.write("Now the value of a++ is: " + a + "<br><br>");
document.write("The value of --a is: " + --a + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");
document.write("The value of a-- is: " + a-- + "<br>");
document.write("Now the value of a is: " + a + "<br><br>")


document.write("<p>2. What will be the output in variables a, b & result after execution of the following script: var a = 2, b = 1; var result = --a - --b + ++b + b--; <br> Explain the output at each stage: --a; --a - --b; --a - --b + ++b; --a - --b + ++b + b--;</p><br>");
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("a is " + a + "<br>");
document.write("b is " + b + "<br>");
document.write("Result is: " + result + "<br><br>");

document.write("<p>3. Write a program that takes input a name from user & greet the user. </p><br>");
var name = prompt("Enter your name: ");
alert("Greetings " + name);

document.write("<p>4. Question 4 is missing </p><br>");


document.write("<p>5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.</p><br>");
var display;
var multiplier = Number(prompt("Enter a number: "));
if (multiplier == 0) {
    multiplier = 5;
    for (i = 1; i <= 10; i++) {
        var result = i * multiplier;
        display = multiplier + " * " + i + " = " + result + "<br>";
        document.write(display);
    }
} else {
    for (i = 1; i <= 10; i++) {
        var result = i * multiplier;
        display = multiplier + " * " + i + " = " + result + "<br>";
        document.write(display);
    }
}

document.write("<p>6. Take <br>a) Take three subjects name from user and store them in 3 different variables. <br>b) Total marks for each subject is 100, store it in another variable. <br>c) Take obtained marks for first subject from user and stored it in different variable.<br>d) Take obtained marks for remaining 2 subjects from user and store them in variables. <br>e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)</p><br>");
var subject1 = prompt("Enter Subject 1: ");
var subject2 = prompt("Enter Subject 2: ");
var subject3 = prompt("Enter Subject 3: ");

var totalMarks = 100;

var obtained1 = prompt("Obtained Marks in " + subject1);

var obtained2 = prompt("Obtained Marks in " + subject2);
var obtained3 = prompt("Obtained Marks in " + subject3);

var percentage1 = (obtained1 / totalMarks) * 100;
var percentage2 = (obtained2 / totalMarks) * 100;
var percentage3 = (obtained3 / totalMarks) * 100;

document.write("<table>< br ><tr><td><b>Subject</b> </td><td><b>Total Marks</b> </td><td><b>Obtained Marks</b> </td><td><b>Percentage</b> </td></tr><tr><td><script>document.write(subject1)</script></td><td><script>document.write(totalMarks)</script></td><td><script>document.write(obtained1)</script></td><td><script>document.write(percentage1 = " % ")</script></td></tr><tr><td><script>document.write(subject2)</script></td><td><script>document.write(totalMarks)</script></td><td><script>document.write(obtained2)</script></td><td><script>document.write(percentage2 + " % ")</script></td>/tr><tr><td><script>document.write(subject3)</script></td><td><script>document.write(totalMarks)</script></td><td><script>document.write(obtained3)</script></td><td><script>document.write(percentage3 + " % ")</script></td></tr><tr><td></td><td><script>document.write(totalMarks*3)</script></td><td><script>document.write(obtained1 + obtained2 + obtained3)</script></td><td><script>document.write((percentage1 + percentage2 + percentage3) / 3 + " % ")</script></td></tr></table >")

document.write("<p>7. Question is missing</p><br>");

document.write("<h1>Chapters 9-11</h2><br>");

document.write("<p>1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”</p><br>");
var city = prompt("Enter your city: ");
if (city == "Karachi") {
    alert("Welcome to city of lights");
}

document.write("<p>2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.</p><br>");
var gender = prompt("Enter your gender: ");
if (gender == "Male") {
    alert("Good Morning, Sir")
}
else if (gender == "Female") {
    alert("Good Mornign, Ma'am")
}

document.write("<p>3. Write a program to take input color of road traffic signal from the user & show the message according to this table</p><br>");
var signalColor = prompt("Emter the color of the traffic signal: ");
if (signalColor == "Red") {
    alert("Must stop");
}
else if (signalColor == "Yellow") {
    alert("Ready to move");
}
else if (signalColor == "Green") {
    alert("Move now")
}

document.write("<p>4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”</p><br>");
var currentFuel = Number(prompt("Remaining fuel in liters"));
if (currentFuel < 0.25) {
    alert("Please refill the fuel in your car");
}

document.write("<p>5. Run this script, & check whether alert message would be displayed or not. Record the outputs.</p><br>");
// a
var a = 4; if (++a === 5) { alert("given condition for variable a is true"); }

// b
var b = 82; if (b++ === 83) { alert("given condition for variable b is true"); }

// c
var c = 12; if (c++ === 13) { alert("condition 1 is true"); } if (c === 13) { alert("condition 2 is true"); } if (++c < 14) { alert("condition 3 is true"); } if (c === 14) { alert("condition 4 is true"); }

// d
var materialCost = 20000; var laborCost = 2000; var totalCost = materialCost + laborCost; if (totalCost === laborCost + materialCost) { alert("The cost equals"); }

// e
if (true) { alert("True"); } if (false) { alert("False"); }

// f
if ("car" < "cat") { alert("car is smaller than cat"); }

document.write("<p>6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:</p><br>");
document.write("<h1>Marks Sheet</h1>")
var English = prompt("English Number")
var Urdu = prompt("Urdu Number")
var Mathematics = prompt("Mathematics Number")

if (English <= 100 && Urdu <= 100 && Mathematics <= 100) {
    var obtainedMarks = English + Urdu + Mathematics;
    var totalMarks = 300;

    let percentage = obtainedMarks / totalMarks * 100;

    percentage = percentage.toFixed(2);


    if (percentage >= 80) {
        document.write(`<h2>Total Marks  ${totalMarks} `);
        document.write(`<h2>Obtained Marks ${obtainedMarks} `);
        document.write(`<h2>Percentage ${percentage} `);
        document.write(`<h2>Grade  A-one `);
        document.write(`<h2>Remarks Excellent `);
    }

    else if (percentage >= 70) {
        document.write(`<h2>Total Marks  ${totalMarks} `);
        document.write(`<h2>Obtained Marks ${obtainedMarks} `);
        document.write(`<h2>Percentage ${percentage} `);
        document.write(`<h2>Grade  A `);
        document.write(`<h2>Remarks Good `);
    }

    else if (percentage >= 60) {
        document.write(`<h2>Total Marks  ${totalMarks} `);
        document.write(`<h2>Obtained Marks ${obtainedMarks} `);
        document.write(`<h2>Percentage ${percentage} `);
        document.write(`<h2>Grade  B `);
        document.write(`<h2>Remarks You need to improve`);
    }

    else if (percentage < 60) {
        document.write(`<h2>Total Marks  ${totalMarks} `);
        document.write(`<h2>Obtained Marks ${obtainedMarks} `);
        document.write(`<h2>Percentage ${percentage} `);
        document.write(`<h2>Grade  Fail `);
        document.write(`<h2>Remarks sorry `);
    }

}

document.write("<p>Guess game:<br>Store a secret number (ranging from 1 to 10) in a variable.<br>Prompt user to guess the secret number.<br>a. If user guesses the same number, show “Bingo! Correctanswer”.<br>b. If the guessed number +1 is the secret number, show“Close enough to the correct answer”.</p><br>");
var secretNumber = 7;
var userSecretNumber = +prompt("Enter Your secret Number")
if (secretNumber === userSecretNumber) {
    alert('bongo')
}
else if (secretNumber++ === userSecretNumber) {
    alert('Close enough to the correct answer.')
}

document.write("<p>8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the numberis divisible by 3</p><br>");
var divisibleNumber = prompt("Enter Divisible Number")
if (divisibleNumber % 3 === 0) {
    alert("Number is Divisible by 3")
}

document.write("<p>9. Write a program that checks whether the given input is an even number or an odd number. </p><br>");
var num = +prompt("Enter your Number i will tell you it is even or odd")
if (num % 2 == 0) {
    alert('Even Number');
} else {
    alert('Odd Number');
}

document.write("<p>10. Write a program that takes temperature as input andshows a message based on following criteria<br>a. T > 40 then “It is too hot outside.”<br>b. T > 30 then “The Weather today is Normal.”<br>c. T > 20 then “Today’s Weather is cool.”<br>d. T > 10 then “OMG! Today’s weather is so Cool.”</p><br>");
var temperature = prompt("Enter Your Temperature");
if (temperature > 40) {
    alert("It is too hot outside")
}
else if (temperature > 30) {
    alert("The Weather today is Normal.")
}
else if (temperature > 20) {
    alert("Today’s Weather is cool.")
}
else if (temperature > 10) {
    alert("OMG! Today’s weather is so Cool.")
}

document.write("<p>11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:<br>a. First number<br>b. Second number<br>c. Operation (+, -, *, /, %)<br>Compute & show the calculated result to user.</p><br>");
var inputOne = parseInt(prompt("Enter First Number"))
var inputtwo = parseInt(prompt("Enter Last Number"))
var operation = prompt("+, -, *, /, %")

if (operation === "+") {
    alert(inputOne + inputtwo)
}
else if (operation === "-") {
    alert(inputOne - inputtwo)
}

else if (operation === "*") {
    alert(inputOne * inputtwo)
}
else if (operation === "/") {
    alert(inputOne / inputtwo)
}
else if (operation === "%") {
    alert(inputOne % inputtwo)
}

document.write("<h1>Chapters 12 - 13</h2><br>");

document.write("<p>Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).</p><br>");
var userNumber = parseInt(prompt("Select one Number in given Number 65, 90, 97, 122"))
if (userNumber === 65) {
    document.write("You select Capital Letter  'A' Alphabet")
}
else if (userNumber === 90) {
    document.write("You select Capital letter 'Z' Alphabet")
}
else if (userNumber === 97) {
    document.write("You select small Letter 'a' Alphabet")
} else if (userNumber === 122) {
    document.write("You select small letter 'z' Alphabets")
}
else {
    document.write("Please select in given number")

}

document.write("<p>2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.</p><br>");
if (25 > 21) {
    document.write("larger number is 25 <br>");
}
if ('abc' === 'abc') {
    document.write("both string are Same<br>");
}
else {
    document.write("both string are different<br>")
}

document.write("<p>3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.</p><br>");
var userInput = parseInt(prompt("Enter the positive, negative or zero number<br>"))
if (userInput == 5) {
    document.write("You Select Positive Number<br>")
}

else if (userInput == -5) {
    document.write("You Select Negative Number<br>")
}
if (userInput === 0) {
    document.write("You Select Zero Number<br>")
}

document.write("<p>4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise</p><br>");
var vowelWord = prompt("Enter Your desire Letter")
vowelWord = vowelWord.toLowerCase();
if (vowelWord === 'a' || vowelWord === 'e' || vowelWord === 'i' || vowelWord === 'o' || vowelWord === 'u') {
    alert("You selected Vowel Word")
}
else {
    alert("Your selected Word is not Vowel Word")

}

document.write("<p>5. Write a program that<br>a. Store correct password in a JS variable.<br>b. Asks user to enter his/her password<br>c. Validate the two passwords:<br>i. Check if user has entered password. If not, then give message “ Please enter your password” <br>ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise. </p><br>");
var password = "Javascript";
var userPassword = prompt("Enter Your Password");
if (userPassword == null || userPassword == '') {
    alert("please Enter Your Password")
}
else if (userPassword === password) {
    alert("Correct! The password you entered matches the original password")
}
else {
    alert("Your typed wrong Password")
}

document.write("<p>6. This if/else statement does not work. Try to fix it:<br>var greeting;<br>var hour = 13;<br>if (hour < 18) {<br>greeting = 'Good day'<br>else<br>greeting = 'Good evening';}</p><br>");
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
}
else {
    greeting = "Good evening";
}

document.write("<p>Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements</p><br>");
var times = 1900;
if (times >= 0000 && times < 1200) {
    document.write("<br /> Good Morning")
}

else if (times >= 1200 && times < 1700) {
    document.write("<br /> Good AfterNoon")
}

else if (times >= 1700 && times < 2100) {
    document.write("<br /> Good Evening")
}

else if (times >= 2100 && times < 2359) {
    document.write("<br /> Good Night")
}

document.write("<h1>Chapters 14 - 16</h2><br>");

document.write("<p>1. Declare an empty array using JS literal notation to store student names in future.</p><br>");
var studentName = [];

document.write("<p>2. Declare an empty array using JS object notation to store student names in future.</p><br>");


document.write("<p>3. Declare and initialize a strings array.</p><br>");
var stringArray = ['faizan', 'ali', 'bugti', 'saylani']

document.write("<p>4. Declare and initialize a numbers array.</p><br>");
var numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

document.write("<p>5. Declare and initialize a boolean array.</p><br>");
var booleanArray = [true, false, false, true]

document.write("<p>6. Declare and initialize a mixed array.</p><br>");
var mixedArray = ['myname ', 'faizan', 'class', 1, 5, 0, 8, 9, true, false]

document.write("<p>7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:</p><br>");
var educationArray = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD']
document.write("<h1>Qualification</h1>")

for (var i = 0; i < educationArray.length; i++) {
    document.write(i + "  " + educationArray[i] + "<br>")
}

document.write("<p>8. Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:</p><br>");
var studentName = ['hamza', 'salman', 'arsalan']
var studentScore = [320, 230, 480];

var percentagestudent1 = studentScore[0] * 100 / 500;
var percentagestudent2 = studentScore[1] * 100 / 500;
var percentagestudent3 = studentScore[2] * 100 / 500;
var percentagestudents = [percentagestudent1, percentagestudent2, percentagestudent3]

for (let index = 0; index < studentName.length; index++) {
    document.write(`Score of ${studentName[index]} is ${studentScore[index]}.
Percentage : ${percentagestudents[index]} %<br>`)
}

document.write("<p>9. Initialize an array with color names. Display the array elements in your browser.<br>a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser. <br>b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.<br> c. Add two more color to the beginning of the array. Display the updated array in your browser. <br>d. Delete the first color in the array. Display the updated array in your browsere. <br>e. Delete the last color in the array. Display the updated array in your browser.<br>f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser.<br>g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser.</p><br>");

var colorName = ['red', 'green', 'blue', 'white', 'orange'];
for (let index = 0; index < colorName.length; index++) {
    document.write(colorName[index] + "<br>")
}

var userColor = prompt("Enter your Favorite Color");

if (userColor != '' && userColor != undefined) {
    // colorName.splice(0, 0, userColor)
    colorName.unshift(userColor)
    document.write(colorName + "</br>");

}

var userColor2 = prompt("Enter your Second Favorite Color");

if (userColor2 != '' && userColor2 != undefined) {
    // colorName.splice(0, 0, userColor)
    colorName.push(userColor2)
    document.write(colorName + "</br>");

}

colorName.unshift("pink")
colorName.unshift("skyblue")
document.write("<h3>New Updated Array: " + colorName + "</h3><br />")

colorName.shift()
document.write("<h3> First item removed and now New Updated Array: " + colorName + "</h3><br />")

colorName.pop()
document.write("<h3> Last item removed and now New Updated Array: " + colorName + "</h3><br />")

var userColorName = prompt("Enter your color name")
var userColorposition = parseInt(prompt("Enter which index you want to add color name"))
colorName.splice(userColorposition, 0, userColorName)
document.write("<h3>" + colorName + "</h3>")

var userdeleteColor = prompt("Enter which index you want to delete color ")
var userColorposition = parseInt(prompt("Enter how many colors you want to delete"))
colorName.splice(userdeleteColor, userColorposition)
document.write("<h3>" + colorName + "</h3><br>")

document.write("<p>10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.</p><br>");
var sortArray = [120, 350, 220, 450, 100, 650, 300];
document.write("Score of Students " + sortArray + "<br />")
document.write(" Ordered Score of Students  " + sortArray.sort())

document.write("<p>11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.</p><br>");
var cities = ['karachi', 'lahore', 'quetta', 'islamabad', 'Multan', 'peshawar']
var selectedcities = cities.slice(2, 5);
document.write("<br>Cities List  " + cities + "<br />")
document.write("Cities List " + selectedcities + "<br />")

document.write("<p>12. Write a program to create a single string from the below mentioned array: (Use array’s join method)</p><br>");
var arr = ['This', 'is', 'my', 'cat'];
var stringArray = arr.join(" ")
document.write(arr)
document.write(stringArray)

document.write("<p>13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)</p><br>");
var fifoarray = [];
fifoarray.push('keyboard')
fifoarray.push('mouse')
fifoarray.push('printer')
fifoarray.push('monitor')
document.write("<h3>DEVICES: <br /> " + fifoarray + " </h3>")

var out1 = fifoarray.shift()
var out2 = fifoarray.shift()
var out3 = fifoarray.shift()
var out4 = fifoarray.shift()
document.write("<h3>Out: <br /> " + out1 + " </h3>")
document.write("<h3>Out: <br /> " + out2 + " </h3>")
document.write("<h3>Out: <br /> " + out3 + " </h3>")
document.write("<h3>Out: <br /> " + out4 + " </h3>")

document.write("<p>14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In- First Out)</p><br>");
var lifoArray = [];
lifoArray.unshift('monitor')
lifoArray.unshift('printer')
lifoArray.unshift('mouse')
lifoArray.unshift('keyboard')

document.write("<h3>DEVICES: <br /> " + lifoArray + " </h3>")

var out1 = lifoArray.pop()
var out2 = lifoArray.pop()
var out3 = lifoArray.pop()
var out4 = lifoArray.pop()
document.write("<h3>Out: <br /> " + out1 + " </h3>")
document.write("<h3>Out: <br /> " + out2 + " </h3>")
document.write("<h3>Out: <br /> " + out3 + " </h3>")
document.write("<h3>Out: <br /> " + out4 + " </h3>")

document.write("<p>15. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method:</p><br>");
var mobilesCompanies = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier']
document.write(`<select><option>${mobilesCompanies[0]}</option><option>${mobilesCompanies[1]}</option><option>${mobilesCompanies[2]}</option><option>${mobilesCompanies[3]}</option><option>${mobilesCompanies[4]}</option><option>${mobilesCompanies[5]}</option></select>`)

// Chapter 17-20
//Task 1
var multiArr = [[1, 2], [2, 3]];

//Task 2
var multiArr = [[0, 1, 2, 3],[1, 0, 1, 2],[2, 1, 0, 1]];

//Task 3
for (var i = 1; i <= 10; i++) {
    document.write(i + "<br>");
}

//Task 4
var num = +prompt("Enter table number");
var times = +prompt('Enter length of table');

for (i = 1; i <= times; i++) {
    ans = num * i;
    document.write(num + "times" + i + "=" + ans);
}

//Task 5
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (var i = 0; i < fruits.length; i++) {
    document.write("Element at index" + i + "is " + fruits[i]);
}

//Task 6 
var arr = []
for (var i = 1; i <= 15; i++) {
    arr.push(i)
}
document.write("counting:" + arr);

var arr1 = []
for (var i = 10; i >= 0; i--) {
    arr1.push(i)
}
document.write("Reverse counting:" + arr1);

var arr2 = []
for (var i = 0; i <= 20; i = i + 2) {
    arr2.push(i)
}
document.write("Even counting:" + arr2);

var arr3 = []
for (var i = 1; i <= 20; i = i + 2) {
    arr3.push(i)
}
document.write("Odd counting:" + arr3);

var arr4 = []
for (var i = 0; i <= 20000; i = i + 2000) {
    arr4.push(i)
}
document.write("Series counting:" + arr2);

//Task 7
var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
var name = prompt("Enter a word");

for (var i = 0; i < A.lenght; i++) {
    if (name === A[i]) {
        document.write(name + "is available at index" + i + "in our bakery")
    }
    else {
        document.write("sorry your item is not available")
    }
}

//Task 8
var array = [3, 6, 2, 56, 32, 5, 89, 32];
var largest = array[0];

for (i = 0; i < array.lenght; i++) {
    if (array[i] > largest) {
        var largest = array[i];
    }
}

document.write(largest + "is the largest num in array");

//Task 9
var array = [3, 6, 2, 56, 32, 5, 89, 32];
var smallest = array[0];

for (i = 0; i < array.lenght; i++) {
    if (array[i] < smallest) {
        var smallest = array[i];
    }
}

document.write(smallest + "is the smallest num in array");

//Task 10
var arr = []
for (var i = 1; i <= 20; i++) {
    ans = 5 * i;
    arr.push(ans);
}
document.write(arr + "is the list of multiple of 5");





// document.write("<p>Write a program</p><br>");


// document.write("<p>Write a program</p><br>");


// document.write("<p>Write a program</p><br>");