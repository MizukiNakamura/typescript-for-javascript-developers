export {};

type Pitcher = {
	speed: number;
};
type Batter = {
	hittingAverage: number;
};

const Mizuki: Pitcher = { speed: 168 };
const Nakamura: Batter = { hittingAverage: 0.352 };

type PitcherBatter = Pitcher & Batter;
const MizukiNakamura: PitcherBatter = { speed: 168, hittingAverage: 0.352 };
