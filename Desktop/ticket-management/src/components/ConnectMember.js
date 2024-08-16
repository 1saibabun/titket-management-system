import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTicketStatus } from '../features/tickets/ticketSlice';

function ConnectMember() {
    const [member, setMember] = useState('');
    const [selectedTicket, setSelectedTicket] = useState('');
    const dispatch = useDispatch();
    const tickets = useSelector((state) => state.tickets.tickets);

    const handleConnect = (e) => {
        e.preventDefault();
        dispatch(updateTicketStatus({ id: selectedTicket, status: 'in-progress', member }));
        setMember('');
        setSelectedTicket('');
    };

    return (
        <form onSubmit={handleConnect} className="mb-4">
            <div className="mb-3">
                <select
                    value={selectedTicket}
                    onChange={(e) => setSelectedTicket(e.target.value)}
                    className="form-select"
                    required
                >
                    <option value="" disabled>Select a Ticket</option>
                    {tickets.map((ticket) => (
                        <option key={ticket.id} value={ticket.id}>
                            {ticket.description}
                        </option>
                    ))}
                </select>
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    value={member}
                    onChange={(e) => setMember(e.target.value)}
                    placeholder="Assign member"
                    className="form-control"
                    required
                />
            </div>
            <button type="submit" className="btn btn-success">Connect Member</button>
        </form>
    );
}

export default ConnectMember;
