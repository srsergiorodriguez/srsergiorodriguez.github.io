<svelte:head>
    <style>
        @import url("https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300;500;700&display=swap");
    </style>
</svelte:head>

<slot></slot>

<style>
  :global(:root){
    --stroke: black;
    --fill: rgb(242, 243, 236);
    --accent1: #d8422e;
    --accent2: #2754bc;
    --accent3: #1d9848;
    font-family: 'Libre Franklin', sans-serif;
  }

  :global(body) {
    padding: 0px;
    margin: 0px;
    background: var(--fill);
    color: var(--stroke);
    
  }

  :global(button, select, input) {
    font-family: 'Libre Franklin', sans-serif;
  }

  :global(h1, h2, h3, h4, h5, h6) {
    font-family: 'Libre Franklin', sans-serif;
  }

  :global(h1, h5) {
    color: var(--accent1);
  }

  :global(h2, h4) {
    color: var(--accent2);
  }

  :global(h3, h6) {
    color: var(--accent3);
  }

  :global(.no-select)  {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  :global(.default-button) {
    cursor: pointer;
    border: 1px solid var(--stroke);
    background: var(--fill);
    color: var(--accent2);
  }

  :global(.default-button:hover) {
    text-decoration: underline;
  }

  :global(.default-button:active) {
    opacity: 0.6;
  }

  :global(.align-right) {
    display: flex;
    gap: 10px;
    justify-content: right;
  }

  :global(.align-center) {
    display: flex;
    gap: 10px;
    justify-content: center;
  }

  :global(.noevents) {
    pointer-events: none;
  }

  :global(.block-text) {
    margin: auto;
    padding: 30px 20px 0px 20px;
    max-width: 850px;
    font-weight: 100;
    font-size: 1.1em;
    line-height: 1.4em;
  }

  :global(.block-text a:hover) {
    text-decoration: underline;
  }

  :global(.block-text a) {
    color: var(--accent3);
    font-weight: 500;
    text-decoration: none;
  }

  :global(.block-list) {
    margin: auto;
    padding: 20px;
    max-width: 700px;
  }

  :global(.block-list p) {
    margin: 4px 0px;
  }

  :global(.block-list h3) {
    margin: 35px 0px 5px;
  }

  :global(.list-container a) {
    text-decoration: none;
    cursor: pointer;
    word-break: break-all;
  }

  :global(.list-container a:hover) {
    text-decoration: underline;
  }

  :global(.list-container a:visited) {
    color: var(--stroke);
  }

  @media screen and (max-device-width: 450px) {
    :global(p,.block-text) {
      font-size: 0.9em;
    }
    :global(h1) {
      font-size: 1.1em;
    }
  }
</style>