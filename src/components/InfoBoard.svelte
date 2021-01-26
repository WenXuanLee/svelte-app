<style>
  h1 {
    text-align: center;
    font-weight: normal;
    color: white;
    text-transform: uppercase;
	  margin: 0;
    padding: 20px 0;
  }

  .question-color {
    font-weight: bold;
	  font-size: 200%;
  }
</style>

<h1>
  <span class="question-color">{questionColor}</span>
  <br>
  <span>{hintDescription}</span>
  {#if countDown}
    <span>{countDown}</span>
  {/if}
</h1>

<script>
  import { colorSets, pickedColor } from '../stores/gameStores.js';
  let questionColor;
  pickedColor.subscribe(value => {
		questionColor = value;
	});
  export let hintDescription = "What's the Color?";
  export let countDown;
</script>