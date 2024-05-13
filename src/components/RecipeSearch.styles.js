import styled from 'styled-components';
import Button from '@mui/material/Button';

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
`;

export const StyledButton = styled(Button)`
  height: 56px;
  margin-left: 10px!important;
  background-color: #4CAF50!important;
  color: white;
  &:hover {
    background-color: #8BC34A!important;
  }
`;

export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 10%;
`;
