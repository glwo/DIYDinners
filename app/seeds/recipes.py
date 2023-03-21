from app.models import db, Recipe, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_recipes():
    demo = Recipe(
        recipe_name= 'Bhindi Masala',
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
        user_id=1,
        first_name="Demo",
        last_name="Lition"
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
        user_id=4,
        first_name="Austin",
        last_name="Smith"
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
        user_id=5,
        first_name="Alex",
        last_name="Gurley"
    )
    demo4 = Recipe(
        recipe_name= 'Crispy Lemon Chicken Cutlets',
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
        user_id=1,
        first_name="Demo",
        last_name="Lition"
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
        user_id=1,
        first_name="Demo",
        last_name="Lition"
    )
    demo6 = Recipe(
        recipe_name= 'Vegan Cacio e Pepe',
        recipe_type = 'vegetarian',
        description='Classic cacio e pepe is made using Pecorino cheese, spaghetti or bucatini pasta, sometimes butter, and always a generous sprinkling of black pepper. With both cheese and butter, it’s not exactly a vegan-friendly dish… until now! This quick and easy vegan recipe uses nutritional yeast, creamy cashew butter, miso paste, and spicy black pepper to mimic the traditional dish.',
        ingredients="""12 ounces bucatini pasta
1 1/2 teaspoons kosher salt, plus more to taste
1 teaspoon fresh, coarsely ground black pepper, plus more to taste
1/3 cup unsweetened cashew butter (raw and untoasted, if possible)
1/4 cup nutritional yeast
2 teaspoons miso""",
        avg_rating=0,
        num_reviews=0,
        step_one='Bring a large pot of water to a boil. Add the pasta and salt. Cook until al dente (according to the package directions). Reserve 1 1/2 cups of pasta water and drain the pasta in a colander.',
        step_two='Meanwhile, add the coarsely ground pepper to a large, deep skillet over medium-low heat and toast until fragrant, about a minute. Transfer the pepper to a medium bowl. You’ll add the pasta back to this skillet, so make sure it is large enough.',
        step_three='Add the cashew butter, nutritional yeast, and miso to the bowl with the pepper. While whisking, slowly pour in 1 cup of the reserved, hot pasta water into the cashew butter mixture. Whisk until creamy and well combined.',
        step_four='Add the drained pasta and sauce to the skillet over medium-low heat. Stir and toss constantly until the sauce thickens—this may take a few minutes. If this sauce becomes too thick, add more pasta water, a small splash at a time. Season with salt to taste and garnish with more pepper. Serve immediately.',
        user_id=2,
        first_name="Marnie",
        last_name="Higgins"
    )
    demo7 = Recipe(
        recipe_name= 'Chicken Sausage and Pasta Skillet',
        recipe_type = 'pasta',
        description='This pasta with chicken sausage dish is my go-to dinner when I need an easy dinner. All I need is a bit of oil and 5 basic ingredients: chicken sausage, pasta, marinara sauce, spinach and cheese. That’s it. Depending on the amount of time I have to prepare dinner, I may throw in some diced peppers and zucchini to make it more filling.',
        ingredients="""1 1/2 tablespoons olive oil
1 1/2 cups (180g) diced red onions
2 cloves garlic, minced
1 (28-ounce) can (795g) crushed tomatoes
1 tablespoon honey or sugar
1/4 cup (5g) chopped fresh parsley
1/4 cup (5g) chopped fresh basil
1 teaspoon dried oregano
8 ounces (225g) penne pasta
1 1/2 tablespoons olive oil
1 pound (450g) chicken sausage, cut into bite-sized pieces
4 to 6 cups (100 to 150g) baby spinach
1 1/2 cups (140g) shredded mozzarella cheese
Chopped parsley, to garnish""",
        avg_rating=0,
        num_reviews=0,
        step_one='Heat 1 1/2 tablespoons of olive oil in a large oven-safe sauté pan over medium-high heat. Add the onions and cook for 3 to 4 minutes, stirring occasionally, until the onions are softened and translucent. Add the minced garlic and cook for 30 seconds. Add crushed tomatoes and cook until the sauce starts bubbling at a rapid simmer, 1 to 2 minutes.',
        step_two='Bring 2 quarts of water to boil in a pot. Season with a generous pinch of salt. Once the water boils, add pasta and cook for 7 to 9 minutes, depending on how you like your pasta. Drain and run pasta under cold water. Set aside.',
        step_three='Heat 1 1/2 tablespoons of olive oil in a large skillet over medium-high heat. Add chopped sausage and cook for 5 to 7 minutes, until the meat is cooked through. Add pasta sauce and heat for a minute. Add spinach and fold it into the sauce. The spinach should start wilting in 30 seconds.',
        step_four='Add pasta to the pan and stir until combined. Top with mozzarella cheese. Put the skillet in the oven and bake for 10 to 12 minutes until the cheese is bubbly and slightly browned at the edges. For a quicker alternative, skip the oven and just stir the cheese into the pasta until the cheese is melted.',
        user_id=2,
        first_name="Marnie",
        last_name="Higgins"
    )
    demo8 = Recipe(
        recipe_name= 'Easy Grilled Pork Chops',
        recipe_type = 'classic',
        description="A smart choice? Brine your pork chops before throwing them on the hot grill! They’ll stay so juicy and tender. We'll show you how.",
        ingredients="""4 1/2 cups pork chop brine
4 bone-in pork rib chops
1 1/2 teaspoons Morton's kosher salt
1 teaspoon ground cumin
1/2 teaspoon freshly ground black pepper
1/4 teaspoon sweet paprika
Pinch cayenne pepper, optional
1 tablespoon vegetable oil, plus more for grill""",
        avg_rating=0,
        num_reviews=0,
        step_one='In a large pot or bowl, add the cooled brine and the pork chops, making sure all of them are fully submerged in the brine. You can place a heavy plate on top to help them stay submerged. Cover and refrigerate for 1 hour.',
        step_two='Use a grill brush to clean the grill grates. Saturate a wad of paper towel generously with vegetable oil and rub it along the grates. If using a gas grill, heat one side to 400°F or high and keep the burners off on the other side. If using a charcoal grill, spread the hot coals on one half of the grill and leave the other half empty.',
        step_three='In a small bowl, combine the salt, cumin, black pepper, paprika, and cayenne pepper, if using. Use your hands to rub both sides of the pork chops with the oil. Sprinkle and massage the spice rub all over them.',
        step_four='When the grill reaches 400°F, place the pork chops on the hot side of the grill and press down firmly with a grill spatula. Sear for 4 minutes without moving them. Transfer the grilled pork chops onto a platter and cover it loosely with foil. Rest them for 5 minutes before serving, which will allow the juices to settle down.',
        user_id=3,
        first_name="Bobbie",
        last_name="Coffee"
    )
    demo9 = Recipe(
        recipe_name= 'Philly Cheesesteak Sloppy Joes',
        recipe_type = 'classic',
        description='Take the best of two classic sandwiches—sloppy joes and Philly cheesesteaks—to make these cheesy, meaty, and saucy cheesesteak sloppy joes!',
        ingredients="""2 tablespoons unsalted butter
1 small white onion, chopped
1 green bell pepper, seeded and chopped
1 pound lean beef, 90/10 blend
1/2 cup beef stock
1/4 cup ketchup
2 tablespoons Worcestershire sauce
1/2 teaspoon garlic powder
1/2 teaspoon kosher salt
1/2 teaspoon black pepper
12 slices provolone cheese, divided
6 brioche buns, store-bought or homemade""",
        avg_rating=0,
        num_reviews=0,
        step_one='In a large skillet set over medium heat, melt the butter. Add the onions and bell peppers. Cook until soften, 6 to 7 minutes, stirring frequently. The vegetables shouldn’t brown at this point, just soften.',
        step_two='Add the ground beef and use a wooden spoon to break it up into small pieces as it cooks. Cook until the meat is browned, 5 to 6 minutes.',
        step_three='Stir in the stock, ketchup, Worcestershire sauce, garlic powder, salt, and black pepper. Turn the heat down to low and simmer for 4 to 5 minutes until the mixture thickens. Stack 6 slices provolone cheese on a cutting board and use a chef’s knife to cut them into 1/2-inch pieces. Right before serving, stir in the cut cheese.',
        step_four='Toast the brioche buns in a toaster oven or toaster. Lay the remaining 6 slices provolone cheese on each brioche bun half. Top the cheese with heaping spoonfuls of the sloppy joe mixture and the top bun. Serve warm.',
        user_id=3,
        first_name="Bobbie",
        last_name="Coffee"
    )
    demo10 = Recipe(
        recipe_name= 'Brownie Banana Bread',
        recipe_type = 'desert',
        description='What could be better than homemade brownies or banana bread? Both desserts in one! Fold fudgy brownie chunks into tender banana bread for a treat that’ll have everyone asking for more.',
        ingredients="""10 tablespoons (140g) unsalted butter
3/4 cup plus 2 tablespoons (85g) natural unsweetened cocoa powder
1 1/4 cups (250g) sugar
1/4 teaspoon salt
2 eggs, straight from the refrigerator
1 teaspoon vanilla extract
1/2 cup (65g) all-purpose flour
1/3 cup (76g) unsalted butter
3 medium very ripe bananas, peeled (1 1/4 to 1 1/2 cups mashed)
2/3 cup (137g) sugar
1 large egg
1 teaspoon vanilla extract
1/4 teaspoon salt
1 1/2 cups (205g) all-purpose flour
1/2 teaspoon baking soda (not baking powder)""",
        avg_rating=0,
        num_reviews=0,
        step_one='Line the bottom of an 8 x 8-inch square pan with parchment or foil, leaving a few inches of excess hanging on either side to create flaps. Grease the pan; if using foil, grease the foil, too.',
        step_two='Remove the pan from heat. Add the cocoa powder and whisk until smooth. Whisk in the sugar and salt; the mixture will be a lumpy, stiff mess, but that’s fine.',
        step_three='Bake until a toothpick inserted in the center of the pan comes out with no wet streaks, about 25 minutes. Cool completely on a wire rack, then cover with foil and refrigerate for at least 4 hours.',
        step_four='Bake the loaf until the center of the top springs back when you gently press it with your fingertip, about 1 hour. Set the pan on a cooling rack and let the bread cool in the pan for 10 minutes. Turn the bread out of the pan and cool completely.',
        user_id=5,
        first_name="Alex",
        last_name="Gurley"
    )
    demo11 = Recipe(
        recipe_name= 'S’mores Cereal Bars',
        recipe_type = 'desert',
        description='This recipe takes all the good parts of s’mores—gooey toasted marshmallows, rich chocolate, and graham crackers—and serves them in a non-traditional way. They’re just as good, only slightly different.',
        ingredients="""Cooking spray, for the pan
2 (10-ounce) bags mini marshmallows, divided
1/2 cup (113g) unsalted butter
1/2 teaspoon salt
9 cups graham cracker cereal, like Golden Grahams
1 1/2 cups semisweet chocolate chips, divided
""",
        avg_rating=0,
        num_reviews=0,
        step_one='In a large skillet set over medium heat, melt the butter. Add the onions and bell peppers. Cook until soften, 6 to 7 minutes, stirring frequently. The vegetables shouldn’t brown at this point, just soften.',
        step_two='In a large bowl, add the graham cracker cereal. Scrape in the melted marshmallows and stir until evenly combined. The mixture should have cooled just a bit. Stir in 1 cup chocolate chips. They will melt a little, but that’s okay!',
        step_three='Scrape the mixture into the prepared pan. Use your hands to press it into an even layer. Sprinkle the 1/2 cup marshmallows on top, and if you’d like, use a kitchen torch to lightly toast them: Ignite your torch. Hold the flame about 4 inches from the marshmallows. Move the flame across the surface of the marshmallows until they get toasty and brown.',
        step_four='Sprinkle the remaining 1/2 cup chocolate chips on top. Cool for at least 30 minutes then cut it into square bars.',
        user_id=2,
        first_name="Marnie",
        last_name="Higgins"
    )
    demo12 = Recipe(
        recipe_name= 'Carrot Maqluba',
        recipe_type = 'classic',
        description='Maqluba is a traditional Palestinian dish made of rice, meat and fried vegetables, most often eggplants (in summer) or cauliflower (in winter), although some like to combine both, and add carrots as well. There are probably as many variations of this dish as there are families. A very popular, easy version is the one made with only carrots. Although maqluba is usually perceived as a time-consuming dish — you typically make broth, fry all the vegetables, assemble in layers and so on — this version uses a boneless, tender cut of meat, ready-made broth and a single pot. The whole dish is quick, and easy enough that you can make it on any weeknight in under an hour.',
        ingredients="""1
pound jasmine or other long-grain rice (about 2¼ cups)
2
teaspoons kosher salt, plus more as needed
1
teaspoon black pepper
1
teaspoon ground cinnamon
½
teaspoon ground turmeric
½
teaspoon ground cumin
4
tablespoons olive oil or ghee (or a combination)
1
pound boneless rib-eye steak, cut into bite-size cubes
1
yellow onion, halved and sliced into ½-inch strips
14
ounces carrots (about 4 medium-large), peeled and cut into 2½-by-½-inch matchsticks
4
cups good-quality store-bought or homemade chicken broth
¼ to ½
cup toasted or fried slivered almonds
""",
        avg_rating=0,
        num_reviews=0,
        step_one='Wash the rice until the water runs clear. Add rice to a bowl with water to cover and leave to soak for 15 minutes, then drain. To the drained rice, add 1 teaspoon each salt and pepper, plus all the spices. Mix to combine, then set aside.',
        step_two='Add the carrots and cook, stirring regularly, until carrots are glossy and just starting to soften, about 3 to 5 minutes.',
        step_three='Cook for 10 minutes, then reduce the heat to low, remove the plate but return the lid, and simmer until the rice is fully cooked with no remaining bite, about 5 to 10 minutes. Remove from the heat, cover the bottom of the lid with a tea towel or kitchen paper towels and cover again. Set aside to rest for 10 to 15 minutes.',
        step_four='To serve, remove the lid and place a large, inverted serving platter over the pot of rice. Using both hands, flip the pot, and slowly lift to reveal a beautiful cake-shaped dish. Garnish with toasted almonds and serve.',
        user_id=2,
        first_name="Marnie",
        last_name="Higgins"
    )
    demo13 = Recipe(
        recipe_name= 'Vegetarian Reuben Sandwich',
        recipe_type = 'vegetarian',
        description='The Reuben sandwich — corned beef, sauerkraut, Swiss cheese and Russian dressing on rye bread — has inspired many meat-free versions. Tempeh, seitan, vegetables and mushrooms have stood in for the corned beef, but they’re not really needed, because outsize quantities of the other traditional elements make a punchy, gooey sandwich on their own. Both sides of the buttered rye get melted Swiss. The mountain of sauerkraut doesn’t warm long enough to lose its crunch.',
        ingredients="""1
tablespoon mayonnaise
1
tablespoon ketchup
½
teaspoon hot sauce, or to taste
¼
teaspoon ground coriander
Salt and pepper
2
slices rye bread
2
slices Swiss cheese
½
tablespoon unsalted butter
¼
cup thinly sliced white onion or shallot
½
cup very well drained and squeezed sauerkraut
1
dill pickle, sliced, or 2 dill pickle sandwich slices
""",
        avg_rating=0,
        num_reviews=0,
        step_one='In a small bowl, stir together the mayonnaise, ketchup, hot sauce and coriander. Season with salt and pepper. Taste and adjust pepper and hot sauce until the dressing is just a bit too intense, as it will be tamed by the sandwich fillings.',
        step_two='Spread the dressing on both slices of bread. Reserve the bowl and any remaining dressing. Top each bread slice with a slice of Swiss cheese. In a large skillet, melt the butter over medium-low. Add the bread, cheese side up. Swirl the bread slices around the skillet to mop up the butter.',
        step_three='Cover the skillet and cook until the cheese is melted and the bread is golden, 4 to 5 minutes. Meanwhile, add the onion and a pinch of salt to the reserved bowl and stir to coat in the residual dressing.',
        step_four='Top one slice of bread with the sauerkraut, pickles and onions. Flip the other slice on top of the fillings and press lightly to adhere. Cook for just a minute on each side until the sandwich has melded. Cut and eat warm.',
        user_id=3,
        first_name="Bobbie",
        last_name="Coffee"
    )
    demo14 = Recipe(
        recipe_name= 'Spaghetti and Meatballs',
        recipe_type = 'classic',
        description='Spaghetti and meatballs is such a comfort food classic. The meatballs are made from ground beef and Italian sausage and served with a sauce made with mushrooms, onions, basil, and Parmesan.',
        ingredients="""1 pound ground beef (at least 16% fat)
1/2 pound fresh bulk Italian-style pork sausage
2 tablespoons finely chopped basil
2 tablespoons finely chopped Italian parsley
1/2 cup finely chopped cremini brown mushrooms
2 large eggs
3/4 cup unseasoned breadcrumbs
1/4 cup grated Parmesan-Romano cheese blend
2 teaspoons sea salt
2 teaspoons fresh ground black pepper
1 tablespoon extra virgin olive oil
1 splash red wine
1 1/2 pounds dry 100% semolina spaghetti, thin spaghetti, or bucatini
Salt, for the pasta water
""",
        avg_rating=0,
        num_reviews=0,
        step_one='In a large bowl, use your hands to mix the beef, Italian sausage, basil, parsley, mushrooms, eggs, breadcrumbs, cheese, salt, and pepper. Do not over-mix or the meatballs will be tough.Use a small melon baller, cookie scoop, or heaping teaspoon to form 1-inch round meatballs. Roll and compress into tight balls, but do not overwork the mixture.',
        step_two='In a separate wide, shallow pan, heat the olive oil on medium-high heat. Brown the meatballs on all sides, about 2 to 3 minutes. Depending on pan size you may need to brown 2 batches of the meatballs. Cook them in a single layer; do not crowd the pan by stacking them.',
        step_three='While the sauce is simmering, bring a large pot with 4 quarts of salted water to a boil (1 tablespoon of salt for every 2 quarts of water). When the water returns to a boil add the pasta to the pot. Leave the pot uncovered while you cook the pasta on high heat with a vigorous boil. Put a timer on for 8 to 10 minutes, or according to package directions for al dente pasta (cooked but still a little firm). Drain.',
        step_four='To serve, place a thin layer of sauce on each plate, add the pasta, add sauce and meatballs, and then sprinkle with grated Parmesan-Romano cheese.',
        user_id=3,
        first_name="Bobbie",
        last_name="Coffee"
    )
    demo15 = Recipe(
        recipe_name= 'Grilled Pork Tenderloin',
        recipe_type = 'classic',
        description='Grilled pork tenderloin topped with a tasty orange marmalade glaze.',
        ingredients="""1/3 cup soy sauce (use gluten-free soy sauce for gluten-free version)
1/3 cup orange marmalade
1/3 cup honey
1 tablepoon rice wine vinegar plus 1 teaspoon
Pinch crushed red pepper flakes
1 pound pork tenderloin
2 scallions, thinly sliced (optional)
Olive oil (for grill)""",
        avg_rating=0,
        num_reviews=0,
        step_one='In a small saucepan, bring the soy sauce, marmalade, honey, rice wine vinegar, and red pepper flakes to a simmer over medium heat. Remove from the flame and let cool. Reserve half of the marinade for serving as a sauce with the finished tenderloin. With the remaining half of the marinade, marinate the tenderloin for 1 hour.',
        step_two='Remove the tenderloin from the marinade and coat with olive oil. Place on the hot side of the grill, with the narrower end of the tenderloin more toward the cool side of the grill. As soon as the tenderloin gets grill marks on one side (a minute or two), turn it to get grill marks on another side. Continue until all sides are lightly seared.',
        step_three='Move the tenderloin to the cool side of the grill. Cover and cook a few minutes more, until the internal temperature of the tenderloin reaches 140°F (no higher). Remove from heat.',
        step_four='If you have let the temp get too high above 140°F, you may need to slice the pork immediately or the meat will continue to cook as it rests and become overcooked. If you have taken it out in time, tent the tenderloin with foil and let it rest 10 minutes.',
        user_id=5,
        first_name="Alex",
        last_name="Gurley"
    )
    demo16 = Recipe(
        recipe_name= 'Pancit Bihon',
        recipe_type = 'classic',
        description='Pancit bihon is a classic Filipino dish of stir-fried rice noodles, crunchy veggies, pork, and a savory sauce. This recipe is worthy of a celebration but easy enough for a family dinner.',
        ingredients="""8 ounces dried pancit bihon noodles
2 tablespoons vegetable oil
2 cloves garlic, minced
1 medium white or yellow onion, chopped
1 large rib celery, chopped
2 green onions, chopped, white and green parts divided
1 tablespoon patis (fish sauce)
1 medium carrot, peeled and julienned
2 cups green beans, edges trimmed, sliced into 1-inch pieces
3 cups shredded green cabbage
1 1/2 cups broth, from cooking the pork
2 tablespoons toyo (soy sauce)
1 tablespoon calamansi juice (or lemon juice)
1 pinch salt
1/4 teaspoon ground black pepper""",
        avg_rating=0,
        num_reviews=0,
        step_one='In a medium-sized stockpot, combine the pork with about 3 cups of water, or enough to cover the meat. Sprinkle with salt and ground pepper. Bring to a simmer over medium heat, then cover and adjust the heat to maintain a simmer. Cook until tender, about 45 minutes. ',
        step_two='Place the dry noodles in a large bowl. Pour some water into a small bowl, and use your fingers to sprinkle water over the noodles until they become damp. Continue sprinkling water until the noodles get soft and pliable but not mushy. Set aside.',
        step_three='Place a wok or large skillet over medium heat. Add the oil. When the oil is hot, add the garlic, onion, celery, and the white parts of the green onion and stir fry until soft and fragrant, for about 2 minutes.',
        step_four='Sprinkle salt and pepper all over, to taste. Garnish with the green parts of the green onions. Serve warm with a dipping sauce of patis mixed with calamansi juice.',
        user_id=5,
        first_name="Alex",
        last_name="Gurley"
    )
    demo17 = Recipe(
        recipe_name= 'Vegetarian Pad Thai',
        recipe_type = 'vegetarian',
        description='Salty, sweet, and tangy vegetarian pad thai is easy to cook at home. A delicious combination of chewy noodles, tofu, and veggies with lots of crunchy toppings makes a dinner everyone will love.',
        ingredients="""1 (16-ounce) pack firm or extra-firm tofu, cubed
3 to 4 tablespoons vegetable or canola oil
2 large eggs
4 cloves garlic, minced
1 large shallot, minced
1 medium carrot, shredded (about 1 cup)
1/4 head cabbage, shredded
1 cup mung bean sprouts
3 green onions, trimmed and julienned into 2-inch long pieces
1/4 cup peanuts, roughly chopped
Salt, if needed, to taste
1 bunch fresh cilantro, leaves roughly chopped
2 limes, quartered
1/4 cup peanuts, roughly chopped
1 green onion, sliced
Red chili flakes, to taste""",
        avg_rating=0,
        num_reviews=0,
        step_one='Add all of the sauce ingredients to a medium bowl or large measuring pitcher and whisk to combine and dissolve the sugar. Taste, adding more sugar or salt if needed. It should be salty, tangy, and lightly sweet. Set aside until you are ready to stir-fry your noodles.',
        step_two='Place a few layers of paper towels onto a sturdy plate and place the cubed tofu on top in a single layer. Add another few layers of paper towels on top, then place a sturdy plate on top. Give it a light press until some liquid is released from the tofu.',
        step_three='Heat up a large wok, a 14 to 16-inch, deep non-stick frying pan, or a large electric skillet to medium-high and add 2 tablespoons of oil. Once hot, add the prepared tofu. Let one side sear for about 1 minute or until it is golden. Use tongs or a spatula to flip your tofu pieces so 2 sides are golden.',
        step_four='Add the drained rice noodles and toss with the vegetables. Give the sauce a stir and pour it into the frying pan. Serve the pad thai hot with fresh cilantro, lime wedges, chopped peanuts, green onions, and red pepper flakes for topping.',
        user_id=1,
        first_name="Demo",
        last_name="Lition"
    )
    demo18 = Recipe(
        recipe_name= 'Shrimp and Chorizo Chowder',
        recipe_type = 'classic',
        description='Savory Spanish chorizo and plump shrimp meet smoked paprika for an easy chowder recipe with a broth so good, you’ll be licking the bowl.',
        ingredients="""4 ounces Spanish dry-cured chorizo
1 tablespoon olive oil
1/2 yellow onion, diced
1 carrot, peeled and diced
2 cloves garlic, minced
1 russet potato, peeled and diced
2 teaspoons Spanish smoked paprika (regular paprika will work also)
1/2 teaspoon kosher salt
1/4 teaspoon black pepper
1 (15-ounce) can diced tomatoes
4 cups chicken stock
1 cup half and half
1 cup frozen corn (no need to defrost)
1 pound large shrimp, peeled and deveined
Fresh parsley, for garnish
Baguette toasts, for dipping""",
        avg_rating=0,
        num_reviews=0,
        step_one='In a large pot over medium heat, add olive oil and cubed chorizo. Cook for a few minutes until the chorizo is browning slightly and starting to render some fat. Remove the chorizo from the pot with a slotted spoon so it doesn’t burn.',
        step_two='Add onions, carrot, and garlic to the pot. Cook, stirring occasionally, until the vegetables soften slightly, 3-4 minutes. Then add potato, paprika, salt, and pepper. Stir to combine. Add the diced tomatoes and chicken stock and bring soup to a slight simmer. Return chorizo to the pot. Simmer for 15-20 minutes until potatoes are tender.',
        step_three='When potatoes are tender, turn heat very low so the soup is on the lowest of simmers. Stir in the frozen corn and half and half. At the very end add the peeled shrimp and poach for 2-3 minutes until they are opaque and pink and just cooked through.',
        step_four='Serve the chowder in big bowls with a side of toasted baguette and garnished with parsley. If you have leftover chowder, it will keep well in the fridge for a few days. Reheat gently on low heat on the stove.',
        user_id=1,
        first_name="Demo",
        last_name="Lition"
    )
    demo19 = Recipe(
        recipe_name= 'Dirt Cake',
        recipe_type = 'dessert',
        description='Make a kid’s or kid-like adult’s dream come true with these fun dirt cakes. They are a breeze to make!',
        ingredients="""15 Oreo sandwich cookies
4 ounces cream cheese, at room temperature
4 tablespoons unsalted butter, at room temperature
1/2 cup powdered sugar
1 teaspoon vanilla extract
1 1/2 cups whole milk
1 (3.9-ounce) package instant chocolate pudding mix
1 (8-ounce) container Cool Whip, thawed
18 gummy worms""",
        avg_rating=0,
        num_reviews=0,
        step_one='Add the cream cheese, butter, powdered sugar, and vanilla extract in a large bowl and use a handheld mixer to beat on medium-high speed until light and fluffy, 3 to 4 minutes. Set aside.',
        step_two='In a medium bowl, whisk the milk and pudding mix until combined and thickened. Use a rubber spatula to gently fold in the Cool Whip.',
        step_three='Scrape the pudding mixture into the cream cheese mixture, and mix until smooth and fully combined.',
        step_four='Add 2 tablespoons Oreo crumbs into the bottom of each cup. Top with about 1/4 cup pudding. Repeat until filled, ending with crumbs on top. Garnish with gummy worms.',
        user_id=1,
        first_name="Demo",
        last_name="Lition"
    )
    demo20 = Recipe(
        recipe_name= 'Super Lemony Lemon Bars',
        recipe_type = 'dessert',
        description='Writer Ariane Resnick found it hard to make friends with other queer women until she met someone on Myspace and started talking about lemons.',
        ingredients="""2 Lisbon lemons, knobby ends trimmed off
2 cups sugar
4 large eggs
1/4 teaspoon salt
1 3/4 cups (188g) all-purpose flour
3/4 cup unsalted butter, chilled and cut into cubes
1/3 cup (35g) powdered sugar, plus more for sprinkling on top
1/2 teaspoon salt
1 large egg yolk""",
        avg_rating=0,
        num_reviews=0,
        step_one='Preheat the oven to 350°F. Line the bottom of a 7x11-inch baking dish (glass or ceramic) with parchment. Then, spray it generously with cooking spray. You could use a 9x9-inch baking dish.',
        step_two='In a food processor, pulse the flour, butter, powdered sugar, and 1/2 teaspoon salt until pebbly in texture, about 30 seconds. Add the egg yolk and pulse for 10 to 15 seconds. The mixture should be crumbly and hold together when pressed between your fingers.',
        step_three='Bake the lemon bars: Bake it until set around the edges but still slightly jiggly in the center, about 25 minutes. Allow them to fully cool on your kitchen counter.',
        step_four='Serve: Sprinkle the top with powdered sugar. Cut into squares and serve. These are gooey lemon bars, so you will not get clean cuts.',
        user_id=5,
        first_name="Alex",
        last_name="Gurley"
    )



    db.session.add(demo)
    db.session.add(demo2)
    db.session.add(demo3)
    db.session.add(demo4)
    db.session.add(demo5)
    db.session.add(demo6)
    db.session.add(demo7)
    db.session.add(demo8)
    db.session.add(demo9)
    db.session.add(demo10)
    db.session.add(demo11)
    db.session.add(demo12)
    db.session.add(demo13)
    db.session.add(demo14)
    db.session.add(demo15)
    db.session.add(demo16)
    db.session.add(demo17)
    db.session.add(demo18)
    db.session.add(demo19)
    db.session.add(demo20)

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
