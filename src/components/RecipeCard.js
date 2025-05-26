import React, { useState } from 'react';
import { CardContent, Typography } from '@mui/material';
import { StyledCard, FlexContainer, FlexItem, FixedCardMedia } from './RecipeCard.styles';
import RecipePopup from './RecipePopup';

const RecipeCard = ({ recipe }) => {
  const [openPopup, setOpenPopup] = useState(false);

  const togglePopup = () => {
    setOpenPopup(!openPopup);
  };

  return (
    <>
      <StyledCard onClick={togglePopup}> 
        <FixedCardMedia component="img" image={recipe.image} alt={recipe.label} sx={{ objectFit: 'contain' }}/>
        <CardContent>
          <Typography gutterBottom variant="h7" height="3rem" component="div">
            {recipe.label}
          </Typography>
          <FlexContainer>
            <FlexItem>
              <Typography variant="caption" color="gray">
                CALORIES
              </Typography>
              <Typography variant="body2" color="#0bb10b;">
                {Math.round(recipe.calories)}
              </Typography>
            </FlexItem>
            <FlexItem>
              <Typography variant="caption" color="gray">
                INGREDIENTS
              </Typography>
              <Typography variant="body2" color="#0bb10b;">
                {recipe.ingredientLines.length}
              </Typography>
            </FlexItem>
          </FlexContainer>
          <Typography variant="body2" color="gray" marginTop="1rem" fontWeight="bold">
            {recipe.source}
          </Typography>
        </CardContent>
      </StyledCard>
      {openPopup && ( 
        <RecipePopup
          recipe={recipe}
          onClose={togglePopup}
        />
      )}
    </>
  );
};

export default RecipeCard;
