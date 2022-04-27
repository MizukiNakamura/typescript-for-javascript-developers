export {};

const getBmi = (height: number, weight: number): number => {
	return (weight / (height * height)) * 10000;
};
console.log(getBmi(174, 56));

