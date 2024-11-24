let menu = {
  Antipasti: [
    {
      name: "Cocktail di Gamberi Esotico",
      price: 12.5,
      description: "Krabbencocktail mit Avocado, Salat und Gurke",
    },
    {
      name: "Duetto",
      price: 14.5,
      description: "Duett aus Carpaccio und Vitello Tonnato",
    },
    {
      name: "Bruschetta di Salmone",
      price: 8.0,
      description:
        "Geröstetes Brot mit Crème Fraîche, Rucola und geräuchertem Lachs",
    },
    {
      name: "Bruschetta alla Pizzaiola",
      price: 7.5,
      description:
        "Geröstetes Brot mit frischen Tomaten und Mozzarella überbacken",
    },
    { image: "./assets/img/antipasto-3484782_1280.jpg" },
  ],
  Pasta: [
    {
      name: "Pappardelle Sfiziose",
      price: 16.5,
      description:
        "Hausgemachte Nudeln mit Kirschtomaten, dazu Filetspitzen in einer Steinpilz/Trüffel-Creme",
    },
    {
      name: "Tagliolini con Funghi Porcini e Gamberi",
      price: 17.5,
      description:
        "Frische Tagliolini mit Gambas, Steinpilzen und Thymian an einer Weißweincreme",
    },
    {
      name: "Spaghetti con Salmone e Gamberi",
      price: 18.5,
      description:
        "Frische Spaghetti mit grünem Spargel, Gambas, Lachs und Zucchini an Gorgonzolacreme",
    },
    {
      name: "Ravioli con Salsa di Noci, Spinaci e Pinoli",
      price: 15.5,
      description:
        "Ravioli gefüllt mit Spinat und Ricotta an einer Walnusscreme mit Pinienkernen",
    },
    { image: "./assets/img/tagliatelle-1972845_1280.jpg" },
  ],
  Insalate: [
    {
      name: "Mista Grande",
      price: 11.0,
      description:
        "grüner Salat, Tomaten, Zwiebeln, Thunfisch, Paprika, Ei, Gurken",
    },
    {
      name: "Mista Mini",
      price: 9.0,
      description:
        "grüner Salat, Tomaten, Zwiebeln, Thunfisch, Paprika, Ei, Gurken",
    },
    {
      name: "Insalata Italia",
      price: 13.0,
      description:
        "grüner Salat, Ei, Tomaten, Käse, Schinken, Artischocken, Thunfisch, Gurken und Zwiebeln",
    },
    {
      name: "Insalata Pollo",
      price: 14.0,
      description:
        "mit Feldsalat, Lollo Rosso, Kirschtomaten, Gurken, gebratenem Hähnchenbrustfilet, frischen Champignons und Croutinos",
    },
    { image: "./assets/img/vegetables-8176731_1280.jpg" },
  ],
  Spaghetti: [
    {
      name: "Spaghetti Bolognese",
      price: 10.5,
      description: "mit Bolognesesoße und Parmesan",
    },
    {
      name: "Spaghetti Con Pollo",
      price: 12.0,
      description:
        "Hähnchenbrustfilet mit Curry, Broccoli, Paprika und Zwiebeln",
    },
    {
      name: "Spaghetti Aglio, Olio e Peperoncino",
      price: 15.0,
      description: "mit Knoblauch, Gambas, Kirschtomaten und scharfen Peperoni",
    },
    { image: "./assets/img/spaghetti-4406130_1280.jpg" },
  ],
  Rigatoni: [
    {
      name: "Rigatoni ai 4 Formaggi",
      price: 11.5,
      description: "mit 4 verschiedenen Käsesorten",
    },
    {
      name: "Rigatoni con Broccoli e Gamberetti",
      price: 11.5,
      description: "mit Broccoli, Krabben, Knoblauch und Sahne",
    },
    { image: "./assets/img/pasta-1264056_1280.jpg" },
  ],
  Tortellini: [
    {
      name: "Tortellini alla Panna",
      price: 10.5,
      description: "mit Schinken und Sahnesoße",
    },
    {
      name: "Tortellini ai 4 Formaggi",
      price: 11.5,
      description: "mit 4 verschiedenen Käsesorten",
    },
    {
      name: "Tortellini Gorgonzola",
      price: 11.0,
      description: "mit Gorgonzolakäse",
    },
    { image: "./assets/img/tortellini-357887_1280.jpg" },
  ],
  Pizza: [
    { name: "Margherita", price: 8.0, description: "mit Tomatensoße und Käse" },
    { name: "Funghi", price: 9.0, description: "Tomatensoße, Pilze und Käse" },
    { name: "Salami", price: 9.0, description: "Tomatensoße, Salami und Käse" },
    {
      name: "Prosciutto",
      price: 9.0,
      description: "Tomatensoße, Schinken und Käse",
    },
    {
      name: "Tonno Cipolla",
      price: 10.5,
      description: "Tomatensoße, Thunfisch, Zwiebeln und Käse",
    },
    { image: "./assets/img/pizza-2341377_1280.jpg" },
  ],
};

let basket = {
  calculation: [
    { subTotal: 0, delivery_price: 5, delivery_choice: true, total: 0 },
  ],
};
