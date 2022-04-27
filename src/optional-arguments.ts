export {};

const getBmi: (
	height: number,
	weight: number,
	printable?: boolean
) => number = (height: number, weight: number, printable?: boolean): number => {
	const bmi = (weight / (height * height)) * 10000;
	const roundedBmi = Math.round(bmi * 10) / 10;
	if (printable) {
		console.log(roundedBmi);
	}
	return roundedBmi;
};

getBmi(174, 56, true);　
