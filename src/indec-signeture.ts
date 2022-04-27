export {};

interface Profile {
	[key: string]: string | boolean;
}

let profile: Profile = {};

profile.name = 'mizuki';
profile.isUnder20