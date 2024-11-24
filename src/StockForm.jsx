import React, { useContext, useState } from "react";
import { StockContext } from "./StockContext";
import "./Stock.css";
import "../src/assets/9818332.png";

const StockForm = () => {
  const [symbol, setSymbol] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const { addStock } = useContext(StockContext); // Access addStock from context

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!symbol || !quantity || !price) return; // Simple validation

    // Adding the stock to the context state
    addStock({ symbol, quantity: Number(quantity), price: Number(price) });

    // Clear the form inputs
    setSymbol("");
    setQuantity("");
    setPrice("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
        placeholder="Stock Symbol"
      />
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        placeholder="Quantity"
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Purchase Price"
      />
      <button type="submit">Add Stock</button>
    </form>
  );
};

export default StockForm;
