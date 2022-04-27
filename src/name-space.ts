export {};

namespace Japanese {
	export class Person {
		constructor(public name: string) {}
	}

	export namespace Tokyo {
		export class Person {
			constructor(public name: string) {}
		}
	}
}

namespace English {
	export class Person {
		constructor(
			public firstName: string,
			public middleName: string,
			public lastName: string
		) {}
	}
}

const me = new Japanese.Person('Mizuki');

const meInTokyo = new Japanese.Tokyo.Person('MizukiInTokyo');

const Michael = new English.Person('Michael', 'Joseph', 'Jackson');

console.log(me);

console.log(meInTokyo)

console.log(Michael);
