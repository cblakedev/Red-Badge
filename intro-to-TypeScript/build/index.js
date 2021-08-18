"use strict";
//count is of "type" number
var count = 5;
count = 5;
// count = "string"
//Const type is a literal
var fname = 'Justin';
//type any can be any type of data(string, number i.e). This will allow specificity of data type
var testing;
testing = 5;
// Declaring a variable
var student = {
    fname: "Andy",
    lname: "Anderson",
    grade: 12
};
//A function using the student variable
function toString(student) {
    return JSON.stringify(student);
}
// console.log(toString(student));
// console.log(fname);
function add(x, y) {
    var results = x + y;
}
//Tuple
function sendMessage() {
    return ["success", {
            fname: "Chris",
            lname: "Blake",
            grade: 12
        }];
}
var _a = sendMessage(), statusResult = _a[0], data = _a[1];
if (statusResult == 'success')
    console.log(data);
