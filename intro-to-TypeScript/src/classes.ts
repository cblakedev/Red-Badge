//interfaces

interface Point { //interfaces can be called twice 
    calc(): Number
}

interface Point {
    something(): Number
}

// with interfaces you can add them to classes with the keyword "implements"

type message = 'success' | 'failure' //custom type
interface Send {
    data: string
    send(): message
}

interface SendMail {
    myMessage(): string
}

class Mail implements Send {
    data
    constructor(data: string){
        this.data = data
    }
    send(){
        let returnValue: message = 'success'
        return returnValue;
    }
}

class Email implements Send, SendMail { //classes can use multiple interfaces by using a comma
    data
    constructor(data: string){
        this.data = data
    }
    send(): message{
        let returnValue: message = 'success'
        return returnValue;
    }
    toString(): string{
        return JSON.stringify(this)
    }
    myMessage(): string{
        let messageValue: message = 'success'
        return messageValue;
    }
}


const message = [
    new Mail("Hello from mail"), 
    new Email("Hello from email")
]

// messages.forEach(m => m.send())
// let email = new Mail();
// email.send()


