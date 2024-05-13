export const searchRecipes = async (searchTerm) => {
    try {
      const response = await fetch(`https://api.edamam.com/search?q=${searchTerm}&app_id=a14c7f56&app_key=5c4c979e2c9cdffae08bb347d9dcd00b`);
      const data = await response.json();
      console.log('API response:', data);
      return data.hits;
    } catch (error) {
      console.error('Error searching for recipes:', error);
      return [];
    }
  };