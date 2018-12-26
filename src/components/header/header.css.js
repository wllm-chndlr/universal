import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem;

  a {
    color: #e8e8e8;
    transition: color 0.2s ease;
    text-decoration: none;

    &:hover {
      color: #41c7c7;
    }
  }
`;
