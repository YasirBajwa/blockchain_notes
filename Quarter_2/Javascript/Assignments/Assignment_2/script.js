// Q1
//  Write a program to take “gender” as input from the user. If the user is male, give the
// message in the alert message Box.: “Good Morning Sir” , If the user is female, give the
// message in the alert message Box.: Good Morning Ma’am.

// Solution
// var user_data = prompt('Enter Your gender');
// if (user_data === 'male'){
//      alert('Good morning Sir');
// }
// else if(user_data ==='female'){
//     alert('Good morning Mam');

// }
// else{
//     alert('Please Enter Your Gender')
// }

// Q2
// Q2: Write a program to take input on the marks obtained in three subjects & total marks.
// Compute & show the resulting percentage on your page. Take percentage & compute grade as
// per following table: 
// var sub_1 = +prompt('Enter Your first subject marks out of 100');
// var sub_2 = +prompt('Enter Your second subject marks out of 100');
// var sub_3 = +prompt('Enter Your third subject marks out of 100');
// var total = ( sub_1 + sub_2 + sub_3 ) / 300 * 100;

// if( total >= 80){
//     alert('Excellent Your grade is A-one');
// }
// else if(total >= 70 ){
//     alert('Good Your grade is A');

// }
// else if(total >= 60 ){
//     alert('You need to improve Your grade is B');
// }
// else {
//     alert('Sorry You are fail');
// }



// Q3
// Q3:Write a program that takes temperature as input and shows a message based on following
// criteria:. T > 40 then “It is too hot outside.” b. T > 30 then “The Weather today is Normal.”
//  c. T >
// 20 then “Today’s Weather is cool.” d. T > 10 then “OMG! Today’s weather is so Cool.”

// Solution
// var temp_input = +prompt('Enter the temprature');

// if(temp_input > 40){
//     alert('It is too hot outside.')
// }
// else if(temp_input > 30){
//     alert('The Weather today is Normal.')

// }
// else if(temp_input > 20){
//     alert('Today’s Weather is cool.')

// }
// else{
//     alert('OMG! Today’s weather is so Cool.')
// }


//Q4
// Q4:Write a JavaScript program that accepts two integers and displays the larger. Also show if
// the two integers are equal

// var num_1 = +prompt('Enter first number');
// var num_2 = +prompt('Enter second number');

// if(num_1 > num_2){
//     alert(`${num_1} is greater`)
// }
// else if(num_1 < num_2){
//     alert(`${num_2} is greater`)

// }
// else if( num_1 === num_2){
//     alert('Both Numbers are equal');
// }
// else{
//     alert('Write numbers')
// }

//Q5
// Q5: . This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13; if (hour < 18) {
// greeting = "Good day";
// else greeting = "Good evening";
// }  


// solution 
// var greeting;
// var hour = 13;
// if (hour < 18) {
//      greeting = "Good day";
// }
// else {
//      greeting = "Good evening";
// } 


// Q6
// Q6: Declare and Initialize an array and store available education qualifications
// in Pakistan (e.g.
// SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser
// like:

// var edu = ['SSC','HSC','BCS','BS','BCOM','MS','M.Phil','PhD'];
// for(var i = 0; i < edu.length ; i++){
//     document.write(`<li>${edu[i]} <br>`);
//      console.log(edu[i]); 
// }


// end