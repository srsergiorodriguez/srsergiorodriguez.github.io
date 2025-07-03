<svelte:head>
  <style>
      @import url("https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300;500;700&display=swap");
      @import url('https://fonts.googleapis.com/css2?family=Gabarito:wght@400..900&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Parkinsans:wght@300..800&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');
  </style>
  <script defer src="https://cloud.umami.is/script.js" data-website-id="960a1636-9a1c-4f6a-8e89-e24be869efc0"></script>
</svelte:head>

<slot></slot>

<style>
  :global(:root){
    --stroke: black;
    --fill: rgb(240, 245, 244);
    --accent1: #000000;
    --accent2: #000000;
    --accent3: #000000;
    --mainfont: 'Libre Franklin', sans-serif;
    --headerfont: "Raleway", sans-serif;
    --titlefont:  "Raleway", sans-serif;
    font-family: var(--mainfont);
  }

  :global(body) {
    padding: 0px;
    margin: 0px;
    background: var(--fill);
    color: var(--stroke);
  }

  :global(button, select, input) {
    font-family: var(--mainfont);
  }

  :global(h1, h2, h3, h4, h5, h6) {
    font-family: var(--headerfont);
    font-weight: 700;
  }

  :global(a) {
    color: var(--accent3);
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

  :global(select) {
    background: var(--fill);
    font-size: 1rem;
    cursor: pointer;
  }

  :global(select:focus) {
    box-shadow: 0 0 3px 0 #3290f5;
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
    color: var(--stroke);
  }

  :global(.block-list h3) {
    margin: 35px 0px 5px;
    color: var(--accent3);
  }

  :global(.list-container a) {
    text-decoration: none;
    cursor: pointer;
  }

  :global(.list-container a:hover) {
    text-decoration: underline;
    color: var(--accent3);
  }

  :global(.list-container a:active) {
    color: rgb(128, 128, 128);
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