import styled from 'styled-components';
import { DialogContent } from '@mui/material';

export const StyledDialogContent = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const DialogItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (min-width: 800px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const Column = styled.div`
  flex: 1;
  min-width: 300px;
  padding-right: 1rem;
`;

export const NutritionColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;
