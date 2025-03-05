import { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

export const Button = ({
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <Container {...props}>Criar</Container>
);
