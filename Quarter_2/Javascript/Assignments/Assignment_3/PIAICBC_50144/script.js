// Q1) Write a program to replace the “Hyder” to “Islam” in the word
// “Hyderabad” and display the result in the alert message box.


// Solution

// var city_name = 'Hyderabad';
// var change = 'Hyder';
// var result = city_name.replace(/Hyder/g,'Islam')
// alert(`Result after change is ${result}`);

// Q2) Write a condition where you can compare these two strings using changing case
// method and show the message “Match” in the alert message box.
// var message1 = “karachi”;
// var message2 = “KARACHI”;

// Solution 

// var message1 = 'karachi';
// var message2 = 'KARACHI';
// message2 = message2.toLowerCase();

// if(message1 === message2){
//     alert('Match');
// }
// else{
//     alert('Dont Match')
// }


// Q3) Solve the error in Given Program:
// var text = "World War II start from 1939 to 1945";
// var firstChar = text.indexOf("World War II");
// if (firstChar !== -0)
// {
//  text = text.splice(0, firstChar) + "the Second World War" +
// text.splice(firstChar + 8);
//  console.log(text)
// }

// Solution
// 1st error: Javascript not allow this type of comparison like with non-negative 0
// 2nd error : splice is only used for array for string we can use slice method
// 3rd error : The second string should start from 9
// var text = "World War II start from 1939 to 1945";
// var firstChar = text.indexOf("World War II");
// if (firstChar === 0)
// {
//  text = text.slice(0, firstChar) + "the Second World War" +
//  text.slice(firstChar + 9);
//  console.log(text)
// }


// Q4) Write a program To find exclamation in the following String ,
//  if the result is true
// then show the message “Exclamation Found” in the alert message box.
// var text = “How bright they've grown in the sunlight!”


// Solution 
// Solution 1 : we can use search function if we have simple string or to find one character
// Solution 2 : we can use regix or (|)
// var str = "How bright they've grown in the sunlight!";
// var result = str.search('!');
// if(result){
//     alert(`Exclamation found at position ${result}`)
// }

// ==> Solution 2 finding multiple characters
// var str = "!I a ! a!"
// var regex = /!/g,
// result;
// indices = [];
// while ( (result = regex.exec(str)) ) {
//     indices.push(result.index);
// }
// console.log(indices)

// Q5) Create a nested loop where you generate Full Name using two arrays, firstName
// & LastName.
// var firstName = [“Akhtar” , “Shoaib” , “Yousha”, “Maaz”’];
// var lastName = [“khan” , “syed”];

// Solution 
// var firstName = ['Akhtar' , 'Shoaib' , 'Yousha', 'Maaz'];
// var lastName = ['khan' , 'syed'];

// for( var i = 0 ; i < firstName.length ; i++){
//     for( var j = 0 ; j < lastName.length ; j++){
//         console.log(firstName[i] +' ' + lastName[j]);
//     }
// }