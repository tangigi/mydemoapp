import { createContext } from "react";
import "./App.css";
import CardList from "./Component/CardList";
import CartCounter from "./Component/CartCounter";
import ComponentA from "./Component/ParentChild/Component A";
export const userContext= createContext();

function App() {
  
  const  placeholder="placeholder image"
  const isReadOnly = false; // set to true to make the context read-only
  return (
    <userContext.Provider value={{placeholder,isReadOnly}}>
    {/* JSX = JavaScript XML */}
    <div className="App">
      <CartCounter />
      <CardList/>
      <ComponentA/>
    </div>
    </userContext.Provider>
  );
}

export default App;