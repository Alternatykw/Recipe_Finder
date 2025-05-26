export const searchRecipes = async (searchTerm) => {
  try {
    const response = await fetch(`/api/recipes?search=${encodeURIComponent(searchTerm)}`);
    const data = await response.json();
    return data.hits;
  } catch (error) {
    console.error('Error searching for recipes:', error);
    return [];
  }
};