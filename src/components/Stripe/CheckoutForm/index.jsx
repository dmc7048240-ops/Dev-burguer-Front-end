import { useState } from "react";
import {
  useStripe,
  useElements,
  CardElement,
} from "@stripe/react-stripe-js";

import {
  Container,
  Title,
  CardContainer,
  Button,
  Message,
} from "./styles";

export function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);
    setMessage("");

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      setMessage("Erro ao carregar o cartão.");
      setLoading(false);
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Método de pagamento criado com sucesso!");
    }

    setLoading(false);
  }

  return (
    <Container>
      <Title>Pagamento</Title>

      <form onSubmit={handleSubmit}>
        <CardContainer>
          <CardElement />
        </CardContainer>

        <Button
          type="submit"
          disabled={!stripe || loading}
        >
          {loading ? "Processando..." : "Pagar"}
        </Button>

        {message && <Message>{message}</Message>}
      </form>
    </Container>
  );
}

/*import { useState } from "react";

import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

import {
  Container,
  Title,
  Form,
  Button,
  Message,
  DpmLink,
} from "./styles";

export function CheckoutForm({ dpmCheckerLink }) {
  const stripe = useStripe();
  const elements = useElements();

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);
    setMessage("");

    const { error } = await stripe.confirmPayment({
      elements,

      confirmParams: {
        return_url: `${window.location.origin}/complete`,
      },

      redirect: "if_required",
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Pagamento realizado com sucesso!");
    }

    setIsLoading(false);
  }

  return (
    <Container>
      <Title>Finalizar pagamento</Title>

      <Form onSubmit={handleSubmit}>
        <PaymentElement />

        <Button
          type="submit"
          disabled={isLoading || !stripe || !elements}
        >
          {isLoading ? "Processando..." : "Pagar"}
        </Button>

        {message && <Message>{message}</Message>}
      </Form>

      {dpmCheckerLink && (
        <DpmLink>
          <a
            href={dpmCheckerLink}
            target="_blank"
            rel="noreferrer"
          >
            Verificar métodos de pagamento
          </a>
        </DpmLink>
      )}
    </Container>
  );
}*/