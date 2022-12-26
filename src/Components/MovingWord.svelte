<script>
	import { tweened } from 'svelte/motion';
	import { cubicOut, quintOut } from 'svelte/easing';
	export let word;

	let initWeight = 200;
	let fontWeight = tweened(initWeight, { duration: 200, easing: quintOut, delay: 100 });

	let letterSpacing = tweened(1, { duration: 200, easing: cubicOut });
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<button
	style="letter-spacing:{$letterSpacing}px;font-weight:{$fontWeight};"
	on:mouseover={() => {
		if ($letterSpacing == 1) {
			letterSpacing.set(3);
		} else {
			letterSpacing.set(1);
		}

		if ($fontWeight == initWeight) {
			fontWeight.set(800);
		} else {
			fontWeight.set(initWeight);
		}
	}}>{word}</button
>
