export {};

class Person {
	firstName: string;
	lastName: string;
	private age: number;
	protected nationality: string;

	constructor(
		firstName: string,
		lastName: string,
		age: number,
		nationality: string
	) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.nationality = nationality;
	}

	introduction(): string {
		return `私の名前は${this.firstName} ${this.lastName}です。年齢は${this.age}歳です。`;
	}
}

class Android extends Person {
	constructor(
		firstName: string,
		lastName: string,
		age: number,
		nationality: string
	) {
		super(firstName, lastName, age, nationality);
	}
  introduction(): string {
    return `私の名前は${this.firstName} ${this.lastName}です。国籍は${this.nationality}です。`;
  }
}

const mizuki = new Person('Mizuki', 'Nakamura', 23, 'Japan');
const Mizuki = new Android('Mizuki', 'Nakamura', 23, 'Japan')

console.log(mizuki);
console.log(Mizuki.introduction())
