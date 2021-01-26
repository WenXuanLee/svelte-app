<style>
  .base-card {
    width: 30%;
    background: white;
    padding-bottom: 30%;
    float: left;
    margin: 1.66%;
	  border-radius: 1rem;
    transition: all 0.6s;
	  cursor: pointer;
  }
</style>

<div 
  class="base-card"
  style="background-color: {color}; opacity: {shouldHideCard ? '0' : '1'}" 
  on:click={onClickAction}
/>

<script>
  export let color = '';
  export let onClick = () => {};
  import { mode, isGameEnd } from '../stores/gameStores.js';
  let shouldHideCard = false;
  let currentIsGameEndValue;
  let currentMode;

  isGameEnd.subscribe(value => {
    currentIsGameEndValue = value;
    shouldHideCard = false;
  });

  mode.subscribe(value => {
    currentMode = value;
    shouldHideCard = false;
  });
  
  function onClickAction() {
    if (currentIsGameEndValue) {
      return;
    }
    shouldHideCard = !onClick(color);
  }
</script>