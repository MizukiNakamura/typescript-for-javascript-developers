export {};

// 必ず例外が起こる関数
const error = (message: string): never => {
	throw new Error(message);
};

try {
	const result = error('test');
	console.log(result);
} catch (error) {
	console.log({ error });
}

const foo: void = undefined;
// const bar: never = undefined;
const baz: never = error('');
