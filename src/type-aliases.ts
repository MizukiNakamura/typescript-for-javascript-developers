export {};

type Mojiretsu = string;

const message: Mojiretsu = 'こんにちは';

const example1: { name: string; age: number } = { name: 'mizuki', age: 23 };

type Profile = { name: string; age: number };

const example2: Profile = { name: 'mizuki', age: 23 };

const example3 = { name: 'mizuki', age: 23 };

type Profile2 = typeof example3