
import {
  Container,
  Card,
  CheckIconContainer,
  Title,
  Subtitle,
  Button
} from "./styles";
import { CheckCircle2 } from "lucide-react"; // Ou o ícone que preferir

export function CompletePayment() {
  return (
    <Container>
      <Card>
        <CheckIconContainer>
          <CheckCircle2 size={64} />
        </CheckIconContainer>

        <Title>Pagamento Confirmado!</Title>
        <Subtitle>
          Seu pedido foi processado com sucesso e já está sendo preparado. Obrigado pela preferência!
        </Subtitle>

        <Button onClick={() => window.location.href = "/"}>
          Voltar para o Início
        </Button>
      </Card>
    </Container>
  );
}