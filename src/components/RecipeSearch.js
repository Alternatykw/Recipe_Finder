import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { SearchContainer, StyledButton, ResultsContainer, CardWrapper} from './RecipeSearch.styles';
import { searchRecipes } from '../api';
import RecipeCard from './RecipeCard';

const RecipeSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setSearchTerm('tofu');
  }, []);

  useEffect(() => {
    const handleSearch = async () => {
      const searchResults = await searchRecipes(searchTerm);
      setSearchResults(searchResults);
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
