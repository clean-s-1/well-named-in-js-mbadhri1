import { getColorFromPairNumber, getPairNumberFromColor } from './colorCoder.js';
import { MajorColorNames, MinorColorNames } from './colorNames.js';
import ColorPair from './ColorPair.js';
import listColorPairs from './colorPairList.js';
/**
 * This function test the matching of color pair & nuber for validations
 */
function test() {
	let pairNumber = 4;
	let testPair1 = getColorFromPairNumber(pairNumber);
	console.log(`[In]Pair Number: ${pairNumber},[Out] Colors:${testPair1}`);
	console.assert(testPair1.majorColor == 'WHITE', 'Error Message : majorColor should not be be WHITE for Pair number 4');
	console.assert(testPair1.minorColor == 'BROWN', 'Error Message : minorColor should not be be BROWN for Pair number 4');

	pairNumber = 5;
	testPair1 = getColorFromPairNumber(pairNumber);
	console.log(`[In]Pair Number: ${pairNumber},[Out] Colors:${testPair1}`);
	console.assert(testPair1.majorColor == 'WHITE', 'Error Message : majorColor should not be be WHITE for Pair number 5');
	console.assert(testPair1.minorColor == 'SLATEGRAY', 'Error Message : minorColor should not be be SLATEGRAY for Pair number 5');

	pairNumber = 23;
	testPair1 = getColorFromPairNumber(pairNumber);
	console.log(`[In]Pair Number: ${pairNumber},[Out] Colors:${testPair1}`);
	console.assert(testPair1.majorColor == 'RED', 'Error Message : majorColor should not be be Red for Pair number 23');
	console.assert(testPair1.minorColor == 'GREEN', 'Error Message : minorColor should not be be Green for Pair number 23');

	let testPair2 = new ColorPair('YELLOW', 'GREEN');
	pairNumber = getPairNumberFromColor(testPair2);
	console.log(`[In]Colors: ${testPair2}, [Out] PairNumber: ${pairNumber}`);
	console.assert(pairNumber == 18, {
		'Error Message': `Pair Number should not be 18 for color YELLOW and GREEN`,
	});

	testPair2 = new ColorPair('RED', 'BLUE');
	pairNumber = getPairNumberFromColor(testPair2);
	console.log(`[In]Colors: ${testPair2}, [Out] PairNumber: ${pairNumber}`);
	console.assert(pairNumber == 6, {
		'Error Message': `Pair Number should not be 6 for color Red and Blue`,
	});
}
test();
listColorPairs(MajorColorNames, MinorColorNames);
