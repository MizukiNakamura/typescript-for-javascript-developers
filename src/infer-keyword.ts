export {};

const debugProfile = (name: string, age: number) => {
	console.log({ name, age });
};

debugProfile('mizuki', 23);

type Profile = Parameters<typeof debugProfile>;

const me:Profile = ['mizuki', 23]