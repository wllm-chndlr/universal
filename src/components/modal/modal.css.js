import styled from 'styled-components';

export const Button = styled.button`
  -webkit-appearance: none;
  background-color: #212424;
  border-radius: 5px;
  border: none;
  color: #e8e8e8;
  border: 1px solid #757575;
  cursor: pointer;
  font-family: inherit;
  font-size: 1.3rem;
  font-weight: 500;
  margin: 4rem 0 2rem;
  padding: 1rem 2rem;
  text-transform: uppercase;
  transition: 0.2s background-color ease;

  &:active,
  &:focus {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.05);
    outline: none;
  }

  &:hover {
    // background: #41c7c7;
    color: #41c7c7;
    border: 1px solid #757575;
  }

  & + & {
    margin-left: 1rem;
  }
`;

export const Close = styled.button`
  -webkit-appearance: none;
  background-color: transparent;
  border: none;
  font-family: inherit;
  font-size: 4rem;
  font-weight: normal;
  padding: 1rem;
  line-height: 4rem;
  position: absolute;
  top: 0;
  right: 0;
  color: #fff;
`;
