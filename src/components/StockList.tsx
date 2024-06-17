import React, { useEffect, useState } from 'react';
import { StockData, fetchStockData } from '../services/StockService';

interface StockListProps {
  onSelectStock: (stock: StockData) => void;
}

const StockList: React.FC<StockListProps> = ({ onSelectStock }) => {
  const [stocks, setStocks] = useState<StockData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchStockData();
      setStocks(data);
    };

    fetchData();
  }, []);

  return (
    <div className="all-stocks">
      {stocks.map(stock => (
        <div key={stock.symbol} className="stock-item">
          <p>{stock.symbol}</p>
          <p>${stock.price.toFixed(2)}</p>
          <p>{stock.sector}</p>
          <button onClick={() => onSelectStock(stock)}>Select</button>
        </div>
      ))}
    </div>
  );
};

export default StockList;
