// Assignment by Ali Abbas Devjiani
// Assignment No. 6 - Chapter 21 - 38
// String Methods
//Chapter 21-25 - Task No. 1
// var firstName = prompt("Enter the First Name : ")
// var secondName = prompt("Enter the Second Name : ")
// var fullName = (firstName + " " + secondName)
// alert("Hello Mr./Ms " + fullName + " Welcome to Java World")

//Chapter 21-25 - Task No. 2
// var favMobileModel = prompt("Enter the name of your Favourite Mobile Phone Model : ")
// var lenFavMobileModel = favMobileModel.length
// alert("My favourite phone is : " + favMobileModel + "\n" + "Length of String : " + lenFavMobileModel)

//Chapter 21-25 - Task No. 3
// var string = "Pakistani"
// document.write("String : " + string)
// document.write("<br/>")
// document.write("Index of 'n' : " + string.indexOf("n"))

//Chapter 21-25 - Task No. 4
// var string = "Hello World"
// document.write("String : " + string)
// document.write("<br/>")
// document.write("Last index of 'l' : " + string.lastIndexOf("l"))

//Chapter 21-25 - Task No. 5
// var string = "Pakistani"
// document.write("String : " + string)
// document.write("<br/>")
// document.write("Character at Index 3 : " + string.charAt(3))

//Chapter 21-25 - Task No. 6
// var firstName = prompt("Enter the First Name : ")
// var secondName = prompt("Enter the Second Name : ")
// var fullName = firstName.concat(" " + secondName)
// alert("Hello Mr./Ms " + fullName + " Welcome to Java World")

//Chapter 21-25 - Task No. 7
// var city = "Hyderabad"
// document.write("City : " + city)
// document.write("<br/>")
// updatedCity = city.replace("Hyder","Islam")
// document.write("After replacement : " + updatedCity)

//Chapter 21-25 - Task No. 8
// var message = "Ali and Sami are best friends. They play cricket and football together."
// document.write(message)
// document.write("<br/>")
// updatedMessage = message.replace(/and/g,"&")
// document.write(updatedMessage)

//Chapter 21-25 - Task No. 9
// var num = "472"
// document.write("Value:" + num + "<br/>")
// document.write("Type: String" + "<br/><br/>")
// num = Number(num)
// document.write("Value: " + num + "<br/>" + "Type: Number" + "<br/>")

//Chapter 21-25 - Task No. 10
// var userInput = prompt("Enter a Word to Change case to Upper Case")
// document.write("User Input : " + userInput + "<br/>")
// userInput = userInput.toUpperCase()
// document.write("Upper Case: " + userInput)

//Chapter 21-25 - Task No. 11
// var userInput = prompt("Enter a Word to Change case to Title Case")
// document.write("User Input is: " + userInput + "<br>")
// var firstLetter = userInput.slice(0, 1)
// firstLetter = firstLetter.toUpperCase()
// var otherLetters = userInput.slice(1)
// otherLetters = otherLetters.toLowerCase()
// document.write("Title Case: " + firstLetter + otherLetters)

//Chapter 21-25 - Task No. 12
// var num = 35.36
// document.write("Number: " + num + "<br/>")
// var newNum = num.toString()
// document.write("Result: " + newNum.replace(".", ""));

//Chapter 21-25 - Task No. 13
// var userName = prompt("Please Enter Username : [Sepcial Characters ! , . @ are not allowed]" );
// userName = userName.split("");
// for (i = 0; i < userName.length; i++) {
//     if (userName[i] === String.fromCharCode(33) || userName[i] === String.fromCharCode(44) || userName[i] === String.fromCharCode(46) || userName[i] === String.fromCharCode(64)) {
//         alert("Please Enter Valid Username");
//     }else {
//         alert("User name available")
//     }
// }

//Chapter 21-25 - Task No. 14
// var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir / ma'am?");
// userInput = userInput.toLowerCase();
// for (var i = 0; i < arr.length; i++) {
//     if (userInput === arr[i]) {
//         document.write(userInput + " is <strong>available</strong> at index " + i + " in our bakery");
//         break
//     }
// }
// if (userInput !== arr[i]) {
//     document.write("We are sorry. " + userInput + " is <strong>not available</strong> in our bakery");
// }

//Chapter 21-25 - Task No. 15
// alert("Password Criteria : \n (a) It should contain alphabets and numbers \n (b) It should not start with a number \n (c) It must atleast 6 characters long")

