class Student {
  fullName: string;
  constructor(public firstName: string, public middleInitial: string, public lastName: string) {
    this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
  }
}

interface Person {
  firstName: string,
  lastName: string,
}

var greeter = function(user: Person) {
  return "hello, " + user.firstName + " " + user.lastName;
}

var user = new Student('leela', 'M.', 'lee');

console.log(greeter(user));
