import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tickets: [],
};

const ticketSlice = createSlice({
    name: 'tickets',
    initialState,
    reducers: {
        raiseTicket: (state, action) => {
            state.tickets.push({
                id: new Date().toISOString(),
                description: action.payload.description,
                status: 'open',
                member: null,
            });
        },
        updateTicketStatus: (state, action) => {
            const ticket = state.tickets.find(ticket => ticket.id === action.payload.id);
            if (ticket) {
                ticket.status = action.payload.status;
                ticket.member = action.payload.member;
            }
        },
    },
});

export const { raiseTicket, updateTicketStatus } = ticketSlice.actions;

export default ticketSlice.reducer;
