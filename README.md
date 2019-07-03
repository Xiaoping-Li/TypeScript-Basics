# TypeScript-Basics
This Repo contains basics knowledge I learned from TypeScript

## Set-up
1. npm install -g typescript
2. React projects with TypeScript: create-react-app <app-name> --typescript

## Commands
* tsc -help
* tsc <name-of-file.ts>: Compile `.ts` file to `.js` file with default name <name-of-file> 
* tsc <name-of-file.ts> --out <Assign-new-name.js>: Compile to different name
* tsc <name-of-file.ts> --out <Assign-new-name.js> --watch: The JS file will monitor TS file's changes automatically

**Notes:** TypeScript compiler has an option of specifying a configuration file which contains all these arguments and then we could just run the compiler without any arguments.
  * Create a JSON file at the root of the project
  * Only type `tsc` in terminal, then the compiler will look into the JSON file and get all the info it needs to run.

  --------OR--------
  * Run `tsc --init`, typeScript compiler will create such a JSON file for you `tsconfig.json`
  * There are some defaults there, also we could modify it.



## ts .vs js
1. `js` doesn't have the concept of **type**. For example, 
```
var a;
a = 10;
a = 'hello';
a = {};
a = true;
```
The above code has no problems with `JS`, `a` could be any type. But in `ts`, if we give varaible a type, then this varaible sticks to that type, and if you want to assgin other type of value to the varaible, then **error** will be trown by `ts`.
```
var a: number;
a = 10; ---> Fine, 10 is number
a = true: ---> Error: Type 'true` is not assignable to type 'number'.
```
**Notes:** All primitive JavaScript types are valid TypeScript types!

2. Define an array with specific type
```
var Array: number[];
myArray = [];
myArray = [1, 2];
myArray = 1; ---> Complier Complain: should be an 'Array'
myArray = ['1']; ---> Complier Complain: should be type 'Number'
myArray.push(1);
myArray.push('1'); ---> Complier Complain: should be type 'Number' 
```

3. `typle`
```
var myArr: [number, boolean];
myArr = [2, true]; ---> Fine
myArr = [1]; ---> Complier Complain: need to type of data;
```
**Notes:** For `array declaration`, we specify the data type before the `[]`. For `tuple declaration`, the data types are specified like elements inside the `[]`.

4. `function argument counts`
```
function add(a: number, b: number) {
  return a + b;
}

function add(a: number, b: number, c?) {
  return a + b;
} ---> The 3rd argument is optional

// Set Default value
function add(a: number, b: number, c = 0) {
  return a + b + c;
}

function add(a: number, b: number, c = 0, d?: number) {
  return a + b + c + d;
}
```
**Notes:** 
  * The number of arguments to functions in JS do not have to match the function signature. You can pass in more or less arguments than what's declared in the function. But by default, TypeScript enforces that the argument counts in function calls exactly match function signature. 
  * You could have multiple options, but they must be in the end.
  * You could set `default value` for optional argument.
  * Argument d is a number and is optional. So it doesn't need to be passed. But if it is passed, it should be a number.

5. `function return type`
```
function add(a: number, b: number): number {
  return a + b;
}
```

6. `Implicit typing with variable declarations`
```
var a = 10;

a = true; ---> Complier Complain: a needs to be a number;
```
**Notes:** If you don't explicitly declare a variable type, but you assign a value with the declaration, TypeScript implicitly assumes the type from the value being assigned!

7. `Implicit typing with function calls`
```
function greet() {
  return 'Good morning';
}

var greeting = greet(); ---> Then the greeting's type is 'string'

var greeting;
greeting = greet(); ---> Then the greeting's type is 'any'
```
**Notes:** If the function's return value's type is obvisouly, then the varaible which has been assigned the return value from this function, will implicitly get the type of the return value from the function. (**Note:** the variable's declaration and define should be in the same line).

8. `The any type, Union type`
```
// any type
var a: any;
a = 10; ---> No complain, fine
a = true; ---> No complain, fine

