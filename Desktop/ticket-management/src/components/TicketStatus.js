import React from 'react';
import { useSelector } from 'react-redux';

function TicketStatus() {
    const tickets = useSelector((state) => state.tickets.tickets);

    return (
        <div className="mb-4">
            <h2>Ticket Status</h2>
            <ul className="list-group">
                {tickets.map((ticket) => (
                    <li key={ticket.id} className="list-group-item">
                        <strong>{ticket.description}</strong> - {ticket.status}
                        {ticket.member && <span> (Assigned to: {ticket.member})</span>}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TicketStatus;
