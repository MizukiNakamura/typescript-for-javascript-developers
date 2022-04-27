export {};

class Wizard {}

class Monk {}

class Taro extends Wizard {}

interface Kenja {
	shine(): void;
}

interface Senshi {
	gomi(): void;
}

class Jiro implements Kenja, Senshi {
	shine(): void {
		console.log('');
	}
	gomi(): void {
		console.log('');
	}
}

const jiro = new Jiro();

jiro.shine();
jiro.gomi();
