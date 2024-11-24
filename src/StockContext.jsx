import { createContext, useState } from "react";

export const StockContext = createContext();

export const StockProvider = ({children}) => {
  const [stocks, setStocks] = useState([]);

  const addStock = (stock) => {
    setStocks([...stocks, stock]);
  };

  return (
    <StockContext.Provider value={{ stocks, addStock }}>
      {children}
    </StockContext.Provider>
  );
};

export default StockContext;
