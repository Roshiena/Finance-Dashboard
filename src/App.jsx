import React from "react";
import { StockProvider } from "./StockContext";
import StockForm from "./StockForm";
import StockList from "./StockList";
import "./Stock.css";
import stockImage from "./9818332.png";
const App = () => {
  return (
    <StockProvider>
      <div>
        <div>
          <img src={stockImage} alt="Stock Image" />
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
