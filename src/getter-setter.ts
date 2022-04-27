export {};

// ＊ owner
//    ＊ 所有者
//    ＊ 初期化時に設定できる
//    ＊ 途中で変更できない
//    ＊ 参照できる

// ＊ secretNumber
//    ＊ 個人番号
//    ＊ 初期化時に設定できる
//    ＊ 途中で変更できる
//    ＊ 参照できない

class MyNumberCard {
	constructor(private _owner: string, private _secretNumber: number) {}

	get owner() {
		return this._owner;
	}

	set secretNumber(secretNumber: number) {
		this._secretNumber = secretNumber;
	}
}

const card = new MyNumberCard('mizuki', 1127);
card.secretNumber = 1998;
console.log(card);
