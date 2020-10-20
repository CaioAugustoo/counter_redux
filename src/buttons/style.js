import styled from 'styled-components';

export const ButtonStyled = styled.button`
  padding: 0.4375rem 10px;
  font-size: 1.2rem;
  border: 0.125rem solid var(--first-purple);
  background: var(--third-purple);
  color: black;
  outline: none;
  cursor: pointer;
  transition: opacity .3s ease;
  margin: 1.875rem 1.25rem;

  &:hover {
    opacity: 0.7;
  }
`;