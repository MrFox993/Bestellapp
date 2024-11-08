function getNavbarHTMLTemplate(indexMenu) {
  return `
    <a href="#dishes_catagory_${indexMenu}">${Object.keys(menu)[indexMenu]}</a>
    `;
}

function getDishesCatagoryHTMLTemplate(indexMenuCatagory) {
  return `
            <div id="dishes_catagory_${indexMenuCatagory}" class="dishes">
                <h1>${Object.keys(menu)[indexMenuCatagory]}</h1>
                <img class="catagory_image" src="${
                  Object.entries(menu)[indexMenuCatagory][1][
                    Object.entries(menu)[indexMenuCatagory][1].length - 1
                  ].image
                }" alt="catagory_image">
            </div>
    `;
}

function getSingleDishesHTMLTemplate(indexMenuCatagory, indexDish) {
  return `
        <div onclick="addToBasket(${indexMenuCatagory}, ${indexDish})" id="single_dish_${indexMenuCatagory}_${indexDish}" class="single_dish">
            <div class="dish_information">
                <h2>${
                  Object.entries(menu)[indexMenuCatagory][1][indexDish].name
                }</h2>
                <p class="dish_description">${
                  Object.entries(menu)[indexMenuCatagory][1][indexDish]
                    .description
                }</p>
                <p class="dish_price">${
                  Object.entries(menu)[indexMenuCatagory][1][
                    indexDish
                  ].price.toFixed(2) + "€"
                }</p>
            </div>
            <button>+</button>
        </div>
    `;
}

function getBasketWrapperHTMLTemplate() {
  return `
        <div id="basket">
            <h1>Warenkorb</h1>
            <div class="inner_basket">
                <div class="basket_section_line">
                    <hr class="solid">
                </div>
                <div id="basket_content">
                <p>Fügen Sie etwas ihrem <br> Warenkorb hinzu.</p>
                </div>
                <div class="basket_section_line">
                    <hr class="solid">
                </div>
                    <div id="basket_calc">
                        <form
                        action="https://formspree.io/f/xanyeaao"
                        method="POST"
                        target="_blank"
                        >
                            <div class="single_basket_value">
                                <label for="subtotal">Zwischensumme</label>
                                <output name="subtotal" id="subtotal">${basket.calculation[0].subTotal.toFixed(
                                2
                                )} €</input>
                            </div>
                            <div class="single_basket_value">
                                <label for="delivery_price">Lieferkosten</label>
                                <output name="delivery_price" id="delivery_price">${basket.calculation[0].delivery_price.toFixed(
                                2
                                )} €</input>
                            </div>
                            <div class="single_basket_value">
                                <label for="total_price">Gesamtkosten</label>
                                <output name="total_price" id="total_price">${basket.calculation[0].total.toFixed(
                                2
                                )} €</input>
                            </div>
                            <div><button type="submit" class="basket_order_button" name="submit">Bestellung abschicken</button></div>
                        </form>
                    </div>
                </div>
        </div>
    `;
}
// TODO switch for delivery or take away
{/* <label class="toggle" for="delivery_choice">
                            <input type="checkbox" id="delivery_choice" name="delivery_choice" checked="${(basket.calculation[0].delivery_choice)}" onclick="calcBasketDeliveryPrice()">
                            <span class="slider"></span>
                            <span class="labels" data-on="Lieferung" data-off="Abholen"></span>
                            </label> */}

function getBasketContentHTMLTemplate(indexBasket) {
  return `
        <div class="single_dish_basket">
            <h3>${Object.entries(basket)[indexBasket][1].name}</h3>
            <div class="single_dish_basket_info">
            <div class="basket_dish_amount">
                <button onclick="decreaseAmountBasket(${indexBasket})"> - </button>
                <p>${Object.entries(basket)[indexBasket][1].amount}</p>
                <button onclick="increaseAmountBasket(${indexBasket})"> + </button>
            </div>
            <div class="basket_dish_price">
                <p>${Object.entries(basket)[indexBasket][1].subtotal.toFixed(
                  2
                )} €</p>
                <button onclick="deleteFromBasket(${indexBasket})"><img class="trash_button_img" src="./assets/icons/trash_icon.png" alt="trash_icon"></button>
            </div>
        </div>
        </div>
    `;
}
