import React from "react";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";

function App() {
  return (
    <div className="wrapper clear">
      <Drawer/>
      <Header/>
      <div className="content">
        <div className="d-flex justify-between align-center mb-40px">
          <h1 >Все кроссовки</h1>
          <div className="search-block">
            <img width={20} height={20} src="/img/Search.svg" alt="search" />
              <input
                placeholder="Search ..."
                className="search-input"
                type="text" />
          </div>
        </div>
        <div className="sneakers">
          <Card/>
          <Card/>
        </div>
      </div>
    </div>
    
  );
}

export default App;
