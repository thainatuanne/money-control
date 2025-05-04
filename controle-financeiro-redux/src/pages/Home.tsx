import { TransactionForm } from "../features/TransactionForm";
import { TransactionList } from "../features/TransactionList";
import { Container, Title } from "./styles";

export function Home() {
    return (
        <Container>
            <Title>Controle Financeiro</Title>
            <TransactionForm />
            <TransactionList />
        </Container>
    );
}