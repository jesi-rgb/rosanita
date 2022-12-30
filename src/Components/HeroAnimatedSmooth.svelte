<script>
	import HeroCharacterSmooth from './HeroCharacterSmooth.svelte';

	export let text;

	let weightValues;

	let chars = text.split('');
	weightValues == undefined ? Array(chars.length).fill(300) : weightValues;
	$: console.log(weightValues);
</script>

{#each chars as c, i}
	<div class="inline-block">
		<span style="font-weight:{weightValues[i]}">
			<HeroCharacterSmooth total={chars.length} {i} char={c} bind:value={weightValues} />
		</span>
	</div>
{/each}

