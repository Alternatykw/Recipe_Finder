import React from 'react';
import { CardContent, CardMedia, Typography } from '@mui/material';
import { StyledCard, FlexContainer, FlexItem } from './RecipeCard.styles';

const RecipeCard = ({ label, image, calories, ingredients, source }) => {
  return (
    <StyledCard>
      <CardMedia component="img" image={image} alt={label} />
      <CardContent>
        <Typography gutterBottom variant="h7" height="3rem" component="div">
          {label}
        </Typography>

        <FlexContainer>
          <FlexItem>
            <Typography variant="caption" color="gray">
              CALORIES
            </Typography>
            <Typography variant="body2" color="#0bb10b;">
              {Math.round(calories)}
            </Typography>
          </FlexItem>

          <FlexItem>
            <Typography variant="caption" color="gray">
              INGREDIENTS
            </Typography>
            <Typography variant="body2" color="#0bb10b;">
              {ingredients.length}
            </Typography>
          </FlexItem>
        </FlexContainer>
        <Typography variant="body2" color="gray" marginTop="1rem" fontWeight="bold">
          {source}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

export default RecipeCard;
