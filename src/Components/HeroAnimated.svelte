<script>
	export let text;
	console.log(text);
	let styledCharacters = text.split('').map((c, i) => {
		return { c: c, delay: 0.5 + i / 10 + 's' };
	});
</script>

{#each styledCharacters as charStyle, i}
	<span
		aria-hidden="true"
		class="rosanita text-7xl md:text-8xl text-red-500 font-bold"
		style="animation-delay: {charStyle.delay};margin-left:{i == 0 ? '0em' : '-0.22em'}"
	>
		{charStyle.c}
	</span>
{/each}

<style>
	.rosanita {
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
