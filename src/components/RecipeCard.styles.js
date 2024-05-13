import styled from 'styled-components';
import { Card } from '@mui/material';

export const StyledCard = styled(Card)`
  width: 250px;
  margin: 10px;
  background-color: #eee !important;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: solid #ccc;
  border-width: 1px 0 1px 0;
`;

export const FlexItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 1rem;
  margin: 0.5rem 0;
  &:first-child {
    border-right: 2px solid #ccc;
  }
`;
