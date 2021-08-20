
//count is of "type" number
let count = 5
count = 5;
// count = "string"

//Const type is a literal
const fname = 'Justin'

//type any can be any type of data(string, number i.e). This will allow specificity of data type
let testing: number;

testing = 5;
// testing = 'Chris'


//declares a pattern
type Student = {
    fname: string
    lname: string
    grade: number
}

// Declaring a variable
let student : Student = {
    fname: "Andy",
    lname: "Anderson",
    grade: 12
}

//A function using the student variable
function toString(student: Student) {
    return JSON.stringify(student)
}

// console.log(toString(student));
// console.log(fname);


function add(x: number, y: number): void { //: what type of data will this function return
    let results = x + y;
}

//Union
type Status = 'success' | 'failure' // "|" means "or"
type ServerResponse = Student | Error


//Tuple
function sendMessage(): [status: string, response: ServerResponse] {
    return ["success", {
        fname: "Chris",
        lname: "Blake",
        grade: 12
    }]
}

const [statusResult, data] = sendMessage()
if (statusResult == 'success')
    console.log(data)

  
