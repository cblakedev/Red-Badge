"use strict";
//interfaces
class Mail {
    constructor(data) {
        this.data = data;
    }
    send() {
        let returnValue = 'success';
        return returnValue;
    }
}
class Email {
    constructor(data) {
        this.data = data;
    }
    send() {
        let returnValue = 'success';
        return returnValue;
    }
    toString() {
        return JSON.stringify(this);
    }
    myMessage() {
        let messageValue = 'success';
        return messageValue;
    }
}
const message = [
    new Mail("Hello from mail"),
    new Email("Hello from email")
];
// messages.forEach(m => m.send())
// let email = new Mail();
// email.send()
