"use strict";
//count is of "type" number
let count = 5;
count = 5;
// count = "string"
//Const type is a literal
const fname = 'Justin';
//type any can be any type of data(string, number i.e). This will allow specificity of data type
let testing;
testing = 5;
// Declaring a variable
let student = {
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
    let results = x + y;
}
//Tuple
function sendMessage() {
    return ["success", {
            fname: "Chris",
            lname: "Blake",
            grade: 12
        }];
}
const [statusResult, data] = sendMessage();
if (statusResult == 'success')
    console.log(data);
