function init() {
    renderNavBar();
    renderMenuCatagory();
    renderBasket();
}

function renderNavBar() {
    let navbarRef = document.getElementById('navbar');
    navbarRef.innerHTML = "";
    for (let indexMenu = 0; indexMenu < Object.keys(menu).length; indexMenu++) {
        navbarRef.innerHTML += getNavbarHTMLTemplate(indexMenu);
    };
}

function renderMenuCatagory() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";
    for (let indexMenuCatagory = 0; indexMenuCatagory < Object.keys(menu).length; indexMenuCatagory++) {
        contentRef.innerHTML += getDishesCatagoryHTMLTemplate(indexMenuCatagory);
        renderDishes(indexMenuCatagory)
    };
}

function renderDishes(indexMenuCatagory) {
    let singleDishRef = document.getElementById(`dishes_catagory_${(indexMenuCatagory)}`);
    // singleDishRef.innerHTML = "";
    for (let indexDish = 0; indexDish < Object.entries(menu)[indexMenuCatagory][1].length; indexDish++) {
        singleDishRef.innerHTML += getSingleDishesHTMLTemplate(indexMenuCatagory, indexDish)
    }
}

function addToBasket(indexMenuCatagory, indexDish) {
    console.log(`single_dish_${(indexMenuCatagory)}_${(indexDish)}` + " , " + Object.entries(menu)[indexMenuCatagory][1][indexDish].name);
}

function renderBasket() {
    let basketWrapRef = document.getElementById('basket_wrap');
    basketWrapRef.innerHTML = "";
    basketWrapRef.innerHTML += getBasketWrapperHTMLTemplate();
}