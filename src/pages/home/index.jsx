import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipe-item";

export default function Home() {
  const { recipeList, loading } = useContext(GlobalContext);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen text-white text-2xl font-bold">
        Loading... Please wait!
      </div>
    );

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => (
          <RecipeItem key={item.id} item={item} />
        ))
      ) : (
        <div className="flex flex-col items-center justify-center text-center min-h-[60vh] px-6">
          <h1
            className="lg:text-5xl text-5xl font-black text-white drop-shadow-1xl"
            style={{
              fontFamily: "'Georgia', serif",
              letterSpacing: "1px",
            }}
          >
            🍽️ Discover Your Next Favorite Meal
          </h1>

          <p
            className="mt-6 lg:text-2xl text-lg text-gray-200 max-w-3xl leading-relaxed italic"
            style={{
              fontFamily: "'Georgia', serif",
            }}
          >
            Search thousands of delicious recipes from around the world and
            discover the perfect dish for every occasion.
          </p>

          <p
            className="mt-3 lg:text-xl text-base text-gray-300 italic"
            style={{
              fontFamily: "'Georgia', serif",
            }}
          >
            From quick snacks to gourmet meals, your next culinary adventure
            starts here.
          </p>

          <div className="mt-10">
            <span className="bg-orange-500 hover:bg-orange-600 transition duration-300 text-white px-8 py-4 rounded-full font-semibold shadow-xl">
              Start Searching Above 👆
            </span>
          </div>
        </div>
      )}
    </div>
  );
}