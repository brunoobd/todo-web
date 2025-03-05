import styled, { css } from "styled-components";

export const Container = styled.input`
  width: 100%;
  padding: 1rem 0 1rem 1rem;

  border-radius: 0.5rem;

  outline: none;

  ${({ theme }) => css`
    border: 0.0625rem solid ${theme.COLORS.GRAY_700};

    background-color: ${theme.COLORS.GRAY_500};

    font-size: ${theme.FONT_SIZE.LARGE}rem;

    ::placeholder {
      color: ${theme.COLORS.GRAY_300};
    }
  `};
`;
