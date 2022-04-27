export {};

const getBmi: (height: number, weight: number) => number = (
	height: number,
	weight: number
): number => (weight / (height * height)) * 10000;

console.log(getBmi(174, 56));


