<script>
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { decayingWeights } from '../utils/utils';

	export let char;
	export let i;
	export let total;

	// this will bind to the whole array of weights
	export let value;

	let hoveredChar;

	$: weights = decayingWeights(hoveredChar, total, 9);
	$: console.log(weights);

	let delay = 0.5 + i / 10;

	let initWeight = 300;
	let fontWeight = tweened(initWeight, { duration: 100, easing: cubicOut });

	$: value = weights ? weights.map((w) => initWeight + w * 800) : Array(total).fill(300);

	let animationDelayStyle = 'animation-delay:' + delay + 's';
	let marginStyle = 'margin-left:' + (i == 0 ? '0em' : '-0.02em');

	// let fontWeightStyle = 'font-weight:' + $fontWeight;

	//full style joined by ;
	$: style = [animationDelayStyle, marginStyle].join(';');
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<span
	aria-hidden="true"
	class="text-7xl md:text-8xl text-red-500"
	on:mouseover={() => (hoveredChar = i)}
	{style}
>
	{char}
</span>

<style>
	span {
		--add: 0;
		position: relative;
		opacity: 0;
		animation: move-text 1.3s forwards;
	}

	@keyframes move-text {
		0% {
			bottom: -0.2em;
		}
		50% {
			bottom: 0.2em;
		}
		100% {
			bottom: 0;
			opacity: 1;
		}
	}
</style>
