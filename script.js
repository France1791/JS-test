const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const age = document.getElementById('age');

class Person {
    constructor (firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age; 
    }
}

let button = document.getElementById('submit');

function submitButton(event){
    const newPerson = new Person(firstName.Value,lastName.value,age.value,);
    console.log(newPerson);
}

function addUser() {
    const person = new addUser;
    document.getElementById('note').innerHtml =
    `Hello, ${person.firstName.value} ${person.lastName.value}. You are ${person.age.value} years old. `
}

document.getElementById('submit').addEventListener(click, addUser)