export {};

class Person {
	constructor(public name: string, public age: number) {}
}

const Taro = new Person('Taro', 3);
console.log(Taro);

type PersonType = typeof Person;
type Profile = ConstructorParameters<PersonType>;

const profile: Profile = ['mizuki', 23];
const mizuki = new Person(...profile);

console.log(mizuki)
