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


