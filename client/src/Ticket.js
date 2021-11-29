import React from 'react';
import './App.css';



function Ticket(props){

    const focus = () => {
        props.focus(props.ticket)
    }

    return(
        <div className="Ticket" onClick={focus}>
            <span className="TicketTitle"> {props.ticket.subject}</span>
            <br></br>
            <br></br>
            <span className="TicketDescription"> {props.ticket.description} </span>
        </div>
    )
}

export default Ticket;