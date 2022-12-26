<script>
	import MovingWord from '../Components/MovingWord.svelte';
	import { scale } from 'svelte/transition';
</script>

<div class="mt-96 -ml-16">
	<div in:scale={{ start: 0 }} class="text-9xl font-bold tracking-tight text-red-500">Rosanita</div>

	<p class="my-10 text-lg max-w-xs">
		I am a young <MovingWord word={'artist'} /> experimenting and having fun. My main sources of inspiration
		are nature and home. Thanks for stopping by and making a place for me &lt;3
	</p>
	<p class="my-40 text-lg max-w-lg">
		I am a young artist experimenting and having fun. My main sources of inspiration are nature and
		home. Thanks for stopping by and making a place for me &lt;3
	</p>
</div>
