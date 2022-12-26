<script>
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	export let char;
	export let i;

	let delay = 0.5 + i / 10;

	let initWeight = 400;
	let fontWeight = tweened(initWeight, { duration: 200, easing: cubicOut });

	let animationDelayStyle = 'animation-delay:' + delay + 's';
	let marginStyle = 'margin-left:' + (i == 0 ? '0em' : '-0.02em');

	$: fontWeightStyle = 'font-weight:' + $fontWeight;

	//full style joined by ;
	$: style = [animationDelayStyle, marginStyle, fontWeightStyle].join(';');
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<span
	aria-hidden="true"
	class="rosanita text-7xl md:text-8xl text-red-500"
	{style}
	on:mouseover={() => {
		$fontWeight == initWeight ? fontWeight.set(800) : fontWeight.set(initWeight);
	}}
>
	{char}
</span>

<style>
	span {
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
