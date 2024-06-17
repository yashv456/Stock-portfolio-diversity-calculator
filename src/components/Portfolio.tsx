import React from 'react';
import { StockData } from '../services/StockService';

interface PortfolioProps {
  stocks: StockData[];
}

const Portfolio: React.FC<PortfolioProps> = ({ stocks }) => {
  const sectorWeights: { [key: string]: number } = {};

  stocks.forEach(stock => {
    if (!sectorWeights[stock.sector]) {
      sectorWeights[stock.sector] = 0;
    }
    sectorWeights[stock.sector] += stock.price;
  });

  const totalValue = stocks.reduce((sum, stock) => sum + stock.price, 0);

  const diversityScore = Object.values(sectorWeights)
    .reduce((sum, weight) => sum + (weight / totalValue) ** 2, 0);

  const diversity = (1 - diversityScore) * 100;

  return (
    <div className="selected-stocks">
      <h2>Selected Stocks</h2>
      <ul>
        {stocks.map(stock => (
          <li key={stock.symbol}>
            {stock.symbol} - ${stock.price.toFixed(2)} - {stock.sector}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;
