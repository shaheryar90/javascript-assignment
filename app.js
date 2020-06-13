// Alert     Assignment 1
// 1. Write a script to greet your website visitor using JS alert box.
alert( "have a good day , welcome to my website" );
// 2. Write a script to display following message on your web page:
alert( "Error,please enter a valid message" );
//3. Write a script to display following message on your web page: (Hint : Use line break)
alert("\nWelcome to JS land..\n happing coding");
//4. Write a script to display following messages in sequence:
alert("welcome to JS Land...");
alert("Happy codding");
//5. Generate the following message through browser’s developer console:
alert("Hello... I can run JS through my web's browser console")
//6. Make use of alerts in your new/existing HTML & CSS project.
<script>alert("Hello world")</script>
//7. Practice placement of <script></script> element in following sections of your project in exercise 6:
//a. Head
<script src="app.js"></script>
b. Body (before your page’s HTML)
<script>alert("Hello")</script>
c. Body (inside your page’s HTML)
<script>alert("Hello world!!!!")</script>
d. Body (after your page’s HTML)
<script>alert("Hello world!!!!!")</script>
// Assignment 2 Variable of string
//1. Declare a variable called username.
var username="shaheryar";
//2. Declare a variable called myName & assign to it a string that represents your Full Name.
var myName;
myNmae="shaheryar";
Fullname=myName;

//3. Write script to
//a) Declare a JS variable, titled message.
var message;

//b) Assign “Hello World” to variable message
message="Hello world";

c) Display the message in alert box.
alert(message);
//4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.
var name="jhone doe";
alert(name)
var age="15 year old";
alert(age)
var course="Certified Mobile Application Development";
alert(course)
//5. Write a script to display the following alert using one JS variable:
var  eat="PIZZA\nPIZZ\nPIZ\nPI\nP";
alert(eat);
//6. Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatenation)
var email="shaheryar724@gmail.com";
alert("my email is " +  email)
//7. Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box
var book="A smarter way to learn Javascript";
alert("I am trying to learn from the book " + book);
//8. Write a script to display this in browser through JS
document.write("Yah! I can write HTML content through javascript");
//9. Store following string in a variable and show in alert and browser through JS
document.write("“▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬”");
alert("“▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬”");
// Assignment 3 variable for numbers

//1. Declare a variable called age & assign to it your age. Show your age in an alert box.
var age;
age=15;
alert("my ag is " + age);
//2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.
for(var N=1; N>0; N++){
    alert("you have visited this site" + N + " times")

}
//3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:
var  birthYear;
birthYear=1996;
document.write("My birth year is " + birthYear +"<br>"+"data type of declare variable is number");
//4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information: a. Visitor’s name b. Product title c. Quantity i.e. how many products a visitor wants to order Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
name=prompt("visitor's name");
product=prompt("product title");
quantity=+prompt("product quantity");
document.write(name +  " ordered "+ quantity + product+ " on XYZ lothing stores ");
//Assignment 4  Legal &ilegal
//1. Declare 3 variables in one statement.
var a="hello",b=21,c="pakistan";
//2. Declare 5 legal & 5 illegal variable names.
// Illegl variable
var 1abc="ali";
var 3.45="pak fouj";
var abc iop="Raw";
var 1_45="pak fouj";
var 1$="billi";


//Legal variable
var _1abc="ali";
var ali_Mughal="shayan";
var aliMughal="shayan";
var result=123;
var $Mughal="pak fouj";

//3. Display this in your browser
//a) A heading stating “Rules for naming JS variables”
1.camelName e.g firstName
2. case sensitive 
3. start with _, $, any letter

b) Variable names can only contain $ , character, underscore_ and Number. For example $my_1stVariable
c) Variables must begin with a dollar $, underscore_ or character. For example $name, _name or name
d) Variable names are case sensitive
e) Variable names should not be JS reserved words.
// ASSIGNMENT 5 MATHS EXPRESSION
1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
var a=3;
var b=5;
c=a+b;
document.write("sum of "+a+ " and "+b+ " is " +c);
//2. Repeat task1 for subtraction, multiplication, division & modulus.
var a=3;
var b=5;
c=a*b;
document.write("subtraction of "+a+ " and "+b+ " is " +c);
var a=5;
var b=3;
c=a-b;
document.write("multiplication of "+a+ " and "+b+ " is " +c);
var a=3;
var b=5;
c=a\b;
document.write("division of "+a+ " and "+b+ " is " +c);
var a=3;
var b=5;
c=a%b;
document.write("modulus of "+a+ " and "+b+ " is " +c);
//3. Do the following using JS Mathematic Expressions
//a. Declare a variable. 
var a
//b. Show the value of variable in your browser like “Value after variable declaration is: ??”.

