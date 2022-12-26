<script>
	import HeroCharacter from './HeroCharacter.svelte';

	export let text;

	let styledCharacters = text.split('').map((c, i) => {
		return { c: c, delay: 0.5 + i / 10 + 's' };
	});
</script>

{#each styledCharacters as charStyle, i}
	<div class="rosanita inline-block">
		<HeroCharacter {i} char={charStyle.c} />
	</div>
{/each}
