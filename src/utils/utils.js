export const gaussian = (mean, sigma) => ({
	mean,
	sigma,
	a: 1 / Math.sqrt(2 * Math.PI)
});

export const getValues = (obj, valueX) =>
	(obj.a / obj.sigma) * Math.E ** (-0.5 * ((valueX - obj.mean) / obj.sigma) ** 2);

export const generateValues = (obj, start, end) => {
	let allValues = [];
	const step = (Math.abs(start) + Math.abs(end)) / 10;
	for (let i = start; i < end; i += step) {
		allValues.push(getValues(obj, i));
	}
	return allValues;
};

export function decayingWeights(hoveredChar, total, step) {
	let weightValues = Array(total).fill(0);
	for (let i = 1; i < step; i++) {
		let frontValue = clamp(hoveredChar + i, 0, total);
		let backValue = clamp(hoveredChar - i, 0, total);

		weightValues[frontValue] = (step - i) / step;
		weightValues[backValue] = (step - i) / step;
	}
	weightValues[hoveredChar] = 1;
	return weightValues;
}

function clamp(num, min, max) {
	return num <= min ? min : num >= max ? max : num;
}
