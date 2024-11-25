let indexBasketCalculation = 0;
let indexBasketCalculationData = 1;
let indexBasketSingleDishData = 1;
let menuLength = Object.keys(menu).length

function init() {
  renderNavBar();
  renderMenuCatagory();
  renderBasket();
}

function renderNavBar() {
  let navbarRef = document.getElementById("navbar");
  navbarRef.innerHTML = "";
  for (let indexMenu = 0; indexMenu < menuLength; indexMenu++) {
    navbarRef.innerHTML += getNavbarHTMLTemplate(indexMenu);
  }
}

function renderMenuCatagory() {
  let contentRef = document.getElementById("content");
  contentRef.innerHTML = "";
  for (let indexMenuCatagory = 0; indexMenuCatagory < menuLength; indexMenuCatagory++) {
    contentRef.innerHTML += getDishesCatagoryHTMLTemplate(indexMenuCatagory);
    renderMenuCatagoryImage(indexMenuCatagory);
    renderDishes(indexMenuCatagory);
  }
}
function renderMenuCatagoryImage(indexMenuCatagory) {
  let menuCatagoryImageRef = document.getElementById(
    `catagory_image_${indexMenuCatagory}`
  );
  let menuCatagoryLength = (Object.entries(menu)[indexMenuCatagory][1].length - 1)
  menuCatagoryImageRef.innerHTML = "";
  menuCatagoryImageRef.style.backgroundImage = `url('${Object.entries(menu)[indexMenuCatagory][1][menuCatagoryLength].image}')`;
}

function renderDishes(indexMenuCatagory) {
  let singleDishRef = document.getElementById(`dishes_catagory_${indexMenuCatagory}`);
  let menuCatagoryLength = (Object.entries(menu)[indexMenuCatagory][1].length - 1)
  for (
    let indexDish = 0; indexDish < menuCatagoryLength; indexDish++) {
    singleDishRef.innerHTML += getSingleDishesHTMLTemplate(indexMenuCatagory, indexDish);
  }
  renderOverlays();
}

function renderBasket() {
  let basketWrapRef = document.getElementById("basket_wrap");
  basketWrapRef.innerHTML = "";
  basketWrapRef.innerHTML += getBasketWrapperHTMLTemplate();
}

function renderBasketContent() {
  let basketContentRef = document.getElementById("basket_content");
  basketContentRef.innerHTML = "";
  let basketLength = Object.entries(basket).length
  for (let basketIndex = 1; basketIndex < basketLength; basketIndex++) {
    basketContentRef.innerHTML += getBasketContentHTMLTemplate(basketIndex);
  }
}