document.write("Value after variable declaration is: " + a+"<br>");

//c. Initialize the variable with some number.
a=5;

//d. Show the value of variable in your browser like “Initial value: 5”.
 document.write("Initial value: "+a+"<br>");
 
 //e. Increment the variable.
 a++;

// f. Show the value of variable in your browser like “Value after increment is: 6”. 
 document.write("Value after increment is: " + a+"<br>");

 //g. Add 7 to the variable.
 c=a+7;
 
 //h. Show the value of variable in your browser like “Valueafter addition is: 13”. 
 document.write("value fter addition is: "+c+"<br>");
 
 //i. Decrement the variable.
 --c;

 //j. Show the value of variable in your browser like “Value after decrement is: 12”.
 document.write("value after decreament is: "+c+"<br>");
 
 //k. Show the remainder after dividing the variable’s value by 3.
 d=c%3;

// l. Output : “The remainder is : 0”.
document.write("the remainder is: "+ d+"<br>");
//4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:
one_movie_ticket=600 ;
b=one_movie_ticket *5;
document.write("total cost to buy 5 tickets to a movie is: "+ b+" PKR ");

//5. Write a script to display multiplication table of any number in your browser. E.g
for(var i=1 ;i<=10;i++){
    document.write("5 " + " * "+  i + " = " + 5*i +"<br>");
}
//6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
//a. Store a Celsius temperature into a variable.
var C=25;

//b. Convert it to Fahrenheit & output “NNoC is NNoF”.
F=(C*9/5)+32;
document.write(" output of "+ C+ " celsius " + " is " + F+ " farhrenheit ");



c. Now store a Fahrenheit temperature into a variable.
var f=70;
d. Convert it to Celsius & output “NNoF is NNoC”.
C=(f-32)*5/9;
document.write(" output of "+ f+ " farhrenheit" + " is " + F+ " celcius ");

//7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
document.write("<h1> "+ " Shopping Cart" + "<br> <br>");
//a. Price of item 1
//b. Price of item 2 
 //c. Ordered quantity of item 1
//d. Ordered Quantity of item 2 
//e. Shipping charges
//Compute the total cost & show the receipt in your browser.

a=+prompt(" how much price of item 1  ");
document.write("price of item 1 is: "+ a+"<br>");
b=+prompt("how many ordered quantity of item 1  ");
document.write("quantity of items 1 is"+ b + "<br>");

c=+prompt(" how much price of item 2 ");
document.write("price of item 2 is: "+ c+"<br>");
d=+prompt("how many ordered quantity of item 2  ");
document.write("quantity of items 2 is"+ d+ "<br>");
document.write("shipping charges: 100" + "<br> <br>");
total_cost=a*b+c*d+100;
document.write("Total cost of your order is "+ total_cost);
//8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser
document.write("<h1>"+ "Marks Sheet" + "<br> <br>");
totalMarks=+prompt("total marks");
student1=+prompt("marks obtained");
percentage=(student1/totalMarks)*100;
document.write("Total marks: " + totalMarks+"<br>");
document.write("Marks obtained: " + student1+"<br>");
document.write("percentage: " + percentage+"<br>");
//9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)
var a;
a=(10*104.80)+ (25*28);
document.write("<h1>"+"Currency in PKR"+"<br>");
document.write("Total currency in PKR: " + a);
//10. Write a program to initialize a variable with some number and do arithmetic in following sequence: 
a. Add 5
 b. Multiply by 10 
 c. Divide the result by 2
 Perform all calculations in a single expression
 var a=5;
 document.write(((a+5)*10)/2);
 //11. The Age Calculator: Forgot how old someone is? Calculate it! a. Store the current year in a variable. b. Store their birth year in a variable. c. Calculate their 2 possible ages based on the stored values.
