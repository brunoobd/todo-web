import { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";
import { PlusCircle } from "@phosphor-icons/react";

export const Button = ({
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <Container {...props}>
    Criar <PlusCircle size={20} weight="bold" />
  </Container>
);
