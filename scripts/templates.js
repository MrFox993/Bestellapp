function getNavbarHTMLTemplate(indexMenu) {
    return `
    <a href="#dishes_catagory_${(indexMenu)}">${(Object.keys(menu)[indexMenu])}</a>
    `;
}

function getDishesCatagoryHTMLTemplate(indexMenuCatagory){
    return `
            <div id="dishes_catagory_${(indexMenuCatagory)}" class="dishes">
                <h1>${(Object.keys(menu)[indexMenuCatagory])}</h1>
            </div>
    `;
}

function getSingleDishesHTMLTemplate(indexMenuCatagory, indexDish){
    return `
        <div onclick="addToBasket(${(indexMenuCatagory)}, ${(indexDish)})" id="single_dish_${(indexMenuCatagory)}_${(indexDish)}" class="single_dish">
            <div class="dish_information">
                <h2>${(Object.entries(menu)[indexMenuCatagory][1][indexDish].name)}</h2>
                <p class="dish_description">${(Object.entries(menu)[indexMenuCatagory][1][indexDish].description)}</p>
                <p class="dish_price">${(Object.entries(menu)[indexMenuCatagory][1][indexDish].price.toFixed(2)+"€")}</p>
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
                <p>Fügen Sie etwas ihrem Warenkorb hinzu.</p>
                </div>
                <div class="basket_section_line">
                    <hr class="solid">
                </div>
                <div id="basket_calc">
                    <div class="single_basket_value">
                        <div>Zwischensumme</div>
                        <div id="subtotal"></div>
                    </div>
                    <div class="single_basket_value">
                        <div>Lieferkosten</div>
                        <div id="delivery_price">5,00€</div>
                    </div>
                    <div class="single_basket_value">
                        <div>Gesamtkosten</div>
                        <div id="total_price"></div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function getBasketContentHTMLTemplate(indexBasket) {
    return `
        <div class="single_dish_basket">
            <h3>${(Object.entries(basket)[indexBasket][1].name)}</h3>
            <div class="single_dish_basket_info">
            <div class="basket_dish_amount">
                <button onclick="decreaseAmountBasket(${(indexBasket)})"> - </button>
                <p>${(Object.entries(basket)[indexBasket][1].amount)}</p>
                <button onclick="increaseAmountBasket(${(indexBasket)})"> + </button>
            </div>
            <div class="basket_dish_price">
                <p>${(Object.entries(basket)[indexBasket][1].price).toFixed(2)} €</p>
                <button onclick="deleteFromBasket(${(indexBasket)})">delete</button>
            </div>
        </div>
        </div>
    `;
}