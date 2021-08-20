// type this allows us to add to the type system
type Year = string | number

enum Color {
    'Red', //0
    'Blue', //1
    'Yellow' //2
}

console.log(Color.Red)

type Car = {
    year: Year;
    color: Color
}

type addInput = number | string;

function addTwoThings(x: any, y: any): addInput {
    return x + y;
}

let z = addTwoThings('2', '5')
//Guard .. Type Guards
if (typeof z == 'string') {
    z.toUpperCase()
}

//Array<any> supports [1, 2, 3, [1, 2], 'string']
let myObj: Array<any> | Object //it is best pratice to specify the type of data
myObj = [1, 2, 3] //an array
// myObj = {fname: 'Justin'} //a string

if(myObj instanceof Array) {
    console.log(myObj)
} else {
    let values = Object.values(myObj)
    console.log(values)
}