<div class="dropdown">
  <button class="link">Dropdown</button>
  <div class="dropdown-menu">
    Dropdown Content
  </div>
</div>

<style>
  .dropdown {
    position: relative;
  }

  .link {
    color: red;
    cursor: pointer;
    padding: .5rem;
  }

  .dropdown-menu {
    display: none;
    position: absolute;
    left: 0;
    /* top: calc(100% + .25rem); */
    background: white;
    padding: .5rem;
    border-radius: 0 .25rem .25rem .25rem;
    border: solid 1px black;
  }

  .link:focus + .dropdown-menu {
    display: block;
  }
</style>