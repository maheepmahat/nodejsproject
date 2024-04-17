const resolvers = {
    Query: {
        appetizers: () => [
            { name: "Iceberg Wedge Salad", description: "House Cured Bacon, tomato salsa gorgonzola", price: 7.50 },
            { name: "Sautéed Shredded Brussels Sprouts", description: "bacon hazelnuts gorgonzola", price: 6.95 },
            { name: "Kale Salad", description: "parmesan crisp corn radish garlic-lemon vinaigrette", price: 7.50 },
            { name: "Pecan Crusted Utah Goat Cheese", description: "with Basil-Mint Pesto, grilled tomato salsa crostini", price: 6.95 },
            { name: "Chicken and Cabbage Eggrolls", description: "hot & sour dipping sauce", price: 6.95 }
        ],
        entrees: () => [
            { name: "Farfalle Pasta with Braised Pork", description: "in Tomato Cream, capers butternut squash kale", price: 12.95 },
            { name: "Stout Braised Bratwurst", description: "horseradish mashed potatoes roasted root veggies grilled onion", price: 13.95 },
            { name: "Salmon & Crispy Tofu in Yellow Curry Sauce", description: "vegetable sauté golden raisin chutney", price: 15.95 },
            { name: "Sesame Shrimp", description: "udon noodles ramen broth shiitake mushrooms bean sprouts scallions", price: 13.95 }
        ],
        sandwiches: () => ({
            cold: [
                {name: "full", description:"Full sandwich", price: 9.25},
                {name: "half", description:"Half sandwich", price: 7.95},
                { name: "Turkey & Avocado", description: "with tomato on sourdough, whole wheat, or rye bread", price: 9.25 },
                { name: "Pub Club", description: "turkey, bacon, lettuce, tomato on sourdough, whole wheat, or rye bread", price: 9.25 },
                { name: "Rare Roast Beef & Swiss", description: "sweet-hot mustard, lettuce, red onion on sourdough, whole wheat, or rye bread", price: 9.25 },
                { name: "Veggie", description: "pepper jack, avocado, sprout, tomato on sourdough, whole wheat, or rye bread", price: 9.25 },
            ],
            hot: [
                { name: "Southwest Chicken Breast", description: "Grilled Onion, Poblano Pepper, Tomato, Lettuce, Jack Cheese on choice of whole wheat or cheese & onion bun", price: 9.50 },
                { name: "Portobello Fresh Mozzarella", description: "Caramelized Onion, Roasted Pepper, Tomato, Field Greens, Basil Aioli on choice of whole wheat or cheese & onion bun", price: 9.50 },
                { name: "Chipotle BBQ Pork Sandwich", description: "with Pickled Jalapeño Slaw on choice of whole wheat or cheese & onion bun", price: 9.50 },
                { name: "Bacon Burger", description: "Swiss, Lettuce, Tomato on choice of whole wheat or cheese & onion bun", price: 9.25 },
                { name: "Mexi Burger", description: "Pepper Relish, Pepper Jack, Tomato, Lettuce, Guacamole on choice of whole wheat or cheese & onion bun", price: 9.25 },
                { name: "Herb Marinated Top Sirloin", description: "Crimini Mushrooms, Caramelized Onion, Gorgonzola, Basil Aioli, Served Open Faced on Focaccia", price: 10.95 },
                { name: "Roast Beef with Ancho Au Jus", description: "Jack Cheese, Grilled Onions, Served on Crumb Bros. Baguette", price: 9.75 },
                { name: "Blackened Catfish", description: "Creole Peppers & Onions, Fresh Herb Aioli, Served on house made Sourdough", price: 9.75 }
            ]
        }),
        soupSaladCombos: () => [
            { name: "French Onion or Soup of the Day", description: "A choice of our daily soup selection", price: 4.95 },
            { name: "Combo with Green Salad", description: "Soup of the day served with a small green salad", price: 7.25 },
            { name: "Combo with House Pasta", description: "Soup of the day served with fresh fruit or house pasta", price: 7.25 },
            { name: "Combo with Half Pasta of the Day", description: "Soup of the day served with half portion of pasta of the day", price: 8.75 }
        ],
        fajitas: () => [
            { name: "Serving detail", description: "Served with red rice, black beans, grilled tomato salad, choice of corn or flour tortillas", price: 10.95},
            { name: "Chicken Fajita", description: "Onions, Poblano and Bell Peppers, Guacamole, Two Salsas", price: 10.95 },
            { name: "Sirloin Steak Fajita", description: "Onions, Poblano and Bell Peppers, Carrots, Onion, Guacamole, Two Salsas", price: 10.95 }
        ],
        tacos: () => [
            { name: "Serving detail", description: "Served with red rice, black beans, corn & romaine salad, tortilla chips", price: 9.95},
            { name: "Beer Battered Fish Taco", description: "Jalapeño Remoulade, Roasted Salsa, Cabbage", price: 9.95 },
            { name: "Carne Asada Taco", description: "Guacamole, Tomatillo Salsa", price: 9.95 },
            { name: "Citrus Marinated Chicken Taco", description: "Guacamole, Tomatillo Salsa", price: 9.95 },
            { name: "Grilled Veggie Taco", description: "Zucchini, Yellow Squash, Bell Peppers, Onion, Guacamole, Tomatillo Salsa", price: 9.95 }
        ],
        enchiladas: () => [
            {
              name: "Basic Enchilada",
              description: "Delicious enchiladas",
              options: ["Beef", "Chicken", "Cheese", "Veggie"],
              prices: [8.50, 9.95, 11.50]
            }
          ],
        specialItems: () => [
            { name: "Chili Relleno", description: "Stuffed with Jack Cheese & Corn Glazed Yam, Chayote Squash Succotash, Red Chili Sauce", price: 9.95 },
            { name: "Pepita Crusted Salmon", description: "Chevre whipped yams, jicama slaw, tomatillo sauce", price: 10.95 }
        ],
        quiches: () => [
            { name: "Bacon, Swiss, and Mushroom Quiche", description: "Choice of Fresh Fruit or Green Salad", price: 8.95 }
        ],
        greenSalads: () => [
            { name: "Grilled Red Trout", description: "Lentils, Tomatoes, Cukes, Green Beans, Red Bells, Almonds, Sundried Tomato Vinaigrette", price: 10.95 },
            { name: "Smoked Turkey Cheese Tortellini", description: "Bacon, Tomato, Cucumber, Egg, Black Bean-Corn Salsa, Avocado", price: 9.95 },
            { name: "Asian Grilled Chicken", description: "Snow Peas, Carrot Slaw, Red Bells, Water Chestnut, Peanuts, Baby Corn, Cilantro, Cukes, Spicy Peanut Dressing", price: 10.50 },
            { name: "Southwest Grilled Chicken", description: "Tomato, Guacamole, pepitas, Jicama, Corn & Black Bean Salsa, Orange Wedges, Spicy Citrus Vinaigrette", price: 10.50 },
            { name: "Mediterranean Italian Sausage", description: "Artichoke Hearts, Green Beans, Roma Tomato, Kalamatas, Red Onion, Cucumber, Croutons, Parmesan, Fresh Mozzarella, Gorgonzola Vinaigrette", price: 9.95 },
            { name: "Grilled Salmon", description: "Artichoke tapenade, shredded kale, corn, radish, parmesan crisps", price: 11.50 }
        ]
    }
};

module.exports = resolvers;
