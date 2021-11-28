import React, { useState, useEffect } from 'react';
import './App.css';
import Paper from '@mui/material/Paper';
import {styled} from '@mui/material/styles';


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