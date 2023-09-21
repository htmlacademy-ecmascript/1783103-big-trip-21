function createSortItemTemplate ({type, isChecked,isDisabled}) {

  return `

  <div class="trip-sort__item  trip-sort__item--${type} 'trip-sort__item--active' : ''}">
  <input id="sort-${type}" 
  class="trip-sort__input  
  visually-hidden" type="radio" 
  name="trip-sort" value="sort-${type}"
  data-item = "${type}" 
    ${isChecked ? 'checked' : ''}
    ${isDisabled ? 'disabled' : ''}>
  <label class="trip-sort__btn" for="sort-${type}">${type} </label>
</div>
  `;
}

function createSortTemplate(sortItems){

  return`
<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
${sortItems.map((sortItem) => createSortItemTemplate(sortItem)).join('')}
</form>`;
}
export {createSortTemplate};
