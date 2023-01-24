<script>
	import { getValues, scale } from '../utils/utils';
	import { gaussian } from '../utils/utils';

	export let text;

	let weightValues;

	let delay = (i) => 0.5 + i / 10;

	let m = { x: 0, y: 0 };

	function handleMousemove(event) {
		m.x = event.clientX;
		m.y = event.clientY;
	}

	let chars = text.split('');

	let charRefs = chars.map((c, i) => {
		undefined;
	});

	console.log(charRefs[2]);
	let charPosition = (id) => {
		let rect = id.getBoundingClientRect();
		return rect.right - rect.left;
	};
	let distanceToCursor = (id, mX) => Math.abs(charPosition(id) - mX);

	// $: console.log(chars.map((c, i) => scale(weight(i), 0, 1, 200, 900)));
</script>

{#each chars as c, i}
	<div class="inline-block" on:mousemove={handleMousemove}>
		<span
			id={'char-' + i}
			on:mousemove={() =>
				console.log(i, distanceToCursor(document.getElementById('char-' + i), m.x))}
			style="animation-delay:{delay(i)}s;font-weight:{800}"
			class="text-7xl text-red-500"
		>
			{c}
		</span>
	</div>
{/each}

<style>
	span {
		--add: 0;
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