//Output them to the screen like so: “They are either NN or NN years old”.
var current_year=2020;
var birth_year=1996;
c= current_year-birth_year;

document.write("<h1>"+"Age Calculator"+"<br> <br>");
document.write("current year: "+current_year+"<br>");
document.write("birth year: "+birth_year+"<br>");
document.write("your age is: "+ c+"<br>")
//12. The Geometrizer: Calculate properties of a circle. a. Store a radius into a variable.

//b. Calculate the circumference based on the radius, and output “The circumference is NN”.
 //(Hint : Circumference of a circle = 2 π r , π = 3.142)
 // Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

 var radius=20;
 Circumference=2*3.142*radius;
 area=3.142*radius*radius;
 document.write("<h1>"+"The geometrizer"+"<br> <br>");
 document.write("The radius is: " +radius+"<br>");
 document.write("The circumference is: " +Circumference+"<br>")
 document.write("The area is: " +area+"<br>")


//13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is?
// Wonder no more. 
//a. Store your favorite snack into a variable 
//b. Store your current age into a variable.
// c. Store a maximum age into a variable. 
//d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of your life.
//Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.
var favourite_snack= "chocolate chip";
var age=15;
var maximum_age=65;
var snack_per_day=3;
total=maximum_age-age;
total1=total*3;
document.write("<h1>"+"The Lifetime supply calculator"+"<br> <br>");
document.write("The favourite snack is: " +favourite_snack+"<br>");
document.write("The current age is: " + age+"<br>");
document.write("The Estimated maximum age is: " +maximum_age+"<br>")
document.write("Amount snack per day is:  " +snack_per_day+"<br>")
document.write("you will need " + total1 + favourite_snack+ " to last you until the ripe old age of " +  maximum_age);

//ASSIGNMENT 6  MATHS EXPRESSIONS
//1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:
var a=10;
document.write("Result"+"<br>");
document.write("the value of a is: " + a +"<br> <br>");
++a
document.write("the value of ++a is: " +a+ "<br> ")

document.write(" Now,the value of a is: " + a +"<br> <br>");


document.write("the value of a++ is: " +a++ +"<br>")
document.write(" Now,the value of a is: " + a +"<br> <br>");
--a
document.write("the value of --a is: " +a +"<br>")
document.write(" Now,the value of a is: " + a +"<br> <br>");

document.write("the value of a-- is: " +a-- +"<br>")
document.write(" Now,the value of a is: " + a +"<br> <br>");

//2. What will be the output in variables a, b & result after execution of the following script: 
var a = 2, b = 1; 
var result = --a - --b + ++b + b--;
 //Explain the output at each stage:
--a; 0
 --a - --b; -1 - -1
 --a - --b + ++b; -2 - -2 + -1
--a - --b + ++b + b--; -3 - -1
document.write("a is "+ a +"<br>");
document.write("b is " + b + "<br>");
document.write("result: "+ result);
//3. Write a program that takes input a name from user & greet the user.
name=prompt("what's your name? ");
alert("welcome to my site");
//5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.
number=+prompt("enter the number");
for(var i=1; i<=10; i++){
    document.write(number+ " * " +i+ " = " +  number*i +"<br>");
}
//6. Take
//a) Take three subjects name from user and store them in 3 different variables.
a=prompt("subject's name");
b=prompt("subject's name");
c=prompt("subject's name");


//b) Total marks for each subject is 100, store it in another variable.
var d=100;
//c) Take obtained marks for first subject from user and stored it in different variable.
e=+prompt("obtained marks");
f=+prompt("obtained marks");
g=+prompt("obtained marks");
totalmarks=e+f+g;
percentage1=(e/100)*100;
percentage2=(f/100)*100;
percentage3=(g/100)*100;
percentage=(totalmarks/300)*100;


