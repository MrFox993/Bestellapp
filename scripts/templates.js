function getNavbarHTMLTemplate(indexMenu) {
    return `
    <a href="#">${(Object.keys(menu)[indexMenu])}</a>
    `;
}

function getDishesCatagoryHTMLTemplate(indexMenuCatagory){
    return `
        <div class="dishes_catagory">
            <h1>${(Object.keys(menu)[indexMenuCatagory])}</h1>
            <div id="dishes_catagory_${(indexMenuCatagory)}" class="dishes"></div>
        </div>
    `;
}

function getSingleDishesHTMLTemplate(indexMenuCatagory, indexDish){
    return `
        <div id="single_dish_${(indexMenuCatagory)}" class="single_dish">
            <div class="dish_information">
                <h2>${(Object.entries(menu)[indexMenuCatagory][1][indexDish].name)}</h2>
                <p class="dish_description">${(Object.entries(menu)[indexMenuCatagory][1][indexDish].description)}</p>
                <p class="dish_price">${(Object.entries(menu)[indexMenuCatagory][1][indexDish].price.toFixed(2)+"€")}</p>
            </div>
            <button>+</button>
        </div>
`;
}