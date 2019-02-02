import styled from 'styled-components';
import { accent } from 'constants/theme';

export const Container = styled.div`
  padding: 4rem;
  margin: 10rem 0;
  position: relative;
  text-align: center;
  color: #fff;
  width: 100%;
  transition: background-color 0.3s ease;

  background-color: ${({ isVisible }) => (isVisible ? accent : '#bada55')};
`;
