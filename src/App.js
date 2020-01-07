import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';

function App() {
  const [state, setState] = useState([]);

  useEffect(() => {
      axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then (response => {
          setState(response.data)
          console.log(response)
      })
      .catch (err => {
          console.log(err)
      })
  }, []);
 
  return (
      <div>        
          <img className='photo' src={state.url}/>
          <h1 className='title'> {state.title}</h1>
          <h3 className='date'>{state.date}</h3>
      </div>

  )
}

export default App;