document.write("<h1>" +"Subject "+" Total marks " +" Marks " +"Percentage"+"<br>");
document.write(a+"&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp"+ d +"&nbsp &nbsp &nbsp &nbsp &nbsp " +e + "&nbsp &nbsp &nbsp &nbsp &nbsp"+percentage1+"%"+"<br>");
document.write(b+" &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" +d +" &nbsp &nbsp &nbsp &nbsp &nbsp" +f + "&nbsp &nbsp &nbsp &nbsp &nbsp"+percentage2+"%"+"<br>");
document.write(c+" &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" +d+ " &nbsp &nbsp &nbsp &nbsp &nbsp"+g + "&nbsp &nbsp &nbsp &nbsp &nbsp "+percentage3+"%"+"<br>");
document.write("&nbsp &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp &nbsp&nbsp "+"300"+"&nbsp &nbsp &nbsp &nbsp &nbsp  " +totalmarks+ " &nbsp&nbsp &nbsp &nbsp &nbsp &nbsp"+ percentage+"%");


//Assignment 9-10 
//1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”
a=prompt("enter the city");
if (a=='Karachi'){
    document.write('welcome to city of light');
}
//2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.
a=prompt("enter the gender");
if(a=='male'){
    document.write("Good Morning Sir");
}
else if(a=="female"){
    document.write("Good Morning ma'am");

}
//3. Write a program to take input color of road traffic signal from the user & show the message according to this table:
a=prompt("enter the color of road traffic signal");
if(a=='Red'){
    document.write("Must stop");

}
else if(a=='Yellow'){
    document.write("Ready to move");

}
else{
    document.write("move now");
}
//4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”
a=+prompt("enter the remaining fuel in car (in liters");
if(a<0.25){
    document.write("Please refill the fuel in your car");
}
// 5. Run this script, & check whether alert message would be displayed or not. 
Record the outputs.
 a. 
 var a = 4;
  if (++a === 5)
  { alert("given condition for variable a is true"); }

  output: given condition for variable a is true

  b. var b = 82;
   if (b++ === 83)
   { alert("given condition for variable b is true"); }

   output: there is no output due to condition is not true 

   c. var c = 12; 
   if (c++ === 13){ alert("condition 1 is true"); } 
   if (c === 13){ alert("condition 2 is true"); }
    if (++c < 14){ alert("condition 3 is true"); }
     if(c === 14){ alert("condition 4 is true");  

     output: no output beacause if used for one condtion  if more than one condition we should use else if.
     
     
     d. var materialCost = 20000; 
     var laborCost = 2000; 
     var totalCost = materialCost + laborCost;
      if (totalCost === laborCost + materialCost){ alert("The cost equals"); }


      output:in laert box the cost equals

      e. if (true){ alert("True"); }
       if (false){ alert("False"); }

       output:True

       f. if("car" < "cat")
       { alert("car is smaller than cat"); }

       OUTPUT: car is smaller than cat
       //6. Write a program to take input the marks obtained in three subjects & total marks. 
       //Compute & show the resulting percentage on your page.
        //Take percentage & compute grade as per following table:
        var total_marks=300;
        a=+prompt("marks obtained in maths");
        b=+prompt("marks obtained in english");
        c=+prompt("marks obtained in urdu");
        marks_obtained=a+b+c;
        percentage=(marks_obtained/total_marks)*100;
        if(percentage>=80){
            document.write("<h1>" +"Marks sheet"+"<br> <br>");
            document.write("Total Marks:" + total_marks+"<br>");
            document.write("marks obtained" + marks_obtained +"<br>");
            document.write("percentage: "+ percentage +"<br>");
            document.write("Grade:  A+" +"<br>")
            document.Write("Remarks: Excellent" +"<br>")
        }
        else if(percentage>=70){
            document.write("<h1>" +"Marks sheet"+"<br> <br>");
            document.write("Total Marks:" + total_marks+"<br>");
            document.write("marks obtained" + marks_obtained +"<br>");
            document.write("percentage: "+ percentage +"<br>");
            document.write("Grade:  A" +"<br>")
            document.Write("Remarks: Good" +"<br>")
        }
        else if(percentage>=60){
            document.write("<h1>" +"Marks sheet"+"<br> <br>");
            document.write("Total Marks:" + total_marks+"<br>");
            document.write("marks obtained" + marks_obtained +"<br>");
            document.write("percentage: "+ percentage +"<br>");
            document.write("Grade:  B" +"<br>")
            document.Write("Remarks: you need to improve" +"<br>")
        }
        else  if(percentage<60){
            document.write("<h1>" +"Marks sheet"+"<br> <br>");
            document.write("Total Marks:" + total_marks+"<br>");
            document.write("marks obtained" + marks_obtained +"<br>");
            document.write("percentage: "+ percentage +"<br>");
            document.write("Grade: fail " +"<br>");
            dDocument.Write("Remarks: sorry" +"<br>")
        }
   // 7. Guess game:
       // Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number.
       //  a. If user guesses the same number, show “Bingo! Correct answer”. b. If the guessed number +1 is the secret number,
        // show “Close enough to the correct answer”.        
     var secret_number=7;
        a=+prompt("enter the guess number");

      if(a==secret_number){
          document.write("Bingo !.")

      }
      else{
          document.write("Close enough to the correct answer");
      }
      8. Write a program to check whether the given number is divisible by 3.
       Show the message to the user if the number is divisible by 3.
a=+prompt("enter the number")
if(a%3==0){
    document.write("the number is divisible by 3");
}
else{
    document.write("the number is not divisible by 3");
}

//9. Write a program that checks whether the given input is an even number or an odd number.
a=+prompt("enter the number")
if(a%2==0){
    document.write("the number is even");
}
else if (a%2==1){
    document.write("the number is odd");
}


10. Write a program that takes temperature as input and shows a message based on following criteria 
a. T > 40 then “It is too hot outside.” 
b. T > 30 then “The Weather today is Normal.”
 c. T > 20 then “Today’s Weather is cool.” 
d. T > 10 then “OMG! Today’s weather is so Cool.”

T=+prompt("enter the temperature");
if(T>40){
    document.write("It is too hot outside");
}
else if(T>30){
    document.write("The weather today is normal");
}
else if(T>20){
    document.write("Today's weather is cool");
}
else if(T>10){
    document.write("OMG! today's weather is so cool");

}

//11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input: 
a. First number b. Second number c. Operation (+, -, *, /, %) 
Compute & show the calculated result to user.

var a=+prompt("enter the first number");
var b=+prompt("enter the second number");
var c=prompt("enter the operator");
if(c==="+"){
    d=a+b;
    document.write(d);
}
else if(c==="-"){
    d=a-b;
    document.write(d);
}
else if(c==="*"){
    d=a*b;
    document.write(d);
}
else if(c==="/"){
    d=a/b;
    document.write(d);
}

//Assignment 12-13:
//1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. 
(Hint: ASCII codes:- A=65, Z=90, a=97, z=122).


var input_char=+prompt(" enter the character")
if (input_char >= 65 && input_char <= 90) {
    document.write("uppercase letter")
}
else if (input_char >= 97 && input_char <= 122) {
    document.write("lowercase letter")
}

 
else if (input_char >= 48 && input_char <= 57){ 
document.write(" Digit "); }

// OTHERWISE SPECIAL CHARACTER 
else
document.write(" Special Character "); 
} 

