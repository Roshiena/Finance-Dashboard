import React from "react";
import { StockProvider } from "./StockContext";
import StockForm from "./StockForm";
import StockList from "./StockList";
import "./Stock.css";

const App = () => {
  return (
    <StockProvider>
      <div>
        <div>
          <img src="./src/9818332.png"></img>
        </div>
        <h1>Finance Dashboard</h1>
        <StockForm />
        <h2>Stock List</h2>

        <StockList />
      </div>
    </StockProvider>
  );
};

export default App;
