<style>
	.navbar {
		background: white;
		padding: 1rem;
		color: #484848;
	}
	.container {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.title {
		font-weight: bold;
		padding: 0 1rem;
	}

	.navbar :global(.selected) {
    color: white;
    background: steelblue;
	}

	.navbar :global(.selected):hover {
		color: white;
	}
</style>

<div class="navbar">
	<div class="container">
		<span class="title">Color Game</span>
		{#each levelArr as options}
			<BasicButton
				buttonText={options}
				customClass={options === currentMode && 'selected'}
				onClick={changeMode}
			/>
		{/each}
	</div>
</div>

<script>
	import BasicButton from './BasicButton.svelte';
	import { mode, colorSets, pickedColor } from '../stores/gameStores.js';
	let levelArr = ['Easy', 'Hard', 'Nightmare'];
	let currentMode;
	import { generateRandomColors, pickUpColor } from '../utils/colorUtils';
	const unsubscribe = mode.subscribe(value => {
		currentMode = value;
		let newColorSets;
		let newPickedColor;
		if (value === 'Easy') {
			newColorSets = generateRandomColors(3);
		} else {
			newColorSets = generateRandomColors(6);
		}
		newPickedColor = pickUpColor(newColorSets)
		colorSets.update((currentColorSets => newColorSets))
		pickedColor.update((currentPickedColor => newPickedColor))
	});

	function changeMode(newMode) {
		mode.update((mode => newMode))
	}
</script>