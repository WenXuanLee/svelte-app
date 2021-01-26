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

<div class="base-card" style="background-color: {color}" on:click={onClickAction}>{color}</div>

<script>
  export let color = '';
  export let onClick = () => {};

  function onClickAction() {
    onClick(color);
  }
</script>