// var passWord = prompt("Enter Your Password : ")
// if (passWord.length >= 6){
//     if(passWord.slice(0,1) <= String.fromCharCode(65)){
//         alert("Password  can not begin with number ")

//     }
//     else {
//         alert("Password can not be less than 6 characters")
//     }
// }
// else{
//     alert("Please enter a valid password")
// }

//Chapter 21-25 - Task No. 16
// var university = "University of Karachi"
// document.write(university.split("").join("<br/>"))

//Chapter 21-25 - Task No. 17
// var userInput = prompt("Enter Your Word : ")
// document.write("User input: " + userInput + "<br/>")
// userInput = userInput.split("").reverse()
// document.write("Last character of input: " + userInput.slice(0,1))

//Chapter 21-25 - Task No. 18
// var text = "The quick brown fox jumps over the lazy dog"
// document.write("Text: " + text + "<br/>")
// var text1 = text.toLowerCase()
// document.write("There are " + text1.match(/the/g).length + " occurrence(s) of word 'the'")

//Chapter 26-30 - Task No. 1
//Math Methods
// var num = +prompt("Enter positive integer : ")
// document.write("Number : " + num + "<br/>")
// var numR = Math.round(num)
// document.write("Round off value: " + numR + "<br/>")
// var numF = Math.floor(num)
// document.write("Floor value: " + numF + "<br/>")
// var numC = Math.ceil(num)
// document.write("Ceil value: " + numC + "<br/>")

//Chapter 26-30 - Task No. 2
// var num = +prompt("Enter negative number : ");
// document.write("Number: " + num + "<br/>");
// var numR = Math.round(num);
// document.write("Round off value: " + numR + "<br/>");
// var numF = Math.floor(num);
// document.write("Floor value: " + numF + "<br/>");
// var numC = Math.ceil(num);
// document.write("Ceil value: " + numC + "<br/>");

//Chapter 26-30 - Task No. 3
// var num = +prompt("Enter a number : ");
// document.write("The absolute value of " + num + " is " + Math.abs(num));

//Chapter 26-30 - Task No. 4
// var dice = Math.random()*6
// document.write("Random dice value: " + Math.ceil(dice) + "<br/>")
// var dice1 = Math.random(dice)*6
// document.write("Random dice value: " + Math.ceil(dice1) + "<br/>")
// var dice2 = Math.random(dice1)*6
// document.write("Random dice value: " + Math.ceil(dice2))

//Chapter 26-30 - Task No. 5
// var toss = Math.random()*2
// toss = Math.ceil(toss)
// if (toss === 2) {
//     document.write(toss + "<br/>" + "random coin value: Heads")
// }else {
//     document.write(toss + "<br/>" + "random coin value: Tails")
// }

//Chapter 26-30 - Task No. 6
// var num = Math.random() * 100
// num = Math.ceil(num)
// document.write("random num between 1 and 100: " + num)

//Chapter 26-30 - Task No. 7
// var weight = prompt("Enter your weight in kilograms");
// document.write("The weight of user is " + weight);

//Chapter 26-30 - Task No. 8
// var num = 5
// var userInput = +prompt("Enter a number between 1 and 10")
// if (userInput === num) {
//     document.write("Congratulation you guess the number!")
// }else {
//     document.write("Try again!");
// }

// Chapter 31-34 - Task No. 1
// var date = new Date()
// document.write(date)

// Chapter 31-34 - Task No. 2
// var date = new Date()
// date = date.toString()
// var month = date.slice(4, 8)
// alert("Current Month: " + month)

// Chapter 31-34 - Task No. 3
// var date = new Date()
// date = date.toString()
// var day = date.slice(0, 4)
// alert("Today is " + day)

// Chapter 31-34 - Task No. 4
// var day = prompt("Enter Day : ")
// day = day.toLowerCase()
// if (day === "saturday" || day === "sunday") {
//     alert("It's Fun day");
// }else {
//     alert("It's not a Fun day");
// }

// Chapter 31-34 - Task No. 5
// var day = new Date()
// day = day.getDate()
// if (day < 16) {
//     document.write("First fifteen days of the month" + "<br/>")
//     document.write("It's " + day + " of the month")
// }else {
//     document.write("Last days of the month" + "<br/>")
//     document.write("It's " + day + " of the month")
// }

