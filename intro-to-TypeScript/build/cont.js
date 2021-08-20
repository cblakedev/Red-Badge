"use strict";
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Yellow"] = 2] = "Yellow"; //2
})(Color || (Color = {}));
console.log(Color.Red);
function addTwoThings(x, y) {
    return x + y;
}
let z = addTwoThings('2', '5');
//Guard .. Type Guards
if (typeof z == 'string') {
    z.toUpperCase();
}
//Array<any> supports [1, 2, 3, [1, 2], 'string']
let myObj; //it is best pratice to specify the type of data
myObj = [1, 2, 3]; //an array
// myObj = {fname: 'Justin'} //a string
if (myObj instanceof Array) {
    console.log(myObj);
}
else {
    let values = Object.values(myObj);
    console.log(values);
}
