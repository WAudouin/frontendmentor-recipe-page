import "./RecipePage.scss";

export interface Instruction {
  title: string;
  description: string;
}

export interface Nutrition {
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
}

export interface RecipePageProps {
  picture: string;
  title: string;
  description: string;
  preparationTime: number;
  cookingTime: number;
  ingredients: string[];
  instructions: Instruction[];
  nutrition: Nutrition;
}

const RecipePage = ({
  picture,
  title,
  description,
  preparationTime,
  cookingTime,
  ingredients,
  instructions,
  nutrition,
}: RecipePageProps) => {
  return (
    <article className="recipe-page">
      <img
        alt="recipe illustration"
        src={picture}
        className="recipe-page__picture"
      />
      <section className="recipe-page__content">
        <section className="recipe-page__presentation">
          <h1 className="recipe-page__presentation-title">{title}</h1>
          <p className="recipe-page__presentation-description">{description}</p>
        </section>
        <section className="recipe-page__timings">
          <h3>Preparation time</h3>
          <ul>
            <li>
              <b>Total</b>: Approximately {preparationTime + cookingTime}{" "}
              minutes
            </li>
            <li>
              <b>Preparation</b>: {preparationTime} minutes
            </li>
            <li>
              <b>Cooking</b>: {cookingTime} minutes
            </li>
          </ul>
        </section>
        <section className="recipe-page__ingredients">
          <h2>Ingredients</h2>
          <ul>
            {ingredients.map((ingredient, index) => {
              return <li key={index}>{ingredient}</li>;
            })}
          </ul>
        </section>
        <hr />
        <section className="recipe-page__instructions">
          <h2>Instructions</h2>
          <ol>
            {instructions.map(({ title, description }, index) => {
              return (
                <li key={index}>
                  <b>{title}</b>: {description}
                </li>
              );
            })}
          </ol>
        </section>
        <hr />
        <section className="recipe-page__nutrition">
          <h2>Nutrition</h2>
          <span>
            The table below shows nutritional values per serving without the
            additional fillings.
          </span>
          <table>
            <tr>
              <th>Calories</th>
              <td>{nutrition.calories}kcal</td>
            </tr>
            <tr>
              <th>Carbs</th>
              <td>{nutrition.carbs}g</td>
            </tr>
            <tr>
              <th>Protein</th>
              <td>{nutrition.protein}g</td>
            </tr>
            <tr>
              <th>Fat</th>
              <td>{nutrition.fat}g</td>
            </tr>
          </table>
        </section>
      </section>
    </article>
  );
};

export default RecipePage;
