import axios from "axios";
import React, {useState, useEffect} from "react";
import './App.css';

function App() {

  const nodeServer = process.env.SERVER_URL || "http://localhost:5000";

  const [tickets, setTickets] = useState([]);  //TODO: use state inifnite loop 
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

  })

  const getTickets = () => {
    setLoading(true);
    (async() => {
      try {
        var response = await axios({
          url: '/',
          baseURL: nodeServer
        })
        console.log(response);
        setTickets([...response.data]);
        console.log(tickets);
        var newPages = [];
        while(tickets.length > 25){
          var currPage = tickets.splice(0, 25);
          newPages.push(currPage);
        }
        newPages.push(tickets);
        setPages([...newPages]);
        console.log(pages);
        setLoading(false);
      } catch(error) {
        console.log('oops');
      } 
    })()
    
  }




  return (
    <div className="App">
      <button onClick={getTickets}> Click me </button>
      {loading ? 'Please wait' : ''}
    </div>
  )
}

export default App;
