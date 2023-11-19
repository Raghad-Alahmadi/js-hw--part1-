console.log("Welcome to JvaScript Course");

let color = 'green';
console.log(color);
console.log(color);
console.log(color);


color = 'black';

console.log(color);


var _name = 'Raghad';
console.log(_name);


let age = 21;
const yearOfBirth = 2002;


console.log(yearOfBirth);
age = 22;
console.log(age);


/*
Welocome
To
Javascript 
*/


let name2 = 'Raghad';
let age2 = 21;

console.log(typeof name2);
console.log(typeof age2);

//


let result = 2 < 3;
console.log(result);
console.log(typeof result);

//

let msg = 'Welcome to JavaScript';

console.log(typeof msg);
console.log(msg);


//

let lang = 'C++';
let msg2 = `Welcome to
 ${lang}`;
console.log(msg2);

//

let name3 ;
console.log(name3);

//

let value = -2.5;
console.log(value);

//

let value2 = 2;
console.log(value2 * 'JavaScript');

//

let value3 = null;
console.log(value3);

//

let lang2 = 'JavaScript';
console.log(lang2.length)
let msg1  = 'Welcome to ' + lang2;
console.log(msg1)
console.log(lang2[4]);

//


let color1 = 'red';
let colors  = ['red', 'green', 'blue'];

console.log(colors[2]);

colors[1]= 'black';
console.log(colors);
console.log(colors.length);
console.log(colors.includes('black'));

colors.unshift('black');
colors.unshift('white');
console.log(colors);

//

const colors1  = ['red', 'green', 'blue'];
const redcolor = colors1.shift();
console.log(colors1);
console.log(redcolor);
colors1.push('pink');
console.log(colors1);

let blueColor= colors.pop();

console.log(blueColor);

console.log(Array.isArray(colors1));
//


const values = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

console.log(values[2][2]);


//

let result2 = msg.split(' ');
console.log(result2);

//

let msg22 = ['Welcome', 'to', 'JavaScript'];
let r = msg22.join('@');
console.log(r);


///

if ( age < 12){
    console.log('Sorry, You cant ');
}
else if(age == 21){
    console.log('perfect');
}

else{
    console.log('Welcome ');
}

//

let colorNumber = 3;
switch(colorNumber){

    case 1:
        console.log(colors1[0]);
        break;
    case 2:
        console.log(colors1[1]);
        break;
    case 3:
        console.log(colors1[2]);
        break;

    default:
        console.log('White');
        break;


}


///

for ( let i = 0 ; i<= 10 ; i++){
    console.log(i);
}

for ( let i = 0; i< colors1.length; i++){
    console.log(colors1[i]);
}

for ( let color of colors1){
    console.log(color);
}

for ( let char of msg ){
    console.log(char);
}


let k = 0;

while( k < colors1.length){
    console.log(colors1[k]);
    k++;
}

let i = 5;
do {
    console.log(msg);
    i++
}while (i < 5);
console.log('***');

//

function printNum(to){
    for ( let i = 0 ; i <=to; i++){
        console.log(i);
    }
}
printNum(5);


function add2Num(x, y ) {
    console.log ( x + y);
    return result;
}

add2Num(2,4);

printNum(add2Num(3,5));