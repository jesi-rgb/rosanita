<script>
	import HeroCharacter from './HeroCharacter.svelte';

	export let text;

	let chars = text.split('');
</script>

{#each chars as c, i}
	<div class="inline-block">
		<HeroCharacter {i} char={c} />
	</div>
{/each}
