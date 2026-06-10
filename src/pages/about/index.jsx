export default function About() {
  return (
    <div className="py-12 container mx-auto">
      <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 lg:p-12 text-white max-w-4xl mx-auto shadow-lg">
        <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 text-orange-400">
          About Recipe Explorer
        </h1>
        
        <p className="text-lg lg:text-xl leading-relaxed mb-6">
          Welcome to <span className="font-bold text-orange-300">Recipe Explorer</span> - your ultimate destination for discovering delicious recipes from around the world!
        </p>

        <h2 className="text-3xl font-bold mt-8 mb-4 text-yellow-300">Our Mission</h2>
        <p className="text-lg leading-relaxed mb-6">
          We believe that cooking should be accessible, fun, and inspiring for everyone. Our mission is to bring culinary joy to your kitchen by providing a vast collection of recipes spanning different cuisines, dietary preferences, and skill levels.
        </p>

        <h2 className="text-3xl font-bold mt-8 mb-4 text-yellow-300">What We Offer</h2>
        <ul className="text-lg leading-relaxed mb-6 space-y-3">
          <li>✨ <span className="font-semibold">Thousands of Recipes</span> - From quick snacks to gourmet meals</li>
          <li>🔍 <span className="font-semibold">Easy Search</span> - Find recipes by ingredients, cuisine, or dietary requirements</li>
          <li>❤️ <span className="font-semibold">Favorites</span> - Save your favorite recipes for quick access</li>
          <li>📝 <span className="font-semibold">Detailed Instructions</span> - Step-by-step guides to help you cook perfectly</li>
        </ul>

        <h2 className="text-3xl font-bold mt-8 mb-4 text-yellow-300">Why Choose Us?</h2>
        <p className="text-lg leading-relaxed mb-6">
          Recipe Explorer is designed with food enthusiasts in mind. Whether you're a beginner cook exploring new recipes or an experienced chef looking for inspiration, we've got something for everyone. Our user-friendly interface makes it easy to search, save, and organize your favorite recipes all in one place.
        </p>

        <div className="mt-10 p-6 bg-orange-400/20 rounded-lg border border-orange-400">
          <p className="text-center text-lg font-semibold">
            Start your culinary journey today and discover your next favorite meal! 🍽️
          </p>
        </div>
      </div>
    </div>
  );
}
