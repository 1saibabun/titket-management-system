import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { raiseTicket } from '../features/tickets/ticketSlice';

function RaiseTicket() {
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(raiseTicket({ description }));
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <div className="mb-3">
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Describe your issue"
                    className="form-control"
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary">Raise Ticket</button>
        </form>
    );
}

export default RaiseTicket;
