import styled, { css } from "styled-components";

export const Container = styled.button`
  padding: 1rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  border: none;
  border-radius: 0.5rem;

  outline: none;

  transition-duration: 0.4s;

  ${({ theme }) => css`
    font-weight: bold;

    background-color: ${theme.COLORS.BLUE_DARK};

    &:hover {
      background-color: ${theme.COLORS.BLUE};
      cursor: pointer;
    }
  `};
`;
