export {};

class Animal {
	constructor(public name: string) {}

	run(): string {
		return 'I can run';
	}
}

class Lion extends Animal {
	public speed: number;

	constructor(public name: string, speed: number) {
		super(name);

		this.speed = speed;
	}

	run(): string {
		const parentMessage = super.run();
		return `${parentMessage} at ${this.speed}Km/h`;
	}
}

const animal = new Animal('動物');
const lion = new Lion('ライオン', 80);

console.log(animal.run());
console.log(lion.run());
