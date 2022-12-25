<script>
	export let word;
	let toggle = false;
	$: letterSpacing = toggle ? 1 : 3;
	$: fontWeight = toggle ? 500 : 700;
	$: console.log(letterSpacing);
</script>

{#key word}
	<button
		style="letter-spacing:{letterSpacing}px;font-weight:{fontWeight}"
		on:mouseover={() => {
			console.log(toggle);
			toggle = !toggle;
		}}>{word}</button
	>
{/key}
