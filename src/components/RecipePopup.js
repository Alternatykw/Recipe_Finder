import React from 'react';
import { Dialog, DialogActions, Button, Typography } from '@mui/material';
import { StyledDialogContent, DialogItem, Column, NutritionColumn, Image } from './RecipePopup.styles';

const RecipePopup = ({ recipe, onClose }) => {
  return (
    <Dialog open={true} onClose={onClose} backgroundColor="#eee" maxWidth="md">
      <StyledDialogContent>
        <DialogItem>
          <Column>
              <Image src={recipe.image} alt={recipe.label} />
              <Typography variant="h5">{recipe.label}</Typography>
              <Typography variant="subtitle1">See full recipe on: <a href={recipe.url} target="_blank" rel="noopener noreferrer">{recipe.source}</a></Typography>
          </Column>
          <Column>
            <Typography variant="h5" color="gray" paddingBottom="0.5rem" borderBottom="2px solid #ccc">{recipe.ingredients.length} Ingredients</Typography>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient.text}</li>
              ))}
            </ul>
          </Column>
          <Column>
            <Typography variant="h5" color="gray" paddingBottom="0.5rem" borderBottom="2px solid #ccc">Nutrition</Typography>
            <DialogItem>
              <NutritionColumn>
                <h3>{Math.round(recipe.calories / recipe.yield)}</h3>
                <Typography variant="subtitle1" color="gray">
                  CALORIES/SERVING
                </Typography>
              </NutritionColumn>
              <NutritionColumn>
                <h3>{recipe.yield}</h3>
                <Typography variant="subtitle1" color="gray">
                  SERVINGS
                </Typography>
              </NutritionColumn>
            </DialogItem>
            <DialogItem>
              {/* Here you can add fats, sugars, etc. */}
            </DialogItem>
          </Column>
        </DialogItem>
      </StyledDialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default RecipePopup;