2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.
a=+prompt("enter the number");
b=+prompt("enter the number");

    if (a > 0 && b > 0 && a > b) {
      document.write("The larger number is " + a );
    } else if (a > 0 && b > 0 && a < b) {
      document.write("The larger number is " + b);
    } else if (a === b && a > 0 && b > 0) {
      document.write("Both numbers are equal!")
    } else {
        document.write("Please add an integer!");
  
    }

   //3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.
   a=+prompt("enter the number")
   if (a<0){
       document.write("the number is negative");
   } 
   else if (a>0){
       document.write("the number is positive")
   }
   else if(a===0){
       document.write("the number is zero");
   }
   //4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise
   a=prompt("enter the character");
if (a==='a' || a==='i' || a==='o' || a==="u" || a==='e'){
    document.write("the given character is vowel")
}
else{
    document.write("the given character is not vowel")


}

//5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give message “ Please enter your password”
// ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”.
//  Show “Incorrect password” otherwise
//  please enter your password"
 var password='something'
a=prompt("enter the password");

if(a===password){
    document.write("Correct! the password you entered the original password");
}
else if(a === ""){
    
      document.write("please enter the password")

   
}
else if (a !== password){
  document.write("incorrect password");
}
//6. This if/else statement does not work.Try to fix it: 
//  var greeting; 
//  var hour = 13;
//   if (hour < 18) { greeting = "Good day"; 
//   else greeting = "Good evening"; }

 solution 
  var greeting; 
  var hour = 13;
   if (hour < 18) { greeting = "Good day"; 
 document.write(greeting)}
   else{ greeting = "Good evening";
 document.write(greeting); }
 
  //7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm.
  // Implement the following case using if, else & else if statements
  time=+prompt("enter the time: ");
  if(time>=0000 && time<1200){
      document.write("Good morning !");
  } 
  else if(time>=1200 && time<1700){
      document.write("Good afternoon! ")
  }
  else if (time>=1700 && time<2100){
      document.write("good evening !");
  }
  else if(time>=2100 && time<=2359){
      document.write("Good night !");
  }

  //Assignment 13-15
 //1. Declare an empty array using JS literal notation to store student names in future
