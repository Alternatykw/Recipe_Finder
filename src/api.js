export const searchRecipes = async (searchTerm) => {
  try {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${searchTerm}&app_id=a14c7f56&app_key=5c4c979e2c9cdffae08bb347d9dcd00b`
    );

    const data = await response.json();
    console.log('API response:', data);

    return {
      hits: data.hits,
      nextPage: data._links?.next?.href || null, 
    };
  } catch (error) {
    console.error('Error searching for recipes:', error);
    return {
      hits: [],
      nextPage: null,
    };
  }
};
