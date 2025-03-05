import { Container, Counter, CounterText, Title, TitleVariant } from "./styles";

type Props = {
  title: string;
  count: number;
  variant?: TitleVariant;
};

export const TaskCounter = ({ title, count, variant = "DEFAULT" }: Props) => (
  <Container>
    <Title $variant={variant}>{title}</Title>

    <Counter>
      <CounterText>{count}</CounterText>
    </Counter>
  </Container>
);