// Chapter 31-34 - Task No. 6
// var date = new Date()
// document.write("Current Date : " + date + "<br/>")
// var milliSeconds = date.getTime()
// document.write("Elapsed milliseconds since January 1, 1970 : " + milliSeconds + "<br/>")
// var minutes = milliSeconds / (1000 * 60 * 60)
// document.write("Elapsed minutes since January 1, 1970 : " + minutes)

// Chapter 31-34 - Task No. 7
// var time = new Date()
// time = time.getHours()
// if (time < 12) {
//     alert("It's AM")
// }else {
//     alert("It's PM")
// }

// Chapter 31-34 - Task No. 8
// var laterDate = new Date("December 31, 2020")
// document.write("Later Date: " + laterDate)

// Chapter 31-34 - Task No. 9
// var ramadan = new Date("Apr 25, 2020")
// var ramadanMili = ramadan.getTime()
// var date = new Date()
// var dateMili = date.getTime()
// var dif = dateMili - ramadanMili
// dif = dif / (1000*60*60*24)
// document.write(Math.floor(dif) + " days have passed since 1st Ramadan, 2020")

// Chapter 31-34 - Task No. 10
// var startDate = new Date("Jan 01, 2015")
// var startDateMili = startDate.getTime()
// var refDate = new Date("Sat Dec 05, 2015 22:50:16")
// document.write("On reference date " + refDate + ", <br/>")
// var refDateMili = refDate.getTime()
// var diff = refDateMili - startDateMili
// diff = diff / (1000*60)
// document.write(Math.ceil(diff) + " seconds has passed since beginning of 2015")

// Chapter 31-34 - Task No. 11
// var date = new Date("Jun 11, 2020 11:30:00")
// document.write("current date: " + date + "<br/>")
// var hour = new Date("Jun 11, 2020 10:30:00")
// document.write("1 hour ago, it was " + hour)

// Chapter 31-34 - Task No. 12
// var date = new Date("Jun 11, 2020 11:30:00")
// document.write("current date: " + date + "<br/>")
// var year = new Date("Jun 11, 1920 11:30:00")
// document.write("100 years back , it was " + year)

// Chapter 31-34 - Task No. 13
// var userInput = new Date(prompt("Enter Your Birth Year"))
// var userInputMili = userInput.getTime()
// userInput = userInput.getFullYear()
// var todayDate = new Date()
// var todayDateMili = todayDate.getTime()
// var diff = todayDateMili - userInputMili
// diff = diff / (1000*60*60*24*30*12)
// document.write("Your age is " + Math.floor(diff) + "<br>")
// document.write("Your birth year is " + userInput)

// Chapter 31-34 - Task No. 14
// document.write("<h1>K-Electric Bill</h1> <br/>")
// var name = prompt("Enter your name")
// document.write("Costumer Name: " + "<strong>" + name + "</strong>" + "<br/>")
// var month = "February"
// document.write("Month: " + "<strong>" + month + "</strong>" + "<br/>")
// var numOfUnits = +prompt("Enter consumed units")
// document.write("Number of units: " + "<strong>" + numOfUnits + "</strong>" + "<br/>")
// var charges = 16
// document.write("Charges per unit: " + "<strong>" + charges + "</strong>" + "<br/><br/>")
// var netAmount = numOfUnits * charges
// document.write("Net Amount Payable (within Due Date): " + "<strong>" + netAmount + "</strong>" + "<br/>")
// var latePay = 350
// document.write("Late Payment Surcharge: " + "<strong>" + latePay + "</strong>" + "<br/>")
// var grossAmount = netAmount + latePay
// document.write("Gross Amount Payable (after Due Date): " + "<strong>" + grossAmount + "</strong>")

// Chapter 35-38 - Task No. 1
//Function

// function dateTime(){
//     var date = new Date()
//     document.write(date)
// }
// dateTime()

// Chapter 35-38 - Task No. 2

// function greeting () {
//     var firstName = prompt("Enter your first name : ")
//     var lastName = prompt("Enter your last name : ")
//     var fullName = firstName + " " + lastName
//     alert("Welcome on board Mr./Ms. " + fullName)
// }
// greeting()

// Chapter 35-38 - Task No. 3
// function smartSum(){
//     var firstNum = +prompt("Enter First number : ")
//     var secNum = +prompt("Enter Second number : ")
//     var sum = firstNum + secNum
//     alert("The sum of " + firstNum + " and " + secNum + " is " + sum)

