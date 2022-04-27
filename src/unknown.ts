export {};

const func = () => 23;

const numberAny: any = func();
const numberUnknown: unknown = func();

const sumAny = numberAny + 10;
// const sumUnknown = numberUnknown + 10;
if (typeof numberUnknown === 'number') {
	console.log(typeof numberUnknown);
}
