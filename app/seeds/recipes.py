from app.models import db, Recipe, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_recipes():
    demo = Recipe(
        recipe_name= 'Bhindi Masala (Okra With Red Onion and Tomato)',
        recipe_type = 'vegetarian',
        description='Ready in less than 30 minutes, bhindi masala is a hot and spicy vegetarian main dish perfect for any weeknight. Okra often gets a bad rap, but in this recipe, searing it in ghee preserves its structure, adds texture and seals any potential stickiness. Onion, tomato, red chile powder, ginger and garlic come together to make this a zinger of a dish. Finishing with lime juice adds fresh tartness that balances the heat. If you can’t find fresh okra, frozen works just as well. ',
        ingredients="""3
tablespoons ghee or neutral oil
1
pound okra, fresh or frozen (no need to thaw), stemmed and chopped into ½-inch pieces (see Tip)
½
teaspoon grated ginger or ginger paste
½
teaspoon grated garlic or garlic paste
1
large red onion, quartered and thinly sliced
¾
teaspoon kashmiri or other red chile powder
½
teaspoon ground coriander
¼
teaspoon ground turmeric
1
medium plum tomato, finely chopped
1¼ teaspoons fine sea salt
2 to 3
tablespoons lime juice
¼
teaspoon garam masala
Roti or pita (optional), for serving""",
        avg_rating=0,
        num_reviews=0,
        step_one='In a medium (9-inch) frying pan or wok, heat 2 tablespoons ghee over medium-high for 30 to 45 seconds or until it has melted. Add okra and cook undisturbed for 5 minutes or until okra starts to brown around the edges. (Cooking okra undisturbed helps eliminate the gooeyness.) Stir once so the sides with less color can brown next, then cook for another 5 minutes or until all the okra is brown around the edges. (This may take slightly longer if using frozen okra.) Remove with a slotted spoon and set aside.',
        step_two='Add the remaining 1 tablespoon ghee to the same frying pan and heat over medium-high until it melts. Add ginger and garlic and stir for about 30 seconds, until the raw smell dissipates. Add onion and cook, stirring frequently, until onions begin to soften, about 3 to 5 minutes. (The onions should still have a little bite.)',
        step_three='Lower the heat to medium and add red chile, coriander and turmeric, and stir until the masalas are uniformly mixed with the onion, about 30 seconds. Add tomato and salt. Continue cooking on medium until tomatoes break down, about 5 minutes.',
        step_four='Add okra back to the pan and mix until incorporated. Sprinkle with lime juice and garam masala. Serve with roti, store-bought pita or by itself.',
        user_id=1
    )
    demo2 = Recipe(
        recipe_name= 'Lemon Pepper Chicken Breasts',
        recipe_type = 'classic',
        description='Weeknight dinner is solved with these easy-to-make pan-fried chicken breasts smothered in a lemon pepper sauce. Serve this lemon pepper chicken breast recipe with rice or mashed potatoes.',
        ingredients="""1 1/2 to 1 3/4 pounds boneless, skinless chicken breasts (about 2 large chicken breasts)
1 1/2 tablespoons lemon pepper seasoning, divided
1/2 teaspoon kosher salt, plus more to taste
3/4 cup all-purpose flour
1 1/2 tablespoons vegetable oil
4 tablespoons unsalted butter, divided
2 cloves garlic, minced or grated
1/2 cup chicken stock
1/3 cup freshly squeezed lemon juice (from 2 lemons)
1/4 cup Italian parsley, chopped
Lemon slices, for garnish (optional)""",
        avg_rating=0,
        num_reviews=0,
        step_one='Place the palm of your hand flat against the top of a whole chicken breast to keep it from sliding around. With the broad side of your knife horizontal to the cutting board, cut through the chicken breast to create 2 thinner halves (cutlets).',
        step_two='In a small bowl, combine 4 teaspoons of the lemon pepper seasoning and the salt. Add the flour to a separate shallow dish. Season both sides of each of the chicken breasts with the spice mixture. Dredge both sides of the seasoned chicken in the flour, shaking off any excess flour, then lay the dredged chicken on a wire rack or platter while you heat the pan.',
        step_three='In a large skillet, heat the oil and 2 tablespoons of the butter over medium heat. Once the butter is melted, swirl the pan a little to combine the two fats. Once the oil in the skillet begins to shimmer, lay your chicken cutlets in a single layer in the pan. You may need to fry in batches. Fry the chicken for 3 minutes without moving. Use a pair of tongs to flip the chicken and fry until they’re cooked through, an additional 2 1/2 to 3 minutes. Use your tongs to remove the chicken from the skillet to a platter.',
        step_four='Once the sauce has reduced slightly, return the chicken breasts to the pan. Turn them over to coat both sides in the sauce and turn the stove off. Allow the residual heat from the pan to warm the chicken up before sprinkling the chopped parsley over top. Garnish with lemon slices and serve. ',
        user_id=1
    )
    demo3 = Recipe(
        recipe_name= 'Tamarind Cream Pie',
        recipe_type = 'dessert',
        description='With its bright, fruity acidity and a bittersweet depth, tamarind makes for an especially complex cream pie that’s a bit like Key lime, but with a molasses-like edge. This is a good dessert to prepare ahead: You can bake and chill the pie up to 3 days ahead, then add the whipped cream and orange zest up to 6 hours before serving. Keep the pie refrigerated until just before you cut it.',
        ingredients="""2
cups/170 grams graham cracker crumbs (from about 11 sheets of crackers)
6
tablespoons/85 grams unsalted butter (¾ stick), melted
1
large orange
4
large egg yolks
1
(14-ounce/400-gram) can sweetened condensed milk
½
cup/120 milliliters tamarind paste, extract or concentrate (see tip)
1 to 2
tablespoons lemon or lime juice, to taste (from 1 lemon or lime)
Pinch of fine sea salt
1
cup/240 milliliters heavy cream
1
tablespoon confectioners’ sugar""",
        avg_rating=0,
        num_reviews=0,
        step_one='Prepare the crust: Heat oven to 350 degrees, and place a rack in the center of the oven. In a large bowl, stir together graham cracker crumbs and butter. Transfer mixture to a 9-inch pie plate, and press it into an even layer on the bottom and up the sides.',
        step_two='Place pie plate on a rimmed baking sheet, and transfer to oven. Bake until golden brown, about 10 to 12 minutes. Transfer to a wire rack to cool.',
        step_three='Meanwhile, prepare the filling: Halve the orange and squeeze the juice from one half. You should have ¼ cup. If not, squeeze some juice from the other half. Reserve squeezed halves for zesting for garnish.',
        step_four='Just before serving, make the topping: In the bowl of an electric mixer, using the whisk attachment, beat together cream and confectioners sugar until thick and fluffy. Dollop whipped cream on cooled pie. Finely grate the zest from one of the reserved orange halves over the top of the pie, and serve.',
        user_id=1
    )
    demo4 = Recipe(
        recipe_name= 'Crispy Lemon Chicken Cutlets With Salmoriglio Sauce',
        recipe_type = 'classic',
        description='Derived from the Italian word for brine, “salamoia,” salmoriglio is a lemon sauce from Sicily and Calabria that is used to marinate and dress grilled meats and fish. This pleasantly sharp, all-purpose dressing is equally suited to chicken breasts: It soaks into the crust and lends a citrus punch to the meat. Fresh parsley, oregano or a combination of fresh herbs can be used, based on preference. The breading is inspired by the store-bought bread crumbs that are often labeled as Italian seasoned and often used for what Italian Americans simply call chicken cutlets: coated chicken breasts that are shallow-fried in olive oil. The addition of this simple lemon sauce gives this easy weeknight meal a restaurant-quality finish. ',
        ingredients="""1½
pounds boneless, skinless chicken breasts (about 4), halved and pounded ¼-inch thick
Kosher salt and pepper
3
large lemons
2
eggs, beaten
½
cup very finely chopped flat-leaf Italian parsley
1¼
cups bread crumbs
¼
cup all-purpose flour
¼
cup finely grated Parmigiano-Reggiano
2
teaspoons dried oregano
⅓
cup extra-virgin olive oil, plus more for frying
1
garlic clove, minced""",
        avg_rating=0,
        num_reviews=0,
        step_one='Pat chicken dry, then season liberally with salt and pepper on both sides.',
        step_two='Zest 1 lemon, reserving the zest for the bread crumbs, then halve the lemon and squeeze all its juice into a medium bowl. Add the eggs to the juice and beat to combine. Add the seasoned chicken and turn to coat. Let rest while you make the sauce and bread crumb mixture.',
        step_three='Heat about ⅓ cup of oil in a large skillet over medium-high. Working in batches, leaving 1 to 2 inches of space between, add 2 to 3 chicken pieces and cook until golden brown, turning once, about 2 minutes per side. Transfer to a serving dish and sprinkle immediately with salt. Repeat with remaining chicken, adding and heating more oil as needed.',
        step_four='Once all the chicken is plated, slowly pour the garlic oil into the lemon and parsley mixture and whisk to combine. Before serving, spoon the salmoriglio sauce liberally over the chicken.',
        user_id=1
    )
    demo5 = Recipe(
        recipe_name= 'Blackened Shrimp Tacos',
        recipe_type = 'classic',
        description='These blackened shrimp tacos make a great light lunch or dinner during spring and summer! With juicy blackened shrimp and tangy red cabbage slaw, they get to the table in no time.',
        ingredients="""2 pounds extra-large shrimp (26-30 count), peeled, cleaned, and deveined
2 teaspoons blackened seasoning
1/2 teaspoon salt, if needed
8 corn or flour tortillas
2 cups thinly sliced red cabbage
1/4 cup mayonnaise
1/2 tablespoon granulated sugar
1/4 teaspoon black pepper
1/2 tablespoon white vinegar
1 tablespoon vegetable oil, avocado oil, or grapeseed oil
1/2 cup crumbled Mexican queso fresco
1/2 cup chopped cilantro
Lime wedges""",
        avg_rating=0,
        num_reviews=0,
        step_one='Preheat the oven to 300°F. Wrap the tortillas in foil and place them on a baking sheet or pan.',
        step_two='Season the shrimp: In a large bowl combine the shrimp, blackening seasoning, and salt.',
        step_three='Cook the shrimp: In a large nonstick skillet over medium-high heat, add in the oil. Once it’s hot, add the shrimp. Cook, until the shrimp have slightly browned on the outside and they have cooked through turning pink throughout, flipping halfway through, 2 to 3 minutes per side.',
        step_four='Assemble the tortillas: Place the tortillas in a serving platter or plates. Divide the shrimp and slaw equally between the tortillas. Garnish with cheese and cilantro. Serve with lime wedges. Serve.',
        user_id=1
    )


    db.session.add(demo)
    db.session.add(demo2)
    db.session.add(demo3)
    db.session.add(demo4)
    db.session.add(demo5)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_recipes():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.recipes RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM recipes")

    db.session.commit()
