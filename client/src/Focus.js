import React, {useEffect, useState} from 'react';

function Focus(props){

    const [ticket, setTicket] = useState(null);

    useEffect(() => {
        setTicket(props.ticket);
    }, [props])


    if (ticket == null){
        return(
            <div className="Focus"> 
                <h1> Click on a ticket to make it show here</h1>
            </div>
        )
    } else {
        return(
            <div className="Focus">
                <h1> {ticket.subject} </h1>
                <h3> {ticket.description} </h3>
            </div>  
        )
    }
    
}

export default Focus;