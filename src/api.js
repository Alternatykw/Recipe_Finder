// api.js (your frontend utility file)

export const searchRecipes = async (searchTerm) => {
  try {
    // Call your Vercel API route
    // On Vercel, api/recipes.js becomes available at /api/recipes
    const response = await fetch(`/api/recipes?q=${searchTerm}`);

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error from Vercel API route:', errorData.error, errorData.details);
      // You might want to throw an error or return a specific error state
      return [];
    }

    const data = await response.json();
    console.log('API response from Vercel route:', data);

    // The data from your Vercel API route will already be `data.hits`
    // so you can just return `data` directly here.
    return data;
  } catch (error) {
    console.error('Error searching for recipes:', error);
    return [];
  }
};