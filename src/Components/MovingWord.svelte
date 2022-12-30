<script>
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	export let word;

	let initWeight = 400;
	let fontWeight = tweened(initWeight, { duration: 200, easing: cubicOut });
	let letterSpacing = tweened(1, { duration: 200, easing: cubicOut });
    let blurAmount = tweened(1, {duration:200, easing:cubicOut});
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<button
	style="letter-spacing:{$letterSpacing}px;font-weight:{$fontWeight};filter:blur({$blurAmount}px);"
	on:mouseover={() => {
        letterSpacing.set(3)
        fontWeight.set(800)
        blurAmount.set(0)
	}}
	on:mouseleave={() => {
        letterSpacing.set(1)
        fontWeight.set(500)
        blurAmount.set(1)
	}}
	on:click={() => {
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
