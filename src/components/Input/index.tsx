import { HTMLProps } from "react";
import { Container } from "./styles";

export const Input = ({ ...props }: HTMLProps<HTMLInputElement>) => (
  <Container {...props} />
);
