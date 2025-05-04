import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTransaction } from '../features/transactionsSlice';
import { v4 as uuidv4 } from 'uuid';
import { Form, Input, Select, Button } from './TransactionForm.styles';

export function TransactionForm() {
    const dispatch = useDispatch();
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState<number>(0);
    const [type, setType] = useState<'entrada' | 'saida'>('entrada');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(addTransaction({
            id: uuidv4(),
            description,
            amount,
            type,
        }));
        setDescription('');
        setAmount(0);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Descrição"
            />
            <Input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                placeholder="Valor"
            />
            <Select
                value={type}
                onChange={(e) => setType(e.target.value as 'entrada' | 'saida')}
            >
                <option value="entrada">Entrada</option>
                <option value="saida">Saída</option>
            </Select>
            <Button type="submit">Registrar</Button>
        </Form>
    );
}
