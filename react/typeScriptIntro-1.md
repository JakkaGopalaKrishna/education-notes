# TYPESCRIPT

> javaScript is part of typeScript

## benefits
- static typing
- code completion
- refactoring
- shorthand notations

statically-type
dynamically-type

## drawbacks
- compilation
- discipline in coding

.ts -> compiler -> .js
transpilation

## install typescript
sudo npm i -g typescript

tsc -v

## Types
- the any type
- Array
- tuples
- enums
- functions
- objects
  
## Built-In Types (JavaScript)
- Number
- String
- boolean
- null
- undefine
- object
- 
## Built-In Types (TypeScript)
- any
- unknown
- never
- enum
- tuple

## data Types
```Typescript
let sales: number = 123_456_789;
let course: string = "TypeScript";
let is_published:boolean = true;

// let sales = 123_456_789; //number
// let course = "TypeScript"; //string
// let is_published = true; //boolean
// if we remove their type also it by default type is based on their value.
```


## Any type

```Typescript
let value; // this type is any
//it not a good practice to do it, because for that `value` we can assign any type of value
value = 1;
value = 'a';
```

## noImplicitAny
The noImplicitAny compiler option in TypeScript prevents the compiler from defaulting to the any type when it cannot automatically infer a type. This flag is a key part of TypeScript's strict mode and is highly recommended for maintaining type safety in professional projects. 

| Scenario            | Without `noImplicitAny`                            | With `noImplicitAny: true`                              |
| ------------------- | -------------------------------------------------- | ------------------------------------------------------- |
| Function Parameters | `function log(x) { ... }` is allowed; `x` is `any` | ❌ Error: *Parameter 'x' implicitly has an 'any' type*   |
| Untyped Variables   | `let value;` is allowed and remains `any`          | ⚠️ Error/warning if type cannot be inferred or narrowed |

```Typescript


function render(document){
    console.log(document);
}

function render(document : any){
    console.log(document);
}

// "noImplicitAny": false,

{
  "compilerOptions": {
    "noImplicitAny": true
  }
}
```


## functions
### syntax
```TypeScript
function FunctionName(variable: dataType): returnType{
    //block Code to execute
    //return value
}
```

## Object

```Typescript
let employee1 = { id: 1 };
// employee1.name= "jgk";    //It is a error

let employee2: {
  id: number;
  name: string;
  age?: number; //It is optional
  readonly salary: number; //We can't change this value.
  retire: (date: Date) => void; //It is function return void
} = {
  id: 1,
  name: "jgk",
  salary: 14999,
  retire: (date: Date) => {
    console.log(date);
  },
}; //we declare or not declare the `age` value our wish

employee2.id = 2; //no error
// employee2.salary = 12345345 //Error
```

## Different types =>
- Type aliases
- unions and intersections
- type narrowing
- Nullable types
- the unknown type
- the never type

### Type aliases

- DRY - Don't repeat yourself
- reuseable of code

```Typescript
type Employee{
  id: number;
  name: string;
  age?: number; //It is optional
  readonly salary: number; //We can't change this value.
  retire: (date: Date) => void; //It is function return void
}
let employee3: Employee = {
  id: 1,
  name: "jgk",
  salary: 14999,
  retire: (date: Date) => {
    console.log(date);
  },
}; //we declare or not declare the `age` value our wish

```

### unions Type

```Typescript
function kgToLbs(weight:number | string):number{
    //Narrowing
    if(typeof weight === 'number' ){
        return weight*2.2
    }else{
        return parseInt(weight)*2.2
    }
}
kgToLbs(10);
kgToLbs('10kg');
```





```Typescript
```


key words need to learn
as 
interface
inter
extends
record
13) in catch(e:Q?) we can;t do anything
14) type tests = [
  Expect<Equal<User, { id: string; firstName: string; lastName: string }>>,
  Expect<Equal<Post, { id: string; title: string; body: string }>>,
  Expect<Equal<Comment, { id: string; comment: string }>>,
];
unknown
Omit
Pick