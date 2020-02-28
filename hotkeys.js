document.addEventListener("keyup", event => {
  input = document.getElementsByTagName("input")[0];

  // Put the cursor on the searchbar when the user hits F
  if (event.key == 'f' && input.getAttribute('aria-expanded') == 'false' ) {
    input.focus();
    input.select();
  }
});
