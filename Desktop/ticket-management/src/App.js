import React, { useState } from 'react';
import RaiseTicket from './components/RaiseTicket';
import TicketStatus from './components/TicketStatus';
import ConnectMember from './components/ConnectMember';
import NestedJsonData from './components/NestedJsonData';
import UserRegistration from './components/User-Registration/userRegistration';
import Stopwatch from './components/Stop-Watch/StopWatch';

function App() {
   const [activeComponent, setActiveComponent] = useState(null);

  const handleButtonClick = (component) => {
    setActiveComponent(component);
  };

  return (
   <div className="container mt-5">
   <h1 className="text-center mb-4">Ticket Management System (TMG)</h1>
   
   <div className="d-flex justify-content-center mb-4">
     <button className="btn btn-primary mx-2" onClick={() => handleButtonClick('TicketManagement')}>
       Ticket Management
     </button>
     <button className="btn btn-primary mx-2" onClick={() => handleButtonClick('NestedJsonData')}>
       Nested Data
     </button>
     <button className="btn btn-primary mx-2" onClick={() => handleButtonClick('UserRegistration')}>
       User Registration
     </button>
     <button className="btn btn-primary mx-2" onClick={() => handleButtonClick('StopWatch')}>
       Stop Watch
     </button>
   </div>

   {activeComponent === 'TicketManagement' && (
     <div>
       <RaiseTicket />
       <TicketStatus />
       <ConnectMember />
     </div>
   )}

   {activeComponent === 'NestedJsonData' && <NestedJsonData />}
   {activeComponent === 'UserRegistration' && <UserRegistration />}
   {activeComponent === 'StopWatch' && <Stopwatch />} 
 </div>
  );
};

export default App;
