<style>
	:global(*) {
		box-sizing: border-box;
	}

	:global(html) {
		font-size: 16px;
		line-height: 1.5;
	}

	:global(body) {
    margin: 0;
		padding: 0;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
		transition: background 0.6s;
	}

	:global(.button-base) {
		display: block;
		margin: 3rem auto;
		padding: 1rem;
		outline: none;
		border: none;
    border-radius: 999rem;
    background-color: white;
		font-size: 1rem;
    font-weight: 700;
    color: #484848;
    transition: all 0.3s;
		cursor: pointer;
		margin: 0 auto;
	}

	.main {
		display: flex;
		justify-content: center;
		flex-direction: column;
	}

	.footer {
		display: flex;
		justify-content: center;
	}

	.footer :global(.reset-button) {
		display: block;
		margin: 3rem auto;
		padding: 1rem;
		outline: none;
		border: none;
    border-radius: 999rem;
    background-color: white;
		font-size: 1rem;
    font-weight: 700;
    color: #484848;
    transition: all 0.3s;
		cursor: pointer;
	}

	.footer :global(.reset-button):hover {
		color: white;
    background-color: steelblue;
	}
</style>

<svelte:body
	class="test"
/>

<div class="main">
	<Navbar />
	<InfoBoard />
	<PlayDeck />
	<div class="footer">
		<BasicButton
			buttonText={currentIsGameEndValue ? 'Play Again' : 'New Color'}
			customClass="reset-button"
			onClick={resetGame}
		/>
	</div>
</div>



<script>
	import Navbar from './components/Navbar.svelte';
	import InfoBoard from './components/InfoBoard.svelte';
	import PlayDeck from './components/PlayDeck.svelte';
	import BasicButton from './components/BasicButton.svelte';
	import { generateRandomColors, pickUpColor } from './utils/colorUtils';
	import { isGameEnd, mode, colorSets, pickedColor } from './stores/gameStores.js';

	let currentMode;
	let currentIsGameEndValue;
	let currentPickedColor;

	mode.subscribe(value => {
		currentMode = value;
	});

	pickedColor.subscribe(value => {
		currentPickedColor = value;
	});

	isGameEnd.subscribe(value => {
		currentIsGameEndValue = value;
		if (value) {
			window.document.body.style.backgroundColor = currentPickedColor;
		} else {
			window.document.body.style.backgroundColor = "#232323";
		}
	});

	function resetGame() {
		let newColorSets;
		let newPickedColor;
		if (currentMode === 'Easy') {
			newColorSets = generateRandomColors(3);
		} else {
			newColorSets = generateRandomColors(6);
		}
		newPickedColor = pickUpColor(newColorSets)
		colorSets.update((currentColorSets => newColorSets))
		pickedColor.update((currentPickedColor => newPickedColor))
		isGameEnd.update((currentValue => false))
	}
</script>