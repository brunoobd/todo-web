import { ClipboardText as ClipboardTextIcon } from "@phosphor-icons/react";
import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 4rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  border-top: 0.0625rem solid ${({ theme }) => theme.COLORS.GRAY_400};
  border-radius: 0.5rem;
`;

export const ClipboardText = styled(ClipboardTextIcon).attrs(({ theme }) => ({
  size: 64,
  color: theme.COLORS.GRAY_300,
}))``;

export const Content = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3125rem;
`;

export const Title = styled.p`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_300};

    font-size: ${theme.FONT_SIZE.LARGE};
    font-weight: bold;
  `}
`;

export const Subtitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_300};

    font-size: ${theme.FONT_SIZE.LARGE};
  `}
`;
