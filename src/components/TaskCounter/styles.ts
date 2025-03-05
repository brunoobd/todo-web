import styled, { css } from "styled-components";

export type TitleVariant = "DEFAULT" | "PURPLE";

type TitleType = {
  variant: TitleVariant;
};

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Title = styled.p<TitleType>`
  color: ${({ theme, variant }) =>
    variant === "DEFAULT" ? theme.COLORS.BLUE : theme.COLORS.PURPLE};
  font-weight: bold;
`;

export const Counter = styled.div`
  padding: 0.125rem 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 1rem;

  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const CounterText = styled.p`
  font-weight: bold;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.SMALL}rem;
  `};
`;
