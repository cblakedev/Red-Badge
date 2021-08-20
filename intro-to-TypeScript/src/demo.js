
//Classes are a template to create data

//Basic Class
class Animal {
    //Class properties
    //Constructor function
    constructor(name, legs) {
        this.name = name;
        this.legs = legs;
    }
    //Methods
    speak(){
        console.log(this.name);
    }
}

//Create an instance of class
let cat = new Animal('Kai', 4);
let dog = new Animal('Ghost', 4);
// console.log(cat);
// console.log(dog);
// cat.speak();

class Tiger extends Animal {
    #password = 42 // "#" sets password to private and can only be called by the getter
    constructor(name, legs, isDanger){
        super(name, legs)//properties inherited from the parent class
        this.isDanger = isDanger
    }
        //getters -- allows us to hide/show data depending on what needs to be implemented
        get password (){
            return this.#password
        }

        set password (n){
            if(typeof n === 'number')
             this.#password = n 
        }
    
}

let tiger = new Tiger('bengal', 4, true)
console.log(tiger)
tiger.password = 'Hello';
console.log(tiger.password);
