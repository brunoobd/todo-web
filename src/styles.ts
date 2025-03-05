import styled, { createGlobalStyle, css } from "styled-components";

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

    ${({ theme }) => css`
      color: ${theme.COLORS.GRAY_100};
      font-size: ${theme.FONT_SIZE.MEDIUM}rem;
    `};
  }
`;

export const Container = styled.div`
  max-width: 47rem;
  margin: 0 auto;
  padding: 0 1rem;

  display: flex;
  flex-direction: column;
  gap: 4rem;

  transform: translateY(-1.6875rem);
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

export const TaskHeader = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TaskList = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
`;
