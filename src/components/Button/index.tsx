import { ButtonHTMLAttributes } from "react";
import { Container, Title } from "./styles";
import { PlusCircle } from "@phosphor-icons/react";

export const Button = ({
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <Container {...props}>
    <Title>Criar</Title>
    <PlusCircle size={20} weight="bold" />
  </Container>
);
