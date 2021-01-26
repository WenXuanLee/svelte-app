<style>
  .button-base {
    display: block;
    padding: 0 0.5rem;
    outline: none;
    border: none;
    border-radius: 999rem;
    font-size: 1rem;
    font-weight: 700;
    color: #484848;
    transition: all 0.3s;
    cursor: pointer;
    margin: 0;
    background-color: white;
  }

  .button-base:hover {
    color: steelblue;
  }
</style>

<button
  class={`button-base ${$$props.customClass}`}
  on:click={onClickAction}
>
  {buttonText}
</button>

<script>
  export let buttonText = 'easy';
  export const customClass = '';
  export let onClick = () => { };

  function onClickAction() {
    onClick(buttonText)
  }
</script>