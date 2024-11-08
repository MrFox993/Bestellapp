let menu = {
    "Antipasti":[
        {name: "Cocktail di Gamberi Esotico",
        price: 12.50,
        description: "Krabbencocktail mit Avocado, Salat und Gurke",
        },
        {name: "Duetto",
        price: 14.50,
        description: "Duett aus Carpaccio und Vitello Tonnato",
        },
        {name: "Bruschetta di Salmone",
        price: 8.00,
        description: "Geröstetes Brot mit Crème Fraîche, Rucola und geräuchertem Lachs",
        },
        {name: "Bruschetta alla Pizzaiola",
        price: 7.50,
        description: "Geröstetes Brot mit frischen Tomaten und Mozzarella überbacken",
        },
        {image: "./assets/img/antipasto-3484782_1280.jpg"}
    ],
    "Pasta":[
        {name: "Pappardelle Sfiziose",
        price: 16.50,
        description: "Hausgemachte Nudeln mit Kirschtomaten, dazu Filetspitzen in einer Steinpilz/Trüffel-Creme",
        },
        {name: "Tagliolini con Funghi Porcini e Gamberi",
        price: 17.50,
        description: "Frische Tagliolini mit Gambas, Steinpilzen und Thymian an einer Weißweincreme",
        },
        {name: "Spaghetti con Salmone e Gamberi",
        price: 18.50,
        description: "Frische Spaghetti mit grünem Spargel, Gambas, Lachs und Zucchini an Gorgonzolacreme",
        },
        {name: "Ravioli con Salsa di Noci, Spinaci e Pinoli",
        price: 15.50,
        description: "Ravioli gefüllt mit Spinat und Ricotta an einer Walnusscreme mit Pinienkernen",
        },
        {image: "./assets/img/tagliatelle-1972845_1280.jpg"}
    ],
    "Insalate":[
        {name: "Mista Grande",
        price: 11.00,
        description: "grüner Salat, Tomaten, Zwiebeln, Thunfisch, Paprika, Ei, Gurken",
        },
        {name: "Mista Mini",
        price: 9.00,
        description: "grüner Salat, Tomaten, Zwiebeln, Thunfisch, Paprika, Ei, Gurken",
        },
        {name: "Insalata Italia",
        price: 13.00,
        description: "grüner Salat, Ei, Tomaten, Käse, Schinken, Artischocken, Thunfisch, Gurken und Zwiebeln",
        },
        {name: "Insalata Pollo",
        price: 14.00,
        description: "mit Feldsalat, Lollo Rosso, Kirschtomaten, Gurken, gebratenem Hähnchenbrustfilet, frischen Champignons und Croutinos",
        },
        {image: "./assets/img/vegetables-8176731_1280.jpg"}
    ],
    "Spaghetti":[
        {name: "Spaghetti Bolognese",
        price: 10.50,
        description: "mit Bolognesesoße und Parmesan",
        },
        {name: "Spaghetti Con Pollo",
        price: 12.00,
        description: "Hähnchenbrustfilet mit Curry, Broccoli, Paprika und Zwiebeln",
        },
        {name: "Spaghetti Aglio, Olio e Peperoncino",
        price: 15.00,
        description: "mit Knoblauch, Gambas, Kirschtomaten und scharfen Peperoni",
        },
        {image: "./assets/img/spaghetti-4406130_1280.jpg"}
    ],
    "Rigatoni":[
        {name: "Rigatoni ai 4 Formaggi",
        price: 11.50,
        description: "mit 4 verschiedenen Käsesorten",
        },
        {name: "Rigatoni con Broccoli e Gamberetti",
        price: 11.50,
        description: "mit Broccoli, Krabben, Knoblauch und Sahne",
        },
        {image: "./assets/img/pasta-1264056_1280.jpg"}
    ],
    "Tortellini":[
        {name: "Tortellini alla Panna",
        price: 10.50,
        description: "mit Schinken und Sahnesoße",
        },
        {name: "Tortellini ai 4 Formaggi",
        price: 11.50,
        description: "mit 4 verschiedenen Käsesorten",
        },
        {name: "Tortellini Gorgonzola",
        price: 11.00,
        description: "mit Gorgonzolakäse",
        },
        {image: "./assets/img/tortellini-357887_1280.jpg"}
    ],
    "Pizza":[
        {name: "Margherita",
        price: 8.00,
        description: "mit Tomatensoße und Käse",
        },
        {name: "Funghi",
        price: 9.00,
        description: "Tomatensoße, Pilze und Käse",
        },
        {name: "Salami",
        price: 9.00,
        description: "Tomatensoße, Salami und Käse",
        },
        {name: "Prosciutto",
        price: 9.00,
        description: "Tomatensoße, Schinken und Käse",
        },
        {name: "Tonno Cipolla",
        price: 10.50,
        description: "Tomatensoße, Thunfisch, Zwiebeln und Käse",
        },
        {image: "./assets/img/pizza-2341377_1280.jpg"}
    ]
};

let basket = {
    "calculation": [
        {subTotal : 0,
        delivery_price : 0,
        delivery_choice : false,
        total : 0}
    ]
};