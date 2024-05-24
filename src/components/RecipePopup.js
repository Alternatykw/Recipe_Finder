import React from 'react';
import { Dialog, DialogActions, Button, Typography } from '@mui/material';
import { StyledDialogContent, DialogItem, Column, NutritionColumn, Image, PercentageBarContainer, PercentageBar, IndicatorCircle } from './RecipePopup.styles';

const RecipePopup = ({ recipe, onClose }) => {
  const totalNutrients = recipe.totalNutrients;
  const total = totalNutrients.FAT.quantity + totalNutrients.CHOCDF.quantity + totalNutrients.PROCNT.quantity + totalNutrients.SUGAR.quantity;

  const fatPercentage = (totalNutrients.FAT.quantity / total) * 100;
  const sugarPercentage = (totalNutrients.SUGAR.quantity / total) * 100;
  const proteinPercentage = (totalNutrients.PROCNT.quantity / total) * 100;
  const carbsPercentage = (totalNutrients.CHOCDF.quantity / total) * 100;

  return (
    <Dialog open={true} onClose={onClose} backgroundColor="#eee" maxWidth="md">
      <StyledDialogContent>
        <DialogItem>
          <Column>
            <Image src={recipe.image} alt={recipe.label} />
            <Typography variant="h5">{recipe.label}</Typography>
            <Typography variant="subtitle1">
              See full recipe on: <a href={recipe.url} target="_blank" rel="noopener noreferrer">{recipe.source}</a>
            </Typography>
          </Column>
          <Column>
            <Typography variant="h5" color="gray" paddingBottom="0.5rem" borderBottom="2px solid #ccc">
              {recipe.ingredients.length} Ingredients
            </Typography>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient.text}</li>
              ))}
            </ul>
          </Column>
          <Column>
            <Typography variant="h5" color="gray" paddingBottom="0.5rem" borderBottom="2px solid #ccc">
              Nutrition
            </Typography>
            <DialogItem style={{ borderBottom: '2px solid #ccc', paddingBottom: '1rem' }}>
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
              <NutritionColumn>
                <Typography variant="h6"><IndicatorCircle style={{ backgroundColor: '#ff6666' }} /> Fat</Typography>
                <Typography variant="subtitle1" color="gray">
                  {Math.round(totalNutrients.FAT.quantity / recipe.yield)} {totalNutrients.FAT.unit}/serving
                </Typography>
              </NutritionColumn>
              <NutritionColumn>
                <Typography variant="h6"><IndicatorCircle style={{ backgroundColor: '#ffcc00' }} /> Sugar</Typography>
                <Typography variant="subtitle1" color="gray">
                  {Math.round(totalNutrients.SUGAR.quantity / recipe.yield)} {totalNutrients.SUGAR.unit}/serving
                </Typography>
              </NutritionColumn>
              <NutritionColumn>
                <Typography variant="h6"><IndicatorCircle style={{ backgroundColor: '#66ccff' }} /> Protein</Typography>
                <Typography variant="subtitle1" color="gray">
                  {Math.round(totalNutrients.PROCNT.quantity / recipe.yield)} {totalNutrients.PROCNT.unit}/serving
                </Typography>
              </NutritionColumn>
              <NutritionColumn>
                <Typography variant="h6"><IndicatorCircle style={{ backgroundColor: '#ff99cc' }} /> Carbs</Typography>
                <Typography variant="subtitle1" color="gray">
                  {Math.round(totalNutrients.CHOCDF.quantity / recipe.yield)} {totalNutrients.CHOCDF.unit}/serving
                </Typography>
              </NutritionColumn>
            </DialogItem>
            <PercentageBarContainer>
              <PercentageBar color="#ff6666" width={`${fatPercentage}%`} />
              <PercentageBar color="#ffcc00" width={`${sugarPercentage}%`} />
              <PercentageBar color="#66ccff" width={`${proteinPercentage}%`} />
              <PercentageBar color="#ff99cc" width={`${carbsPercentage}%`} />
            </PercentageBarContainer>
            <Typography variant="subtitle2" color="gray">
            </Typography>
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