function renderOverlays() {
  let overlaysRef = document.getElementById("overlays");
  overlaysRef.innerHTML = getOverlaysHTMLTemplate();
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

function increaseAmountBasket(index_basket_dish, event) {
  let basket_dish_index = "";
  basket_dish_index = Object.entries(basket)[index_basket_dish][0];
  basket[basket_dish_index].amount += 1;
  calcSingleDishSubTotal(index_basket_dish);
  calcBasketSubTotal();
  renderBasketContent();
  renderBasketContentResponsive();
  event.stopPropagation();
}

function decreaseAmountBasket(index_basket_dish, event) {
  let basket_dish_index = "";
  basket_dish_index = Object.entries(basket)[index_basket_dish][0];
  if (basket[basket_dish_index].amount > 1) {
    basket[basket_dish_index].amount -= 1;
    calcSingleDishSubTotal(index_basket_dish);
    calcBasketSubTotal();
    renderBasketContent();
    renderBasketContentResponsive();
    event.stopPropagation();
  } else {
    deleteFromBasket(index_basket_dish, event);
  }
}

function deleteFromBasket(index_basket_dish, event) {
  let basketOverlayRef = document.getElementById("basketOverlay");
  let basket_dish_index = "";
  basket_dish_index = Object.entries(basket)[index_basket_dish][0];
  delete basket[basket_dish_index];
  renderBasketContent();
  renderBasketContentResponsive();
  calcBasketSubTotal();
  emptyBasket();
  emptyBasketResponsive();
  if (basketOverlayRef.style.display !== "none") {
    event.stopPropagation();
  }
}

function calcSingleDishSubTotal(index_basket_dish) {
  let basketDishSubtotal = Object.entries(basket)[index_basket_dish][1].subtotal
  let basket_dish_index = "";
  basket_dish_index = Object.entries(basket)[index_basket_dish][0];
  let amountSingleDishBasket = Object.entries(basket)[index_basket_dish][indexBasketSingleDishData].amount;
  let priceSingleDishBasket = Object.entries(basket)[index_basket_dish][indexBasketSingleDishData].price;
  let subtotalSingleDishBasket = amountSingleDishBasket * priceSingleDishBasket;
  basketDishSubtotal = subtotalSingleDishBasket;
}

function calcBasketSubTotal() {
  let basketSubtotal = Object.entries(basket)[indexBasketCalculation][indexBasketCalculationData][0].subTotal
  let basketDishSubtotal = Object.entries(basket)[index_basket_dish][1].subtotal
  let basketLength = Object.entries(basket).length
  basketSubtotal = 0;
  for (let indexDishBasket = 1; indexDishBasket < basketLength; indexDishBasket++) {
    basketSubtotal += basketDishSubtotal;
  }
  calcBasketTotal();
}

function calcBasketTotal() {
  let basketSubtotal = Object.entries(basket)[indexBasketCalculation][indexBasketCalculationData][0].subTotal
  let basketTotal = Object.entries(basket)[indexBasketCalculation][indexBasketCalculationData][0].total
  let basketDeliveryPrice = Object.entries(basket)[indexBasketCalculation][indexBasketCalculationData][0].delivery_price
  if (basketSubtotal != 0) {
    basketTotal = basketSubtotal + basketDeliveryPrice;
    renderBasket();
    renderBasketContent();
  } else {
    basketTotal = 0;
    renderBasket();
    renderBasketContent();
  }
}

function emptyBasket() {
  let basketContentRef = document.getElementById("basket_content");
  if (basketContentRef.innerHTML == null || basketContentRef.innerHTML == "") {
    basketContentRef.innerHTML = "Fügen Sie etwas ihrem <br> Warenkorb hinzu.";
  }
}
function emptyBasketResponsive() {
  let basketContentResponsiveRef = document.getElementById(
    "basketContentResponsive"
  );
  if (basketContentResponsiveRef != null) {
    if (
      basketContentResponsiveRef.innerHTML == null ||
      basketContentResponsiveRef.innerHTML == ""
    ) {
      basketContentResponsiveRef.innerHTML =
        "Fügen Sie etwas ihrem <br> Warenkorb hinzu.";
    }
  } else {
    return;
  }
}

function showOverlayBasketMessage() {
  let overlayBasketMessageRef = document.getElementById(
    "overlay_basket_message"
  );
  let overlayBasketMessageTextRef = document.getElementById(
    "overlay_basket_message_text"
  );
  if (basket.calculation[0].total != 0) {
    overlayBasketMessageRef.style.display = "flex";
    overlayBasketMessageTextRef.innerText = `Vielen Dank für Ihre Bestellung.
    Ihre Bestellung wird nun bearbeitet.`;
    basket = {calculation: [{ subTotal: 0, delivery_price: 5, delivery_choice: true, total: 0 },],};
    calcBasketSubTotal();
    emptyBasket();
    emptyBasketResponsive();
  } else {
    overlayBasketMessageRef.style.display = "flex";
    overlayBasketMessageTextRef.innerText =
      "Fügen Sie etwas ihrem Warenkorb hinzu.";
  }
}

function closeBasketMessage() {
  document.getElementById("overlay_basket_message").style.display = "none";
}

function showBasketOverlay() {
  let basketOverlayRef = document.getElementById("basketOverlay");
  basketOverlayRef.style.display = "flex";
  renderBasketOverlay();
  emptyBasketResponsive();
}

function closeBasketOverlay() {
  let basketOverlayRef = document.getElementById("basketOverlay");
  basketOverlayRef.style.display = "none";
}

function renderBasketOverlay() {
  let basketContentResponsiveRef = document.getElementById(
    "innerBasketResponsive"
  );
  basketContentResponsiveRef.innerHTML = "";
  basketContentResponsiveRef.innerHTML += getBasketWrapperResponsiveHTMLTemplate();
  renderBasketContentResponsive();
}

function renderBasketContentResponsive() {
  let basketContentResponsiveRef = document.getElementById("basketContentResponsive");
  let basketLength = Object.entries(basket).length
  if (basketContentResponsiveRef != null) {
    basketContentResponsiveRef.innerHTML = "";
    for (let basketIndex = 1; basketIndex < basketLength; basketIndex++) {
      basketContentResponsiveRef.innerHTML +=getBasketContentHTMLTemplate(basketIndex);
    }
  } else {
    return;
  }
}
