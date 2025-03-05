import { Container } from "./styles";
import logo from "@assets/logo.svg";

export const Header = () => (
  <Container>
    <img src={logo} alt={"Todo logotipo"} />
  </Container>
);
