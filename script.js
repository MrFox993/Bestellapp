function init() {
  renderNavBar();
  renderMenuCatagory();
  renderBasket();
}

function renderNavBar() {
  let navbarRef = document.getElementById("navbar");
  navbarRef.innerHTML = "";
  for (let indexMenu = 0; indexMenu < Object.keys(menu).length; indexMenu++) {
    navbarRef.innerHTML += getNavbarHTMLTemplate(indexMenu);
  }
}

function renderMenuCatagory() {
  let contentRef = document.getElementById("content");
  contentRef.innerHTML = "";
  for (
    let indexMenuCatagory = 0;
    indexMenuCatagory < Object.keys(menu).length;
    indexMenuCatagory++
  ) {
    contentRef.innerHTML += getDishesCatagoryHTMLTemplate(indexMenuCatagory);
    renderDishes(indexMenuCatagory);
  }
}

function renderDishes(indexMenuCatagory) {
  let singleDishRef = document.getElementById(
    `dishes_catagory_${indexMenuCatagory}`
  );
  // singleDishRef.innerHTML = "";
  for (
    let indexDish = 0;
    indexDish < Object.entries(menu)[indexMenuCatagory][1].length;
    indexDish++
  ) {
    singleDishRef.innerHTML += getSingleDishesHTMLTemplate(
      indexMenuCatagory,
      indexDish
    );
  }
}

function renderBasket() {
  let basketWrapRef = document.getElementById("basket_wrap");
  basketWrapRef.innerHTML = "";
  basketWrapRef.innerHTML += getBasketWrapperHTMLTemplate();
}

function renderBasketContent() {
  let basketContentRef = document.getElementById("basket_content");
  basketContentRef.innerHTML = "";
  for (
    let basketIndex = 0;
    basketIndex < Object.entries(basket).length;
    basketIndex++
  ) {
    basketContentRef.innerHTML += getBasketContentHTMLTemplate(basketIndex);
  }
}

function addToBasket(indexMenuCatagory, indexDish) {
  let basket_dish_index = `single_dish_${indexMenuCatagory}_${indexDish}`;

  if (basket_dish_index in basket) {
    basket[basket_dish_index].amount += 1;
  } else {
    basket[basket_dish_index] = {
      name: Object.entries(menu)[indexMenuCatagory][1][indexDish].name,
      price: Object.entries(menu)[indexMenuCatagory][1][indexDish].price,
      amount: 1,
    };
  }
  renderBasketContent();
}

function increaseAmountBasket(index_basket_dish) {
    let basket_dish_index = "";
    basket_dish_index = Object.entries(basket)[index_basket_dish][0];
    basket[basket_dish_index].amount += 1;
    renderBasketContent();
}

function decreaseAmountBasket(index_basket_dish) {
    let basket_dish_index = "";
    basket_dish_index = Object.entries(basket)[index_basket_dish][0];
    if (basket[basket_dish_index].amount > 1){
        basket[basket_dish_index].amount -= 1;
    renderBasketContent();
    } else {
        deleteFromBasket(index_basket_dish)
    }
    
}

function deleteFromBasket(index_basket_dish) {
    let basket_dish_index = "";
    basket_dish_index = Object.entries(basket)[index_basket_dish][0];
    delete basket[basket_dish_index];
    renderBasketContent();
}