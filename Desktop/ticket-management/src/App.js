import React from 'react';
import RaiseTicket from './components/RaiseTicket';
import TicketStatus from './components/TicketStatus';
import ConnectMember from './components/ConnectMember';

function App() {
   return (
        <div className="container mt-5">
          <h1 className="text-center mb-4">Ticket Management System (TMG)</h1>
           <RaiseTicket />
           <TicketStatus />
           <ConnectMember />
        </div>
   );
}

export default App;