// }
// smartSum()



// Chapter 35-38 - Task No. 4
// function miniCalculator(){
//     var firstNum = +prompt("Enter First Number : ")
//     var secNum = +prompt("Enter Second Number : ")
//     var operator = prompt("Enter Operation to perform : ")
// if (operator === "+"){
//     var sum = firstNum + secNum
//     document.write("The sum of "+ firstNum + " and " + secNum + " is " + sum)
// }
// else if (operator === "-"){
//     var diff = firstNum - secNum
//     document.write("The difference of "+ firstNum + " and " + secNum + " is " + diff)
// }
// else if (operator === "*"){
//     var product = firstNum * secNum
//     document.write("The product of "+ firstNum + " and " + secNum + " is " + product)
// }
// else if (operator === "/"){
//     var div = firstNum / secNum
//     document.write("The divisor of "+ firstNum + " and " + secNum + " is " + div)
// }

// }
// miniCalculator()


// Chapter 35-38 - Task No. 5

// function square(num) {
//     var square = Math.pow(num, 2)
//     document.write(square)
// }
// square(8)

// Chapter 35-38 - Task No. 6

// function factorial(num) {
//     if (num === 0) {
//         return 1
//     }
//     else return num * factorial(num - 1)
// }
// document.write(factorial(4))

// Chapter 35-38 - Task No. 7

// function counting(num1, num2) {
// document.write("Starting number is : " + num1 + "<br/>")
// document.write("Ending number is : " + num2 + "<br/><br/>")
//     for (var i = num1; i <= num2; i++) {
//         document.write(i + "<br/>")
//     }
// }
// counting(+prompt("Enter starting number : "), +prompt("Enter ending number : "))


// Chapter 35-38 - Task No. 8

// function hypotenuse(base, perp) {
// base = prompt("Enter Base length : ")
// perp = prompt("Enter Perpendicular height : ")
// return Math.sqrt(Math.pow(base, 2) + Math.pow(perp, 2))

// }

// document.write("Hypotenuse of triangle is " + hypotenuse())

// Chapter 35-38 - Task No. 9

// var length = prompt("Enter the length of rectangle : ")
// var width = prompt("Enter the width of rectangle : ")

// function area(length,  width) {
//     return length * width
// }
// document.write("The area of rectangle is " + area(length, width))

// Chapter 35-38 - Task No. 10

// function palindrome(word) {
//     var reverse = word.split("").reverse().join("")
//     if (word === reverse){
//         document.write(word + " and " + reverse + " is same so this is a Palindrome word")
//     }
//     else{
//         document.write(word + " and " + reverse + " is not same so this is not a Palindrome word")
//     }
// }
// palindrome(prompt("Enter word : "))


// Chapter 35-38 - Task No. 11

// function toggleCase(str) {
//     var splitStr = str.toLowerCase().split(' ');
//     for (var i = 0; i < splitStr.length; i++){
//     splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring
//     (1);
//     }
//     return splitStr.join(' ');

// }

// document.write("STRING : 'the quick brown fox runs over the lazy dog' <br/>");
// document.write("OUTPUT: " + toggleCase("the quick brown fox runs over the lazy dog"));


// Chapter 35-38 - Task No. 12

// function longestWord(str) {
//     var array = str.match(/\w[a-z]{0,}/gi)
//     var result = array[0]

//     for(var i =1; i < array.length; i++) {
//         if(result.length < array[i].length){
//             result = array[i]
//         }
//     }
//     return result
// }

// document.write("String: web development tutorial<br/>");
// document.write("The longest word: " + longestWord('web development tutorial'))




// Chapter 35-38 - Task No. 13

// function charCount(str, letter) {
//     var letterCount = 0
//     for(var i = 0; i < str.length; i++){
//         if(str.charAt(i) == letter) {
//             letterCount += 1
//         }
//     } 
//     return letterCount
// }

// document.write("string: JSResourceS.com <br> ")
// document.write("'o' occurs " + charCount("JSResources.com", "o") + "times within the string");




// Chapter 35-38 - Task No. 14


// function calcCircumference(radius) {
//     var circumference =( Math.PI*2)*radius
//     document.write("The circumference is " + circumference + "<br/><br/>")
// }

// function calcArea(radius) {
//     var area = Math.PI * radius * radius
//     document.write("The area is " + area)
// }

// calcCircumference(7)
// calcArea(7)