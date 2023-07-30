import React from "react";
import Tours from "./Tours";
import data from "./data";
import "./index.css";

import { useState } from "react";

const App = () => {


   const [tours, setTours] = useState(data);

  
  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  } 

  if (tours.length === 0) {
    return (
      <div className='refresh'>
        <h1>No tours left</h1>
        <button onClick={ () => setTours(data) } className='btn-white'>Refresh</button>

        </div>
    );
  }


 
  return (
    <div className='App'>

     {/* Passing removeTour function to the tours component through props      */}
      <Tours tours={tours} removeTour={removeTour}>
      </Tours>
    </div>
  
  
  );
};

export default App;
