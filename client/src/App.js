import axios from "axios";
import React, {useState, useEffect} from "react";
import './App.css';
import Focus from './Focus';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Ticket from './Ticket';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';



function App() {

  const nodeServer = process.env.SERVER_URL || "http://localhost:5000";

  const [pageState, setPageState] = useState("landing");
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [tickets, setTickets] = useState([]);
  const [focusTicket, setFocusTicket] = useState({});
  const [currPage, setCurrPage] = useState(0);


  const getTickets = () => {
    setLoading(true);
    (async() => {
      try {
        var response = await axios({
          url: '/',
          baseURL: nodeServer
        })
        setTickets((tickets) => [...response.data]);

        var newPages = [];
        while (response.data.length > 25){
          var newPage = response.data.splice(0, 25);
          newPages.push(newPage);
        }
        if (response.data.length > 0){
          newPages.push(response);
        }
        setPages((pages) => [...newPages]);
        setError(false);
        setLoading(false);
        setPageState("display");
      } catch(error) {
        setError(true);
      } 
    })()   
  }

  const focus = (ticket) => {
    setFocusTicket({...ticket});
    console.log(ticket.subject);
  }


  var loadingIcon = <img src={process.env.PUBLIC_URL + "loading.gif"} alt="loading icon"></img>
  var errorMessage = <h1> There was an error retreiving your data. Please try again.</h1>

  switch(pageState){
    case "landing":
      return (
        <div className='Landing'>
          <div> 
            <h1> Zendesk Coding Challenge 2021 </h1>
            <h3> By: Justin Deng </h3>
            <button onClick={getTickets}> Click me</button>
          </div>
          <div>
            {loading ? loadingIcon : ''}
          </div>
        </div>
      )

    case"display":
      return (
        <div className="Display">
          {error ? errorMessage : ''}
          <Stack direction="row">
            <Box height="10vh" width="30vh" display="flex" flexDirection="row">
              <button>  Prev </button>
              <button> Next </button>
            </Box>
            <Box height="10vh" width="70vh" display="flex" flexDirection="row" justifyContent="end">
              <Menu>
                <MenuItem value={1} primaryText="English"  />
                <MenuItem value={2} primaryText="Spanish" />
                <MenuItem value={3} primaryText="French" />
              </Menu>
            </Box>
          </Stack>
          <Stack direction="row">
            <Box height="90vh" width="30vh" display="flex" flexDirection="column">
                <Box flex={1} overflow="auto">
                    {pages[currPage].map((ticket) => (<Ticket ticket={ticket} focus={focus} />))}
                </Box>
            </Box>
            <Box height="70vh" width="70vh" display="flex" flexDirection="column">
                <Box flex={1} overflow="hidden">
                    <Focus ticket={focusTicket}/>
                </Box>
            </Box>
          </Stack>
        </div>
      )

    default:
      break;
  }
  
}

export default App;
