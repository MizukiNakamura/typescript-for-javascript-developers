export {};

// const echo = (arg: number): number => arg;
//
// const echo = (arg: string): string => arg;

const echo = <T>(arg: T): T => {
	return arg;
};

// console.log(echo<number>(100));
// console.log(echo<string>('foo'));
// console.log(echo<boolean>(false));

class Mirror<T> {
	constructor(public value: T) {}
	echo(): T {
		return this.value;
	}
}

console.log(new Mirror<string>('bar').echo());
console.log(new Mirror<boolean>(false).echo());
