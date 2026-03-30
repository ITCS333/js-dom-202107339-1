/**
 * Selects the element with the id 'main-heading' and changes its text content to 'DOM Manipulation Challenge'.
 */
function changeHeadingText() {
  const a1 = document.getElementById('main-heading');
  a1.textContent='DOM Manipulation Challenge';
  // TODO: Implement this function
}

/**
 * Selects the element with the id 'box-to-modify' and changes its background color to 'lightblue'.
 */
function changeBoxColor() {
const b1 = document.getElementById('box-to-modify');
  b1.style.backgroundColor = 'lightblue';
  
  // TODO: Implement this function
}

/**
 * Creates a new <li> element, sets its text content to 'New Item', and appends it to the <ul> with the id 'item-list'.
 */
function addNewItem() {

  const newItem = document.createElement('li');
  newItem.textContent = 'New Item';
  newItem.classList.add('item'); // keep consistent styling
  const list = document.getElementById('item-list');
  list.appendChild(newItem);

  // TODO: Implement this function
}

/**
 * Selects the paragraph with the class 'content-para' and adds the class 'highlight' to it.
 */
function highlightParagraph() {
  const p1 = document.querySelector('.content-para');
  p1.classList.add('highlight');

  // TODO: Implement this function
}

/**
 * Selects the element with the id 'to-be-removed' and removes it from the DOM.
 */
function removeElement() {
  const e1 = document.getElementById('to-be-removed');
  e1.remove();

  // TODO: Implement this function
}


// Do not edit the lines below.
// These lines are for testing purposes.
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        changeHeadingText,
        changeBoxColor,
        addNewItem,
        highlightParagraph,
        removeElement
    };
}

