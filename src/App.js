import "./App.css";
import CardList from "./Component/CardList";
import CartCounter from "./Component/CartCounter";

function App() {
  return (
    //JSX= Java Script XML
    <div className="App">
      <CartCounter />
      <CardList placeholder='paceholder image'/>
    </div>
  );
}

export default App;