# TypeScript-Basics
This Repo contains basics knowledge I learned from TypeScript

## Set-up
1. npm install -g typescript

## Compile 
Compile `.ts` file to `.js` file:
`tsc <name-of-tsfile.ts>`

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

8. `The **any** type, **Union** type`
```
var a: any;
a = 10; ---> No complain, fine
a = true; ---> No complain, fine
```
**Notes:**
  * Type `any` tells typescript to `ignore type checking`;
  * Using scenario: If you have a variable which has multiple types, and you need to complile to JS.

