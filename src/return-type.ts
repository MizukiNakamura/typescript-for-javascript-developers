export {};

const add = (a: number, b: number): number => {
	return a + b;
};

console.log(add(2, 3));

type ReturnTypeFromAdd = ReturnType<typeof add>;
