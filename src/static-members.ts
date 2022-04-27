export {};

class Me {
	static isProgrammer: boolean = true;
	static firstName: string = 'Mizuki';
	static lastName: string = 'Nakamura';

	static work(): string {
		// return 'こんにちは！';
		return `こんにちは！ 私は${this.firstName} ${this.lastName}です。`;
	}
}

const me = new Me();

console.log(Me.work());
