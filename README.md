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
