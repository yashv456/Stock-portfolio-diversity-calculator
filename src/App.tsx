import React, { useState } from 'react';
import './App.css';
import StockList from './components/StockList';
import Portfolio from './components/Portfolio';
import { StockData } from './services/StockService';

const App: React.FC = () => {
  const [portfolio, setPortfolio] = useState<StockData[]>([]);

  const handleSelectStock = (stock: StockData) => {
    setPortfolio([...portfolio, stock]);
  };

  const calculateDiversity = () => {
    const sectorWeights: { [key: string]: number } = {};

    portfolio.forEach(stock => {
      if (!sectorWeights[stock.sector]) {
        sectorWeights[stock.sector] = 0;
      }
      sectorWeights[stock.sector] += stock.price;
    });

    const totalValue = portfolio.reduce((sum, stock) => sum + stock.price, 0);

    const diversityScore = Object.values(sectorWeights)
      .reduce((sum, weight) => sum + (weight / totalValue) ** 2, 0);

    return (1 - diversityScore) * 100;
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Stock Portfolio Diversity Calculator</h1>
      </div>
      <div className="section">
        <Portfolio stocks={portfolio} />
        <div className="diversity-score">
          <h2>Stock Portfolio Diversity</h2>
          <div>
            <strong>{portfolio.length ? calculateDiversity().toFixed(2) : '?'}</strong>
            <p>(Score from formula here)</p>
          </div>
        </div>
      </div>
      <div className="all-stocks">
        <StockList onSelectStock={handleSelectStock} />
      </div>
    </div>
  );
};

export default App;
