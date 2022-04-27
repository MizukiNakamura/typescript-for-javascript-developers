export {};

type Menu = 'dumbbellPress' | 'sideRaise' | 'inclineDumbbellCurl';

type Detail = { name: string; weight: number; reps: number; set: number };

const Training: Record<Menu, Detail> = {
	dumbbellPress: {
		name: 'ダンベルプレス',
		weight: 5,
		reps: 10,
		set: 3,
	},
	sideRaise: {
		name: 'サイドレイズ',
		weight: 7.5,
		reps: 12,
		set: 2,
	},
	inclineDumbbellCurl: {
		name: 'インクラインダンベルカール',
		weight: 5,
		reps: 15,
		set: 1,
	},
};
