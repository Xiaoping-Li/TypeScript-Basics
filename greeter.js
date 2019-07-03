var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
    }
    return Student;
}());
var greeter = function (user) {
    return "hello, " + user.firstName + " " + user.lastName;
};
var user = new Student('leela', 'M.', 'lee');
console.log(greeter(user));
