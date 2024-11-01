let indexBasketCalculation = 0;
let indexBasketCalculationData = 1;
let indexBasketSingleDishData = 1;

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
    indexDish < (Object.entries(menu)[indexMenuCatagory][1].length - 1);
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
    let basketIndex = 1;
    basketIndex < Object.entries(basket).length;
    basketIndex++
  ) {
    basketContentRef.innerHTML += getBasketContentHTMLTemplate(basketIndex);
  }
}

function addToBasket(indexMenuCatagory, indexDish) {
  let basket_dish_index = `single_dish_${indexMenuCatagory}_${indexDish}`;
  let indexBasketDish = indexDish + 1;

  if (basket_dish_index in basket) {
    basket[basket_dish_index].amount += 1;
    calcSingleDishSubTotal(indexBasketDish);
  } else {
    basket[basket_dish_index] = {
      name: Object.entries(menu)[indexMenuCatagory][1][indexDish].name,
      price: Object.entries(menu)[indexMenuCatagory][1][indexDish].price,
      amount: 1,
      subtotal: Object.entries(menu)[indexMenuCatagory][1][indexDish].price,
    };
  }
  calcBasketSubTotal();
  renderBasketContent();
}

function increaseAmountBasket(index_basket_dish) {
  let basket_dish_index = "";
  basket_dish_index = Object.entries(basket)[index_basket_dish][0];
  basket[basket_dish_index].amount += 1;
  calcSingleDishSubTotal(index_basket_dish);
  calcBasketSubTotal();
  renderBasketContent();
}

function decreaseAmountBasket(index_basket_dish) {
  let basket_dish_index = "";
  basket_dish_index = Object.entries(basket)[index_basket_dish][0];
  if (basket[basket_dish_index].amount > 1) {
    basket[basket_dish_index].amount -= 1;
    calcSingleDishSubTotal(index_basket_dish);
    calcBasketSubTotal();
    renderBasketContent();
  } else {
    deleteFromBasket(index_basket_dish);
  }
}

function deleteFromBasket(index_basket_dish) {
  let basket_dish_index = "";
  basket_dish_index = Object.entries(basket)[index_basket_dish][0];
  delete basket[basket_dish_index];
  renderBasketContent();
  calcBasketSubTotal();
  emptyBasket()
}

function calcSingleDishSubTotal(index_basket_dish) {
  let basket_dish_index = "";
  basket_dish_index = Object.entries(basket)[index_basket_dish][0];
  let amountSingleDishBasket =
    Object.entries(basket)[index_basket_dish][indexBasketSingleDishData].amount;
  let priceSingleDishBasket =
    Object.entries(basket)[index_basket_dish][indexBasketSingleDishData].price;
  let subtotalSingleDishBasket = amountSingleDishBasket * priceSingleDishBasket;
  Object.entries(basket)[index_basket_dish][1].subtotal =
    subtotalSingleDishBasket;
}

function calcBasketSubTotal() {
  Object.entries(basket)[indexBasketCalculation][
    indexBasketCalculationData
  ][0].subTotal = 0;
  for (
    let indexDishBasket = 1;
    indexDishBasket < Object.entries(basket).length;
    indexDishBasket++
  ) {
    Object.entries(basket)[indexBasketCalculation][
      indexBasketCalculationData
    ][0].subTotal += Object.entries(basket)[indexDishBasket][1].subtotal;
  }
  calcBasketTotal();
}

function calcBasketTotal() {
    if (Object.entries(basket)[indexBasketCalculation][
        indexBasketCalculationData
      ][0].subTotal != 0){
        Object.entries(basket)[indexBasketCalculation][
            indexBasketCalculationData
          ][0].total =
            Object.entries(basket)[indexBasketCalculation][
              indexBasketCalculationData
            ][0].subTotal +
            Object.entries(basket)[indexBasketCalculation][
              indexBasketCalculationData
            ][0].delivery_price;
          renderBasket();
          renderBasketContent();
      } else{
        Object.entries(basket)[indexBasketCalculation][
            indexBasketCalculationData
          ][0].total = 0;
        renderBasket();
        renderBasketContent();
      }

}

function emptyBasket() {
    let basketContentRef = document.getElementById('basket_content');
    if (basketContentRef.innerHTML == null || basketContentRef.innerHTML == "") {
        basketContentRef.innerHTML = "Fügen Sie etwas ihrem <br> Warenkorb hinzu."
    }
}