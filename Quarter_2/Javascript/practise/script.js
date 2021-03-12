// var rightNow = new Date();
// console.log(rightNow);
// var theDay = rightNow.getTime();
// console.log(theDay);
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var nameOfToday = dayNames[theDay];
// console.log(nameOfToday)
// var dateString = rightNow.toString();
// console.log(dateString.charAt('5'))

// var today = new Date();
// var doomsday = new Date("June 30, 2035");
// var msToday = today.getTime();
// var msDoomsday = doomsday.getTime();
// var msDiff = msDoomsday - msToday;
// var dDiff = msDiff / (1000 * 60 * 60 * 24 );
// console.log(dDiff)
// dDiff = Math.floor(dDiff);
// console.log(dDiff)

// var d = new Date();
// console.log(d);
// d.setFullYear(2002);
// d.setMonth(11);
// console.log(d);
// tellname ();
var val;
var val = 100;
function tellname(){
  val = 50;
 console.log('value inside function',val);
 return val
}
console.log(' value',val);

tellname();
console.log('global value',val);


// var var1 = 10;
// var var2 = 20;
// switch(var1+var2) {
//     case 10:
//         console.log('found')
//         break;
//     case 30:
//         console.log(' found...')
//     break;
//     default:
//         console.log('Not found....')
// }


// var cityToCheck = 'Boston'
// var someChars = cityToCheck.slice(0,5);
// console.log(someChars)

// var str = 'To be or not to be and next be and also next be';
// var numChars = str.length;
// // console.log(str);
//  for (var i = 0; i<numChars;i++){
//      if (str.slice(i,i+2) === "be") {
//         str = str.slice(0, i) + "cc" + str.slice(i + 2);
//      }
//     }
// console.log(str);


//  var text = 'To be or not to be';
//  var firstChar = text.lastIndexOf('be');
// //  console.log(text);
       
//         if (firstChar !== -1) {
//             text = text.slice(0, firstChar) + "cc" +
//             text.slice(firstChar + 2);
//          }
//  console.log(text);



// var num = Math.random()  ;
// console.log(num);
// var improve_num = num + 1;
// console.log(improve_num)
// var round_num = Math.round(num);
// console.log(round_num);
// var ceil_num = Math.ceil(num);
// console.log(ceil_num);
// var floor_num = Math.floor(num);
// console.log(floor_num)

//  var bigDecimal = Math.random();
//  var improvedNum = (bigDecimal * 6) + 1;
//  var numberOfStars = Math.round(improvedNum);
//  console.log(numberOfStars)

// var profit = "200" + "duck";  
//  console.log(typeof(profit));
//  var result = "200" / 150;
//  console.log(result)

// var input = '17.868';
// var fixed_num  = 
// console.log(fixed_num)
// var myInteger = Number("1.9999");
// console.log(myInteger)
// var myFractional = parseFloat("1.9999");
// console.log(myFractional)

// var total = 10.5555;
// var prettyTotal = total.toFixed(2);
// console.log(prettyTotal)
// var nationality;
// var nationality = 'U.S.','World';
// console.log(typeof(nationality))
// var num,ik = 'Hello';'World';
// console.log(num)
// console.log(ik)

//  var caseQty = '144';
//  alert(caseQty);
//  console.log(typeof(caseQty))
// var myvar = 'hello';
// console.log(myvar)

// var input = prompt('Enter the val','Welcome');
// console.log(input)

// var a = 20;
// var b = '20'
// if ( a === b)
//   console.log('wright answer');
//   else
//   console.log('wrong answer');

var list = ['A','B','C','D'];
// console.log(list);
// list.splice(2,1,'E','F');
// console.log(list);
var new_list = list.slice(1,3);
// console.log(new_list)