
import MenuEvent1 from "../images/M+IMG_2001.jpg"
import MenuEvent2 from "../images/_L5A2389.jpg"

import Menu1 from "../images/_L5A2389.jpg"
import Menu2 from "../images/Madame+Pang+Bordeaux+drink+1.jpg"
import Menu3 from "../images/M+IMG_2001.jpg"


export const MenuData = {
    SpecialEvents:[
        {
            name: "Madame Pang Deluxe",
            content: [
                "1 Cocktail",
                "1 Verres de Vin ou bière 25cl",
                "Chinoiseries (3 pcs/personne)",
                "Petites assiettes (1/2 personnes)",
                "Dim Sum (6pcs / personne)"
           ],
           picture: MenuEvent1,
           priceFromTuesdayToThursday: 60,
           priceFromFridayToSaturday: 75,
           priceSunday: 55,

        },
        {
            name: "Madame Pang Premium",
            content: [
                "1 coupe de champagne",
                "1 Cocktail",
                "1 Verres de Vin ou bière 25cl",
                "Chinoiseries (3 pcs/personne)",
                "Petites assiettes (1/2 personnes)",
                "Dim Sum (9pcs / personne)",
                "Douceurs(1pc/personne)"
           ],
           picture: MenuEvent2,
           priceFromTuesdayToThursday: 80,
           priceFromFridayToSaturday: 95,
           priceSunday: 75,
        },
    ],
    Menu:[
        {
            name: "Cocktail1",
            ingredients: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, accusantium.",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum cumque aspernatur quis beatae corporis nisi exercitationem ratione non veritatis pariatur.",
            picture: Menu1,
            background: "golden",
            price: 10,
        },
        {
            name: "Cocktail2",
            ingredients: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, accusantium.",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum cumque aspernatur quis beatae corporis nisi exercitationem ratione non veritatis pariatur.",
            picture: Menu2,
            background: "red",
            price: 12,
        },
        {
            name: "Cocktail3",
            ingredients: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, accusantium.",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum cumque aspernatur quis beatae corporis nisi exercitationem ratione non veritatis pariatur.",
            picture: Menu3,
            background: "green",
            price: 15,
        },
    ]
}