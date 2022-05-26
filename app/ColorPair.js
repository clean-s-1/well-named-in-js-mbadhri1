export default class ColorPair {
	majorColor;
	minorColor;
	constructor(majorColor, minorColor) {
		this.majorColor = majorColor;
		this.minorColor = minorColor;
	}

	toString() {
		return `MajorColor:${this.majorColor},MinorColr:${this.minorColor}`;
	}
}
