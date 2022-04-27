export {};

let foo: string;
let bar: 'string' = 'string';

// console.log(typeof foo);

foo = bar;

// console.log(typeof foo);

interface Animal {
	age: number;
	name: string;
}

class Person {
	constructor(public age: number, public name: string) {}
}

let me: Animal;

me = new Person(23,'mizuki');
