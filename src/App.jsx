import Navbar from "./components/Navbar"
import data from "./components/data";
import "./App.css";
import Card from "./components/Card";
function App() {
  const card = data.map(item => {
    return (
    < Card 
      key = {item.id} 
      item = {item}  
    />
    )
  })
  return (
    <>
     <Navbar />
     <section className="cards-list">{card}</section>
    </>
  )
}

export default App
