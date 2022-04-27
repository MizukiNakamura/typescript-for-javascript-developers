export {};

const getLargerNum: (num1: number, num2: number) => number = (
	num1: number,
	num2: number
): number => {
	const largerNum = num1 >= num2 ? num1 : num2;
	return largerNum;
};

const getMaxNum: (...numbers: number[]) => number = (
	...numbers: number[]
): number => {
	const maxNum = numbers.reduce(getLargerNum);
	return maxNum;
};

console.log(getMaxNum(2, 4, 19, 3, 22, 2, 22));

//

const doubledNum = (value: number): number => {
	return value * 2;
};
