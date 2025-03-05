import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  }

  body,
  input,
  button {
    font-family: "Inter", sans-serif;
    color: ${({ theme }) => theme.COLORS.GRAY_100}
  }
`;

export const Container = styled.div`
  max-width: 47rem;
  margin: 0 auto;
  padding: 0 1rem;

  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`;
