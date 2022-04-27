export {};

type Profile = {
	name: string;
	age: number;
};

const me: Profile = {
	name: 'mizuki',
	age: 23,
};
me.age++;

console.log(me.age);

type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
	name: 'nakamura',
	age: 70,
};

// friend.age++

type Yomitori<T> = { readonly [P in keyof T]: T[P] };

type ReadProfile = Yomitori<Profile>;

const read: ReadProfile = {
	name: 'aaa',
	age: 44,
};
