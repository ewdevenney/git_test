let message;
message = 'Hello'; //store the string 'Hello' in the 'message' variable

alert (message); // shows the 'message' variable content

let message = 'Hello!'; // define the variable and assiign the value

alert(message);

let user = 'John', age = 25, message = 'Hello'; //this is not great, and you should put each one on a new line instead:

let user = 'John';
let age = 25;
let message = 'Hello'; 

// alternatively, you could format like:

let user = 'John';
    age = 25;
    message = 'Hello';

// var and let almost the same, but var is more old school. There are some key differences whcih aren't super important yet

// you can change variables whenever you want

let message;
message = 'Hello!';
message = 'World!'; // value changed, old value removed
// However you should not declare variables more than once, for example:
let message = 'Hello!'
let message = 'World!'
// instead refer to repeated declaration without 'let'

alert(message); // 'World!'

// can declare two variables and copy data from one into the other:

let hello = 'Hello world!';
let message;
message = hello; //why not combine this inito line 35 like let message = hello;?
// now both variables hold the same data
alert(hello); // Hello world!
alert(message); // Hello world!

// Variables

// variables can contain letters, digits, $, and _
// first character must not be a digit
// case sensitive

//   to declare a constant (unchanging) variable, use const instead of let

const myBirthday = '07.19.1991'

// constants cannot be reassigned
// use all-caps words for values that are hard to remember
const COLOR_RED = '#006633'
// COLOR_RED is eassier to remember, type, and recognize than typing #006633 every time


