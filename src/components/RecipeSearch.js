import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { SearchContainer, StyledButton, ResultsContainer, CardWrapper} from './RecipeSearch.styles.js';
import { searchRecipes } from '../api.js';
import RecipeCard from './RecipeCard.js';

const RecipeSearch = () => {
  const [searchTerm, setSearchTerm] = useState('hot');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const handleSearch = async () => {
      const results = await searchRecipes(searchTerm);
      setSearchResults(results.hits);
    };  

    handleSearch();
  }, [searchTerm]);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setSearchTerm(e.target.value);
    }
  };

  const handleButtonClick = () => {
    setSearchTerm(document.querySelector('input').value);
  };

  return (
    <div>
      <SearchContainer>
        <TextField
          label="Search for recipes"
          variant="outlined"
          onKeyPress={handleKeyPress}
        />
        <StyledButton variant="contained" onClick={handleButtonClick}>
          Search
        </StyledButton>
      </SearchContainer>
      <ResultsContainer>
        {searchResults.length > 0 ? (
          <>
            <h2>Search Results:</h2>
            <CardWrapper>
              {searchResults.map((result, index) => (
                <RecipeCard
                  key={index}
                  recipe={result.recipe}
                />
              ))}
            </CardWrapper>
          </>
        ) : (<h1> Recipes not found 🙁</h1>)}
      </ResultsContainer>
    </div>
  );
};

export default RecipeSearch;
