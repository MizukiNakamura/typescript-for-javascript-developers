export {};

type Profile = {
	name: string;
	age: number;
};

// type PartialType = Partial<Profile>;

type Optional<T> = { [P in keyof T]?: T[P] };

type PartialType = Optional<Profile>;
