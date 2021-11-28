import React, { useState, useEffect } from 'react';
import Ticket from './Ticket';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

;
function Page(props){
    const [ticketGroup, setTicketGroup] = useState([]);
    useEffect(() => {
        var tickets = props.tickets;
        setTicketGroup([...tickets]);
    }, [props]);

    const Row = ({ index, style }) => (
        <div style={style}>
            {ticketGroup.map((ticket) => (<Ticket ticketInfo={ticket} focus={props.focus}/>))}
        </div>
      );

    

    return (
        <div className="Page">
            <Stack direction="row">
                <Box height="100vh" display="flex" flexDirection="column">
                    <Box flex={1} overflow="auto">
                        {ticketGroup.map((ticket) => (<h1> {ticket.subject} </h1>))}
                    </Box>
                </Box>
                <Box height = "100vh"  display="flex" flexDirection="column">
                    <Box flex={1} overflow="hidden">
                        <h1> This is a fixed div</h1>
                    </Box>
                </Box>
            </Stack>
        </div>
    )
}

export default Page;