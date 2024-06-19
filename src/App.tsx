import "./App.css";
import picture from "./assets/images/image-omelette.jpeg";
import RecipePage, {
  RecipePageProps,
} from "./components/RecipePage/RecipePage";

const recipe: RecipePageProps = {
  picture: picture,
  title: "Simple Omelette Recipe",
  description:
    "An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.",
  preparationTime: 5,
  cookingTime: 5,
  ingredients: [
    "2-3 large eggs",
    "Salt, to taste",
    "Pepper, to taste",
    "1 tablespoon of butter or oil",
    "Optional fillings: cheese, diced vegetables, cooked meats, herbs",
  ],
  instructions: [
    {
      title: "Beat the eggs",
      description:
        "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.",
    },
    {
      title: "Heat the pan",
      description:
        "Place a non-stick frying pan over medium heat and add butter or oil.",
    },
    {
      title: "Cook the omelette",
      description:
        "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.",
    },
    {
      title: "Add fillings (optional)",
      description:
        "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
    },
    {
      title: "Fold and serve",
      description:
        "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.",
    },
    {
      title: "Enjoy",
      description: "Serve hot, with additional salt and pepper if needed.",
    },
  ],
  nutrition: {
    calories: 277,
    protein: 20,
    fat: 22,
    carbs: 0,
  },
};

function App() {
  return <RecipePage {...recipe} />;
}

export default App;