// Union type
var a: number | boolean;
a = 10; ---> No complain, fine
a = true; ---> No complain, fine
a = 'hello'; Complier Complain: a needs to be a number or boolean;
```
**Notes:**
  * Type `any` lets you completely bypass TypeScript's type checking for a given variable. Using scenario: If you have a variable which has unclear types, and you need to complile to JS.
  * Type `union` lets you declare multiple type possibilities for a variable.

9. `TypeScript Class`
```
class Person {
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

var p = new Person('first', 'last'); ---> should have two string type values here.
```

10. `Interfaces and Duck Typing`
```
interface Person {
  firstName: string;
  lastName: string;
  getFullName(): string;
}

class Foo implments Person {
  firstName: string;
  lastName: string;
  getFullName(): string {
    return this.firstName + this.lastName;
  }
}

let p: Person = new Foo();

let obj = {
  firstName: 'first',
  lastName: 'last',
  age: 10,
  getFullName: () => 'first last'
}; ---> Doesn't look like any class that implement from interfact, but looks like one. TypeScript allows you to treat this as an instance of person, and assign it to person instance.

p = obj; ---> But, p could not access 'age'

```
**Notes:**
  * `Interfaces` let you define the structure without defining the implementation. And in the `class` that implements the interface has to provide everything that the interface is declaring. So the declarations in the `interdaces` will enforce every class that implments it to actually follow and implement.

11. `Class Member Visibility`
```
class Person {
  // shortcut to define constructor with private or public member variables
  constructor(private firstName: string, private lastName: string) {}

  greet() {
    console.log('Hey there!');
  }

  getFullName() {
    return this.firstName + this.lastName;
  }
}

class Programmer extends Person {
  greet() {
    console.log('Hey world!');
  }

  greetLikeNormalPeople() {
    super.greet();
  }
}

var aProgrammer: Person = new Programmer();
aProgrammer.greet(); ---> 'Hey world!' Still an instance of Programmer;
aProgrammer.firstName; ---> Compiler complain: 'firstName' is 'private'
aProgrammer.getFullName(); ---> Fine
```
**Notes:**
  * `Member visibility`: `public(default), private, protected`
  * `private` works for both variables and methods.
  * `protected`: could not see outside of the class

12. `Readonly Modifier`
```
class Person {
  readonly name;

  constructor(name: string) {
    this.name = name;
  }
}

// Shortcut of above class
class Person {
  constructor(readonly name: string) {}
}

var p = new Person('some name');
console.log(p.name); ---> Fine. Could access the member
p.name = 'other'; ---> Not Fine. Could not been modified
```
**Notes:** There are two places that you could assign value to `readonly` member
  * When you declare the member. For example, `readonly name = 'first last'`
  * In the `constructor`, like the above code. 

13. `Enums`
```
enum DaysOfTheWeek {
  SUN, MON, TUE, WED, THU, FRI, SAT
}    ---> Creating a type with enumerations 

let day: DaysOfTheWeek;
day = DaysOfTheWeek.MON;
```

14. `Generics`
```
function echo<T>(arg: T): T {
  return arg;
}
```
**Notes:** `Generics` lets you parameterize types. `Generics` lets you create 3 placeholders for types that you can use in multiple places in your function declaration in this case. TypeScript doesn't really do anything with this thing as far as checking is concerned when you create an input argument and assign it to a placeholder to a generic that doesn't do any type checking, but what it does is to make a `note` of whatever you have passed in over the argument and then when the function completes execution, since it's also marked as a return type of `T`, it makes sure that whatever this function is returning is the same as the type that was passed in.
```
class Person {
  constructor(public firstName: string, public lastName: string) {}
}

class Admin extends Person {}

class Manager extends Person {}

let admin = new Admin('a', 'a');
let manager = new Manager('a', 'a');

function personEcho<T extends Person>(person: T): T {
  return person;
}

var foo = personEcho(admin); ---> With type of 'Admin'
var bar = personEcho(manager);  ---> With type of 'Manager'
```
**Note:** The `generics` above has `restriction` as `extends Person`, this placeholder applies only to classes that extend person.

15. `Modules`
**Notes:** `Modules` lets you break your source code into multiple files via building a large app with parts. `export`, `import`

16. `Create an npm project`
https://www.youtube.com/watch?v=90b9MgQvwUY&list=PLqq-6Pq4lTTanfgsbnFzfWUhhAz3tIezU&index=23



