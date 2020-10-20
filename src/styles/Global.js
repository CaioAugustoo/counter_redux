import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
  :root {
    --first-purple: #9756FF;
    --second-purple: #583C86;
    --third-purple: #F1E9FF;
  }

  * {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: black;
  }

  body {
    font-family: 'Poppins', sans-serif;
  }
`;

export const Wrapper = styled.div`
  max-width: 75rem;
  padding: 0 0.9375rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  img {
    max-width: 100%;
    display: block;
  }
`;