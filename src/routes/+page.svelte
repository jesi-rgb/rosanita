<script>
	import HeroAnimated from '../Components/HeroAnimated.svelte';
	import HeroAnimatedSmooth from '../Components/HeroAnimatedSmooth.svelte';
	import MovingWord from '../Components/MovingWord.svelte';
</script>

<div class="mt-96 xl:-ml-16">
	<!-- <div class="rosanita text-9xl font-bold tracking-tight text-red-500">Rosanita</div> -->

	<div class="mb-10">Hiii, I'm</div>
	<div class="rosanita">
		<HeroAnimated text={'Rosanita'} />
	</div>

	<p class="my-10 text-lg max-w-xs">
		I am a young <MovingWord word={'artist'} /> experimenting and having fun. My main sources of inspiration
		are nature and home. Thanks for stopping by and making a place for me &lt;3
	</p>
</div>
