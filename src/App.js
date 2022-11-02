import React from "react";
import Navbar from "./components/Navbar"
import Card from "./components/Card";
import data from "./data";
import Hero from "./components/Hero"

function App() {
  const cards = data.map((item)=>{
    return <Card
            key={item.id} 
            item={item}
            />
  })

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="card--list">
        {cards}
      </section>
    
    </div>
  )
};

export default App;


