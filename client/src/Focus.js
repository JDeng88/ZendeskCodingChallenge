import React, {useEffect, useState} from 'react';
import './App.css';

function Focus(props){

    const [ticket, setTicket] = useState(null);
    const [empty, isEmpty] = useState(true);

    useEffect(() => {
        if (Object.keys(props.ticket).length > 0){
            setTicket(props.ticket);
            isEmpty(false);
        } 
        
    }, [props.ticket])

    return(
        <div className="Focus">
            {empty ? <h1> Click on a ticket to show more information </h1>
            : (
                <div>
                    <h1> {ticket.subject} </h1>
                    <h3> Submitted by: {ticket.submitter_id} </h3>
                    <p> {ticket.description} </p>
                </div>
            )}
            
        </div>  
    )

}

export default Focus;