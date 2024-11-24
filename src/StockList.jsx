import { useContext, useEffect, useState } from "react";
import { StockContext } from "./StockContext";

const StockList = () => {
  const { stocks } = useContext(StockContext);
  const [prices, setPrices] = useState({});

  useEffect(() => {
    const fetchPrices = async () => {
      const newPrices = {};
      for (const stock of stocks) {
        const res = await fetch(
          `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stock.symbol}&apikey=YOUR_API_KEY`
        );
        const data = await res.json();
        newPrices[stock.symbol] = data["Global Quote"]["05. price"];
      }
      setPrices(newPrices);
    };

    fetchPrices();
  }, [stocks]);

  const calculateProfitLoss = (purchasePrice, currentPrice, quantity) => {
    return (currentPrice - purchasePrice) * quantity;
  };

  return (
    <div>
      {stocks.length === 0 ? (
        <p>No stocks available</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Quantity</th>
              <th>Purchase Price</th>
              <th>Current Price</th>
              <th>Profit/Loss</th>
            </tr>
          </thead>
          <tbody>
            {stocks.map((stock) => {
              const currentPrice = prices[stock.symbol] || 0;
              const profitLoss = calculateProfitLoss(
                stock.price,
                currentPrice,
                stock.quantity
              );
              return (
                <tr key={stock.symbol}>
                  <td>{stock.symbol}</td>
                  <td>{stock.quantity}</td>
                  <td>{stock.price}</td>
                  <td>{currentPrice}</td>
                  <td style={{ color: profitLoss >= 0 ? "green" : "red" }}>
                    {profitLoss >= 0 ? `+${profitLoss}` : profitLoss}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StockList;
