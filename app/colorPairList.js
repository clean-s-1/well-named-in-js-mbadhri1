/**
 * Gets major color list amd ,inor color list as input and list the color pair with the numbers which is used to identify wires in telecommunications cables
 * @param {*} majorColorList
 * @param {*} minorColorList
 */
export default function listColorPairs(majorColorList, minorColorList) {
	if (majorColorList) {
		majorColorList.forEach((majorColor, majorColorIndex) => {
			if (minorColorList) {
				minorColorList.forEach((minorColor, minorColorIndex) => {
					console.log(
						`Pair number for major color ${majorColor} and minor color ${minorColor} is ${
							majorColorIndex * minorColorList.length + minorColorIndex + 1
						} `
					);
				});
			}
		});
	}
}
