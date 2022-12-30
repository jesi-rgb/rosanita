<script>
	import HeroAnimated from '../Components/HeroAnimated.svelte';
	import HeroAnimatedSmooth from '../Components/HeroAnimatedSmooth.svelte';
	import MovingWord from '../Components/MovingWord.svelte';

    import {Flower} from 'phosphor-svelte'
</script>

<div class="mt-[600px] ml-5 md:ml-10" >
	<!-- <div class="rosanita text-9xl font-bold tracking-tight text-red-500">Rosanita</div> -->

    <div class="absolute text-9xl right-3 top-0 opacity-40 rotate-12 blur-[2px] hover:blur-none hover:rotate-45 transition-all duration-700">
        <Flower weight={'thin'}/>
    </div>

    <div class="absolute text-7xl right-28 top-[1em] opacity-70 blur-[1px] hover:blur-none rotate-6 hover:rotate-45 transition-all duration-700">
        <Flower weight={'duotone'}/>
    </div>

    <div class="absolute text-5xl right-20 top-28 rotate-12 hover:rotate-45 transition-transform duration-500">
        <Flower weight={'regular'}/>
    </div>

	<div class="mb-10">Hiii, I'm</div>
	<div>
		<HeroAnimated text={'Rosanita'} />
	</div>


	<p class="my-10 text-lg max-w-sm">
		I am a young <MovingWord word={'artist'} /> experimenting and having fun. My main sources of inspiration
		are nature and home. Thanks for stopping by &lt;3
	</p>
</div>
