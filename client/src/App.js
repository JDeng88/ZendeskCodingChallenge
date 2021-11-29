import axios from "axios";
import React, {useState} from "react";
import './App.css';
import Focus from './Focus';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Ticket from './Ticket';




function App() {

  const nodeServer = process.env.SERVER_URL || "http://localhost:8888";

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
          newPages.push(response.data);
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

  const prevPage = () => {
    if (currPage > 0){
      var newPage = currPage - 1;
      setCurrPage(newPage);  
    } else {
      console.log("cannot go back");
    }
    
  }

  const nextPage = () => {
    console.log(pages);
    if (currPage < pages.length - 1){
      var newPage = currPage + 1;
      setCurrPage(newPage);
    } else {
      console.log("cannot go forward");
    }
    
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
              <button onClick={prevPage}>  Prev </button>
              <button onClick={nextPage}> Next </button>
              <h1> Page {currPage + 1} of {pages.length} </h1>
            </Box>
          </Stack>
          <Stack direction="row">
            <Box height="90vh" width="30vw" display="flex" flexDirection="column" align="center">
                <Box flex={1} overflow="auto">
                    {pages[currPage].map((ticket) => (<Ticket ticket={ticket} focus={focus} />))}
                </Box>
            </Box>
            <Box height="90vh" width="70vw" display="flex" flexDirection="column">
                <Box flex={1} overflow="hidden" align="center">
                    <Typography align="center">
                      <Focus ticket={focusTicket} />
                    </Typography>
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
