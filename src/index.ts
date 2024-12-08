// let age: number = 20;

// //After Configuring the TypeScript compiler
// if (age < 50)
//     age += 10;
// console.log(age);
//------------------------------------------------------------------------------
/**
 * Next steps
 *
 * 1. The any type
 * 2. Arrays
 * 3. Tuples
 * 4. Enums
 * 5. Functions
 * 6. Objecs
 *
 */
// -----------------------------------------------------------------------------

// let sales: number = 123_456_789;
// let course = "TypeScript";
// let is_published: boolean = true;
// let level;

// level = 1;
// level = "a";

// function render(document) {             //either set a type annotation of the parameter-> : any || set noImplicitAny to false in tsconfig.json
//     console.log(document);
// }

// -----------------------------------------------------------------------------
//Array, array with type annotation, code editor specific features for type annotated arrays

// let numbers: number[] = [1, 2, '3'];    //type annotation even on array: error on 2nd index
// let numbers2 = [];  //any type, we should avoid: suggests the senior devs(suggest better grammar; if you are pin pointing)

// numbers.forEach(n => n.) //code editor already suggests methods on n, because it knows it is a number

// -----------------------------------------------------------------------------
//Tuples

// //1, 'Mosh'
// let user: [number, string] = [1, 'Mosh'];
// user.push(1);
// As suggested: Restrict your tuple to only two values, because anything more than that is gonna make your code a bit hard to understand
// Like keep value pairs
// -----------------------------------------------------------------------------

// Enums
// a list of related constants

/**
 * normal constants
 * const small = 1;
 * const medium = 2;
 * const large = 3;
 */
// PascalCase
// const enum Size { Small = 1, Medium, Large }; // by default, they are assigned with values starting from 0; Or you can explicitly assign them
// let mySize: Size = Size.Medium;
// console.log(mySize);

//------------------------------------------------------------------------------

// Functions

// function calculateTax(income: number, taxYear = 2022): number {

//     if (taxYear < 2022)
//         return income * 1.2;
//     // JavaScript bydefault returns undefined; and undefined here is not a number, the type annotation
//     // if you forget to return a value, use noImplicitReturns from tscconfig; not part of the strict setting
//     // noUnusedLocals: true | noUnusedParameters: true | noImplicitReturns: true
//     // parameter? => to make it optional
//     return income * 1.3;
// }
// calculateTax(10_000, 2022);
// -----------------------------------------------------------------------------

//Objects, type annotation in the object literal

// let employee: {
//     readonly id: number;  //readonly => cannot be changed
//     name: string;  //not making the name optional? here, rather putting the string, right at initialisation
//     retire: (date: Date) => void;  //function type annotation
// } = {
//     id: 1,
//     name: '',
//     retire: (date: Date) => {
//         console.log(date);
//     }
// };
// employee.name = 'Mosh';

// A better way to work with objects
// Type alias ; using this we can define a custom type
// type Employee = {
//     readonly id: number;
//     name: string;
//     retire: (date: Date) => void;
// }

// Union type; using this we can give a variable or a function more than one type

// function kgToLbs(weight: number | string): number {
//     // Narrowing the type
//     if (typeof weight === 'number')
//         return weight * 2.2;
//     else
//         return parseInt(weight) * 2.2;
// }

// kgToLbs(10);
// kgToLbs('10kg');
// -----------------------------------------------------------------------------

// Intersection type

// let weight: number & string; //for a better way to approch this

// type Draggable = {
//     drag: () => void;
// };

// type Resizable = {
//     resize: () => void;
// };

// type UIWidget = Draggable & Resizable; //intersection type

// let textBox: UIWidget = {
//     drag: () => { },
//     resize: () => { }
// };

// -----------------------------------------------------------------------------

//Literal Types> Literal(exact, specific)
// let quantity: 50 = 51; //got an error?
// let quantity: 50 | 100 = 100;
// type Quantity = 50 | 100;   // Literal type
// let quantity: Quantity = 100;

// type Metric = 'cm' | 'inch' | 'mm';

// -----------------------------------------------------------------------------

//Nullable types

// function greet(name: string | null | undefined) {
//     if (name)
//         console.log(name.toUpperCase());
//     else
//         console.log('Hola!');
// };

// greet(null); //<- in vanill js:ok.
// you can also turn the strictNullChecks true

// -----------------------------------------------------------------------------

// Optional Chaining

// type Customer = {
//     birthday?: Date;
// };

// function getCustomer(id: number): Customer | null {
//     return id === 0 ? null : { birthday: new Date() };
// };

// let customer = getCustomer(1);
// // Optional property access operator
// console.log(customer?.birthday?.getFullYear());


//Optional element access operator
// if (customers !== null && customers !== undefined)
//  customers?.[0]

// Optional call
// let log: any = (message: string) => { console.log(message) };
let log: any = null;
log?.('a'); // need to call it again