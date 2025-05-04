import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Transaction {
    id: string;
    description: string;
    amount: number;
    type: 'entrada' | 'saida';
}

interface TransactionState {
    list: Transaction[];
}

const initialState: TransactionState = {
    list: [],
};

const transactionSlice = createSlice({
    name: 'transactions',
    initialState,
    reducers: {
        addTransaction: (state, action: PayloadAction<Transaction>) => {
            state.list.push(action.payload);
        },
    },
});

export const { addTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;