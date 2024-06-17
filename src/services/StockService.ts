export interface StockData {
  symbol: string;
  price: number;
  sector: string;
}

// Mock data for Dow 30 stocks
const dow30Stocks: StockData[] = [
  { symbol: 'AAPL', price: 150, sector: 'Information Technology' },
  { symbol: 'MSFT', price: 280, sector: 'Information Technology' },
  { symbol: 'AXP', price: 160, sector: 'Financials' },
  { symbol: 'BA', price: 220, sector: 'Industrials' },
  { symbol: 'CAT', price: 200, sector: 'Industrials' },
  { symbol: 'CSCO', price: 55, sector: 'Information Technology' },
  { symbol: 'CVX', price: 100, sector: 'Energy' },
  { symbol: 'DIS', price: 175, sector: 'Communication Services' },
  { symbol: 'GS', price: 350, sector: 'Financials' },
  { symbol: 'HD', price: 310, sector: 'Consumer Discretionary' },
  { symbol: 'HON', price: 210, sector: 'Industrials' },
  { symbol: 'IBM', price: 130, sector: 'Information Technology' },
  { symbol: 'INTC', price: 60, sector: 'Information Technology' },
  { symbol: 'JNJ', price: 170, sector: 'Health Care' },
  { symbol: 'JPM', price: 150, sector: 'Financials' },
  { symbol: 'KO', price: 60, sector: 'Consumer Staples' },
  { symbol: 'MCD', price: 230, sector: 'Consumer Discretionary' },
  { symbol: 'MMM', price: 180, sector: 'Industrials' },
  { symbol: 'MRK', price: 75, sector: 'Health Care' },
  { symbol: 'NKE', price: 130, sector: 'Consumer Discretionary' },
  { symbol: 'PG', price: 140, sector: 'Consumer Staples' },
  { symbol: 'TRV', price: 150, sector: 'Financials' },
  { symbol: 'UNH', price: 400, sector: 'Health Care' },
  { symbol: 'VZ', price: 55, sector: 'Communication Services' },
  { symbol: 'V', price: 220, sector: 'Information Technology' },
  { symbol: 'WBA', price: 50, sector: 'Consumer Staples' },
  { symbol: 'WMT', price: 150, sector: 'Consumer Staples' },
  { symbol: 'XOM', price: 60, sector: 'Energy' },
];

export const fetchStockData = async (): Promise<StockData[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dow30Stocks);
    }, 500);
  });
};
