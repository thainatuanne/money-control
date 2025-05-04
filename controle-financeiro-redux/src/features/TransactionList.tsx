import { useSelector } from 'react-redux';
import { RootState } from '../store';
import {
    Section,
    Heading,
    List,
    ListItem,
    Balance
} from './TransactionList.styles';

export function TransactionList() {
    const transactions = useSelector((state: RootState) => state.transactions.list);

    const entradas = transactions.filter(t => t.type === 'entrada');
    const saidas = transactions.filter(t => t.type === 'saida');

    const saldo = entradas.reduce((acc, t) => acc + t.amount, 0) -
        saidas.reduce((acc, t) => acc + t.amount, 0);

    return (
        <Section>
            <Heading>Entradas</Heading>
            <List>
                {entradas.map(t => (
                    <ListItem key={t.id}>{t.description} - R${t.amount}</ListItem>
                ))}
            </List>

            <Heading>Saídas</Heading>
            <List>
                {saidas.map(t => (
                    <ListItem key={t.id}>{t.description} - R${t.amount}</ListItem>
                ))}
            </List>

            <Balance>Saldo Atual: R${saldo}</Balance>
        </Section>
    );
}
