import logo from './logo.svg';
import axios from "axios";
import React, {useState, useEffect} from "react";
import './App.css';

function App() {

  const nodeServer = process.env.SERVER_URL || "http://localhost:5000";

  const [tickets, setTickets] = useState([]);

  useEffect(() => {

  })

  const getTickets = () => {
    axios.get(nodeServer + '/').then((res) => {
      console.log(res);
    })
  }


  return (
    <div className="App">
      <button onClick={getTickets()}> Click me </button>
    </div>
  );
}

export default App;
