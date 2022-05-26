import { MajorColorNames, MinorColorNames } from './colorNames.js';
import ColorPair from './ColorPair.js';

/** This function receives color number and returns the color pair. Pair number should not be less than 1 and greater than multiple of major indexes and minor indexes
 * @param pairNumber
 * @returns Color Pair
 */
function getColorFromPairNumber(pairNumber) {
	let minorSize = MajorColorNames.length;
	let majorSize = MinorColorNames.length;
	if (pairNumber < 1 || pairNumber > minorSize * majorSize) {
		throw `Argument PairNumber:${pairNumber} is outside the allowed range`;
	}
	let zeroBasedPairNumber = pairNumber - 1;
	let majorIndex = parseInt(zeroBasedPairNumber / minorSize);
	let minorIndex = parseInt(zeroBasedPairNumber % minorSize);
	let pair = new ColorPair(
		MajorColorNames[majorIndex],
		MinorColorNames[minorIndex]
	);
	return pair;
}
/** This function receives color pair and returns the color number for identify wires in telecommunications cables
 * @param Color Pair
 * @returns pairNumber
 */
function getPairNumberFromColor(pair) {
	let majorIndex = findColorMatchingIndex(MajorColorNames, pair.majorColor);
	let minorIndex = findColorMatchingIndex(MinorColorNames, pair.minorColor);
	if (majorIndex == -1 || minorIndex == -1) {
		throw `Unknown Colors:${pair.toString()}`;
	}
	return majorIndex * MinorColorNames.length + (minorIndex + 1);
}
function findColorMatchingIndex(colorNames, color) {
	let startIndex = -1;
	for (let i = 0; i < colorNames.length; i++) {
		if (colorNames[i] == color) {
			startIndex = i;
			break;
		}
	}
	return startIndex;
}
export { getColorFromPairNumber, getPairNumberFromColor };
