"use strict";
/*
What is JSON

Object
Array
Number
String

        "Literal Values"

false
true
null
*/
//Challenge
/* Modify the 3 type JSON* values to parse json and fail otherwise.
Use the isJSON function to test */
function isJSON(j) { }
let testing1 = { fname: "Justin", data: [1, 2, 3] };
let testing2 = "Test string";
let testing3 = [1, 2, "Hello", { fname: "Justin" }];
isJSON(testing1);
isJSON(testing2);
isJSON(testing3);
let test2 = { fname: "Justin", data: [1, 2, 3] };
let test3 = { fname: "Justin", data: [1, 2, 3] };
// @ts-expect-error
isJSON(class Test {
});
// @ts-expect-error
isJSON(isJSON);