var arr=[];
//2. Declare an empty array using JS object notation to store student names in future
var arr={}

//3. Declare and initialize a strings array.
var arr=['pakistan','india','australia'];
//4. Declare and initialize a numbers array
var arr=[2,5,9,7];
//5. Declare and initialize a boolean array.
var arr=[true.false,false,true,false];
//6. Declare and initialize a mixed array.
var arr=[2,'ali','pakistan',4,true];
//7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). 
//Show the listed qualifications in your browser like:

var arr=['SSC','HSC','BCS','BS','BCOM','MS','M.PHIL.','PhD']
arr.length()



//8. Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:
var arr=['Michael','John','Tony'];
var arr1=[320,230,480];
per1=(arr1[0]/500)*100;
per2=(arr1[1]/500)*100;
per3=(arr1[2]/500)*100;
 document.write("<h1>"+"Score of " + arr[0]+ " is " + arr1[0] + ".  percentage=  " +per1+ "%"+"<br>");
 document.write("Score of " + arr[1]+ " is " + arr1[1] + ".  percentage=  " +per2+ "%"+"<br>");
 document.write("Score of " + arr[2]+ " is " + arr1[2] + ".  percentage=  " +per3+ "%"+"<br>");

 //9. Initialize an array with color names. Display the array elements in your browser. 
 //a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser.
  //b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser. 
  //c. Add two more color to the beginning of the array. Display the updated array in your browser.
   //d. Delete the first color in the array. Display the updated array in your browser.
   //e. Delete the last color in the array. Display the updated array in your browser.
    //f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser. 
 //g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Thenremove the same number of color(s) from user-defined position/index. . Display the updated array in your browser.


 var arr=['red','pink','green','purple'];
console.log(arr)
 

a=prompt("which color do you want to add? ");
arr.unshift(a)
console.log(arr)
 

b=prompt("which color do you want to add? ");
arr.push(b);
console.log(arr)


arr.unshift("blue","brown");
console.log(arr)



arr.shift();
console.log(arr);



arr.pop();
console.log(arr)






s=+prompt("enter the index number");

arr.splice(s,1,"black");
console.log(arr)



o=+prompt("enter the index");
arr.splice(o,o+1);
console.log(arr)



