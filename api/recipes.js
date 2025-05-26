// api/recipes.js (or .ts)
import fetch from 'node-fetch'; // You might not need this explicitly in modern Node.js/Vercel environments

export default async function handler(req, res) {
  // Get the searchTerm from the query parameters sent by your frontend
  const { q } = req.query;

  // Access API keys from environment variables
  const APP_ID = "a14c7f56";
  const APP_KEY = "5c4c979e2c9cdffae08bb347d9dcd00b";

  if (!q) {
    return res.status(400).json({ error: 'Search term (q) is required.' });
  }

  if (!APP_ID || !APP_KEY) {
    console.error('Missing Edamam API ID or Key. Please check Vercel Environment Variables.');
    return res.status(500).json({ error: 'Server configuration error: API keys missing.' });
  }

  try {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?q=<span class="math-inline">\{q\}&app\_id\=</span>{APP_ID}&app_key=${APP_KEY}&type=public&from=0&to=20`);

    if (!response.ok) {
      // Handle non-200 responses from Edamam API
      const errorData = await response.json();
      console.error('Error from Edamam API:', response.status, errorData);
      return res.status(response.status).json({ error: 'Failed to fetch recipes from external API.', details: errorData });
    }

    const data = await response.json();
    // You might want to restructure the data before sending it to the client
    // For example, if data.hits contains everything you need:
    res.status(200).json(data.hits);
  } catch (error) {
    console.error('Error in Vercel API route:', error);
    res.status(500).json({ error: 'Internal server error while searching for recipes.' });
  }
}