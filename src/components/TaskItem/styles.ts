import styled, { css } from "styled-components";
import { Check as CheckIcon } from "@phosphor-icons/react";

type TaskItemVariant = {
  $completed: boolean;
};

export const Container = styled.div<TaskItemVariant>`
  width: 100%;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;

  border-radius: 0.5rem;

  ${({ theme, $completed }) => css`
    border: 0.0625rem solid ${$completed ? "transparent" : theme.COLORS.GRAY_400};

    background-color: ${theme.COLORS.GRAY_500};
  `}
`;

export const Title = styled.p<TaskItemVariant>`
  width: 100%;

  ${({ theme, $completed }) => css`
    text-decoration: ${$completed ? "line-through" : "none"};
    color: ${$completed ? theme.COLORS.GRAY_300 : theme.COLORS.GRAY_100};
  `}
`;

export const RadioButton = styled.div<TaskItemVariant>`
  min-width: 1.5rem;
  min-height: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 100%;

  ${({ theme, $completed }) => css`
    border: 0.125rem solid
      ${$completed ? theme.COLORS.PURPLE_DARK : theme.COLORS.BLUE};
    background-color: ${$completed ? theme.COLORS.PURPLE_DARK : "transparent"};

    &:hover {
      cursor: pointer;
      border-color: ${$completed ? theme.COLORS.PURPLE : theme.COLORS.BLUE_DARK};
      background-color: ${$completed ? theme.COLORS.PURPLE : "transparent"};
    }
  `}

  transition-duration: 0.4s;
`;

export const Check = styled(CheckIcon).attrs(({ theme }) => ({
  weight: "bold",
}))`
  width: 100%;
  height: 100%;

  border-radius: 100%;
`;