//10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.
arr1=[320,230,480,120];
console.log("<h1>"+Scores of students: "+ arr1)
arr1.sort();
console.log("Ordered scores of student" +arr1)


//11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.
var cities=['karachi','Lahore','Islamabad','Quetta','Peshawar'];

var selectedCities=cities.slice(2,4);
document.write("<h1>"+"Cities list:" +"<br>" +cities +"<br>")
document.write("Selected list: " +selectedCities);




//12. Write a program to create a single string from the below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method)

var arr = ["This ", "is ", " my ", " cat"];
document.write("<h1>"+"Array: "+"<br>"+arr +"<br>");

document.write("String:"+ "<br>" arr[0]+arr[1]+arr[2]+arr[3]);


//13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)

var array=[];
array.push("keyboard");
array.push("Mouse");
array.push("printer");
array.push("Monitor");

document.write("<h1>"+ "Devices" +"<br>"+array +"<br> <br>")

a=array.shift()
b=array.shift()
c=array.shift()
d=array.shift()
document.write("Out"+"<br>"+a+"<br>")

document.write("Out"+"<br>"+b+"<br>")
document.write("Out"+"<br>"+c+"<br>")
document.write("Out"+"<br>"+d+"<br>")


//14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In-First Out)
var array=[];
array.push("keyboard");
array.push("Mouse");
array.push("printer");
array.push("Monitor");

document.write("<h1>"+ "Devices" +"<br>"+array +"<br> <br>")

a=array.pop()
b=array.pop()
c=array.pop()
d=array.pop()
document.write("Out"+"<br>"+a+"<br>")

document.write("Out"+"<br>"+b+"<br>")
document.write("Out"+"<br>"+c+"<br>")
document.write("Out"+"<br>"+d+"<br>")


//15. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown/select menu in your browser using document.write() method:

var array1=['Apple','Samsung','Motorolla','Nokia','Sony','Haier']
document.write("<h1>"+array1[0]+"<br>")
document.write("<h1>"+array1[1]+"<br>")
document.write("<h1>"+array1[2]+"<br>")
document.write("<h1>"+array1[3]+"<br>")
document.write("<h1>"+array1[4]+"<br>")
document.write("<h1>"+array1[5]+"<br>")


//Assignment 17-20  
//1. Declare and initialize an empty multidimensional array. (Array of arrays)
var arrays=[]
arrays=[
    [],[],[]
]
//2. Declare and initialize a multidimensional array representing the following matrix:
arrays.unshift([1,2,3],[0,1,2],[1,0,1]);
document.write(arrays);

//3. Write a program to print numeric counting from 1 to 10.
for  ( var i=1; i<=10; i++){
    document.write(i+"<br>")
}

//4. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user
a=+prompt("enter the number to show its multipication")
j=+prompt("enter length multiplication table")
for(var i=1;i<=j;i++){
    document.write(a +" " +"*"+ " "+i+ " "+"="+ a*i+"<br>");

}


//5. Write a program to print items of the following array using for loop: 
//fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]
fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry']
for(var i=0;i<fruits.length;i++){

    document.write("<h1>"+fruits[i]+"<br>")
}
    
    
    for(var i=0;i<fruits.length;i++){
        
    document.write("Elements at index"+" "+i+" is "+ fruits[i]+"<br>")

}

//6. Generate the following series in your browser. See example output.
 //a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
 document.write("<h1>"+"Counting"+"<br>");
 for(var i=0;i<=15;i++){
    
     document.write( i+","+" ");
 }

 // b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
 document.write("<h1>"+"Reverse counting"+"<br>");
 for(var i=10;i>=1;i--){
    
     document.write( i+","+" ");
 } 
  //c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 
  document.write("<h1>"+"Even"+"<br>");
 for(var i=0;i<=20;i=i+2){
    
     document.write( i+","+" ");
 }

  d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
  document.write("<h1>"+"Odd"+"<br>");
 for(var i=1;i<=20;i=i+2){
    
     document.write( i+","+" ");
 }
 e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
 document.write("<h1>"+"Series"+"<br>");
 for(var i=2;i<=20;i=i+2){
    
     document.write( i+"k"+ ","+" ");
 }

 //7. You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] 
 //Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Example
 A=["cake","apple pie","cookie","chips","patties"]
 a=prompt("Welcome to ABC bakery .what do you want to order sir/maam?");
 for(i=0;i<A.length;i++){
 if(A[i]==a){
   document.write(a+" is available at index "+ i+ " in our bakery ")
   break
 }
 else{
     document.write("we are sorry" +a+" is not available at "+" in our bakery ")
     break
 }}


 //8. Write a program to identify the largest number in the given array. A = [24, 53, 78, 91, 12].
 var A=[24,53,78,91,12]
 var largest= 0;
 
 for (i=0; i<=largest;i++){
     if (A[i]>largest) {
         var largest=A[i];
         
     
     }
    
     
 }
 document.write("<h1>"+"Array items: "+ A+"<br>");
 document.write("the largest number is " + largest)



 //9. Write a program to identify the smallest number in the given array. A = [24, 53, 78, 91, 12]
 var A=[24,53,78,91,12]
 var min=A[0]
 
 for(var i=1;i<A.length;i++){
     if(A[i]<min){
         min=A[i];
     }
     
    
 }
 document.write("<h1>"+"Array items: "+ A+"<br>");
     document.write("the Smallest number is " + min)





 //10. Write a program to print multiples of 5 ranging 1 to 100.
 for(var i=5; i<=100;i=i+5){
    document.write(i +" , ")
}
