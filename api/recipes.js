export default async function handler(req, res) {
    const { search } = req.query;
  
    const url = `https://api.edamam.com/search?q=${encodeURIComponent(search)}&app_id=a14c7f56&app_key=5c4c979e2c9cdffae08bb347d9dcd00b&from=0&to=20`;
  
    try {
      const apiRes = await fetch(url);
      const data = await apiRes.json();
  
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch recipes' });
    }
  }
  