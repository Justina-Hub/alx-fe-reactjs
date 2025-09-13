import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes);
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  if (recipes.length === 0) {
    return <p>No recipes found.</p>;
  }

  return (
    <ul>
      {recipes.map((recipe) => {
        const isFavorite = favorites.includes(recipe.id);
        return (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            <button
              onClick={() =>
                isFavorite
                  ? removeFavorite(recipe.id)
                  : addFavorite(recipe.id)
              }
            >
              {isFavorite ? 'Remove Favorite' : 'Add to Favorites'}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default RecipeList;
