

function Person(firstName, lastName, emailAddress) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.emailAddress = emailAddress;
  }
  

const person1 = new Person('Mongy', 'Dlanjwa', 'mongidlanjwa@gmail.com');
const person2 = new Person('Ongy', 'Jane', 'ongyjane@gmail.com');
const person3 = new Person('Alu', 'Kane', 'alukane@gmail.com');

console.log(person1);
console.log(person2);
console.log(person3);

module.exports = Person;