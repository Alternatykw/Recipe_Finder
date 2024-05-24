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

export const PercentageBarContainer = styled.div`
  display: flex;
  width: 100%;
  height: 1rem;
  margin-top: 1rem;
  background-color: #f0f0f0;
  border-radius: 0.5rem;
  overflow: hidden;
`;

export const PercentageBar = styled.div`
  height: 100%;
  background-color: ${(props) => props.color};
  width: ${(props) => props.width};
`;

export const IndicatorCircle = styled.div`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  margin-right: 8px;
`;
