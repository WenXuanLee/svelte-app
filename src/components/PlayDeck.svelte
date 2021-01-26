<style>
  .deck-container {
    margin: 0 auto;
    width: 520px;
  }
</style>

<div class="deck-container">
  {#each currentColorSets as color}
    <BasicCard
      color={currentIsGameEndValue ? '#ffffff' : color}
      onClick={checkIsPickedColor}
    />
  {/each}
</div>

<script>
  import BasicCard from './BasicCard.svelte';
  import { generateRandomColors, pickUpColor } from '../utils/colorUtils';
	import { isGameEnd, mode, colorSets, pickedColor } from '../stores/gameStores.js';
  let currentColorSets;
  let cureentPickedColor;
  let currentIsGameEndValue;

  colorSets.subscribe(value => {
		currentColorSets = value;
  });

  pickedColor.subscribe(value => {
		cureentPickedColor = value;
  });

  isGameEnd.subscribe(value => {
		currentIsGameEndValue = value;
  });

  function checkIsPickedColor (targetColor) {
    console.log(targetColor === cureentPickedColor);
    isGameEnd.update((currentValue => targetColor === cureentPickedColor))
    return targetColor === cureentPickedColor;
  }
</script>