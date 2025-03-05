import styled from "styled-components";

export const Container = styled.header`
  padding: 4.6875rem 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;
