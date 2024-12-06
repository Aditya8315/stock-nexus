export const USERS = [
  {
    uniqueId: "1",
    username: "john_doe",
    password: "password123",
  },
  {
    uniqueId: "2",
    username: "jane_smith",
    password: "12345password",
  },
  {
    uniqueId: "3",
    username: "admin",
    password: "admin123",
  },
];
export const samplePnLData = Array.from({ length: 1000 }, (_, index) => {
  const endDate = new Date("2024-12-01"); // Start from December 2024
  const date = new Date(endDate.setDate(endDate.getDate() - index)); // Decrement the date
  const formattedDate = date.toISOString().split("T")[0]; // Format date as YYYY-MM-DD

  return {
    date: formattedDate,
    pnl: Math.floor(Math.random() * 200 - 100), // Random PnL between -100 and +100
  };
});

export const mockMarkets = [
  {
    name: "NYSE",
    isOpen: true,
    trend: "up",
    info: "New York Stock Exchange - Largest stock exchange by market capitalization.",
    image:
      "https://plus.unsplash.com/premium_photo-1682048358672-1c5c6c9ed2ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmV3eW9ya3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "NASDAQ",
    isOpen: false,
    trend: "down",
    info: "NASDAQ - Technology-heavy stock exchange.",
    image:
      "https://images.unsplash.com/photo-1518103800393-ad559c4061f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmFzZGFxfGVufDB8fDB8fHww",
  },
  {
    name: "LSE",
    isOpen: true,
    trend: "up",
    info: "London Stock Exchange - Oldest stock exchange in the world.",
    image:
      "https://images.unsplash.com/photo-1448906654166-444d494666b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TG9uZG9ufGVufDB8fDB8fHww",
  },
  {
    name: "SSE",
    isOpen: false,
    trend: "down",
    info: "Shanghai Stock Exchange - Asia’s second-largest stock market.",
    image:
      "https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hhbmdoYWl8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "TSE",
    isOpen: true,
    trend: "up",
    info: "Tokyo Stock Exchange - Largest stock exchange in Japan.",
    image:
      "https://plus.unsplash.com/premium_photo-1661914240950-b0124f20a5c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG9reW98ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "HKEX",
    isOpen: false,
    trend: "down",
    info: "Hong Kong Stock Exchange - Major stock market in Asia-Pacific.",
    image:
      "https://plus.unsplash.com/premium_photo-1720442410336-e02bdf318c9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SG9uZ2tvbmd8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Euronext",
    isOpen: true,
    trend: "up",
    info: "Euronext - Pan-European stock exchange.",
    image:
      "https://plus.unsplash.com/premium_photo-1682310083671-e247ad36e0b6?q=80&w=1824&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "BSE",
    isOpen: true,
    trend: "up",
    info: "Bombay Stock Exchange - Asia's oldest stock exchange.",
    image:
      "https://images.unsplash.com/photo-1660145416818-b9a2b1a1f193?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const mockUpdates = [
  {
    region: "India",
    updates: [
      "Sensex closes 350 points higher, led by gains in IT and banking stocks.",
      "RBI maintains repo rate unchanged, boosting market sentiment.",
      "Adani Group stocks rally after positive earnings report.",
    ],
  },
  {
    region: "US",
    updates: [
      "Dow Jones surges 200 points as tech stocks recover.",
      "Federal Reserve hints at potential rate pause in upcoming meeting.",
      "Amazon and Tesla stocks rally after strong quarterly earnings.",
    ],
  },
  {
    region: "China",
    updates: [
      "Shanghai Composite gains 1.5% as government announces stimulus for tech sector.",
      "Chinese yuan strengthens amid better-than-expected trade data.",
      "Alibaba shares rise after unveiling new AI-driven e-commerce strategy.",
    ],
  },
  {
    region: "Europe",
    updates: [
      "FTSE 100 rises as oil prices stabilize, boosting energy stocks.",
      "ECB signals cautious approach to rate hikes amidst mixed economic data.",
      "Volkswagen shares climb after unveiling new electric vehicle lineup.",
    ],
  },
  {
    region: "Japan",
    updates: [
      "Nikkei gains 0.8% as yen weakens against the dollar, boosting exporters.",
      "Bank of Japan maintains ultra-loose monetary policy, supporting equities.",
      "Sony shares up 3% after launching new gaming console ahead of schedule.",
    ],
  },
];

export const markets = [
  { name: "NASDAQ", trend: "UP", color: "success" },
  { name: "Nikkei", trend: "DOWN", color: "error" },
  { name: "Shanghai", trend: "UP", color: "success" },
  { name: "FTSE", trend: "DOWN", color: "error" },
  { name: "DAX", trend: "UP", color: "success" },
  { name: "Dow Jones", trend: "UP", color: "success" },
  { name: "S&P 500", trend: "UP", color: "success" },
  { name: "Hang Seng", trend: "DOWN", color: "error" },
  { name: "BSE Sensex", trend: "UP", color: "success" },
  { name: "CAC 40", trend: "UP", color: "success" },
  { name: "ASX 200", trend: "DOWN", color: "error" },
  { name: "IBEX 35", trend: "UP", color: "success" },
  { name: "TSX Composite", trend: "UP", color: "success" },
  { name: "KOSPI", trend: "DOWN", color: "error" },
  { name: "Brazil Bovespa", trend: "UP", color: "success" },
  { name: "MEXBOL", trend: "DOWN", color: "error" },
  { name: "JSE All Share", trend: "UP", color: "success" },
  { name: "TSE", trend: "UP", color: "success" },
  { name: "SSE Composite", trend: "UP", color: "success" },
  { name: "NZX 50", trend: "DOWN", color: "error" },
  { name: "DAX 30", trend: "UP", color: "success" },
  { name: "STOXX 600", trend: "DOWN", color: "error" },
  { name: "Nasdaq 100", trend: "UP", color: "success" },
  { name: "FTSE MIB", trend: "DOWN", color: "error" },
  { name: "Russell 2000", trend: "UP", color: "success" },
  { name: "Taiwan Weighted", trend: "DOWN", color: "error" },
  { name: "S&P/ASX 200", trend: "UP", color: "success" },
  { name: "AEX", trend: "DOWN", color: "error" },
  { name: "OMX Nordic 40", trend: "UP", color: "success" },
  { name: "S&P TSX", trend: "UP", color: "success" },
  { name: "KLCI", trend: "DOWN", color: "error" },
  { name: "EGX 30", trend: "UP", color: "success" },
  { name: "Dubai Financial Market", trend: "UP", color: "success" },
  { name: "Qatar Exchange", trend: "DOWN", color: "error" },
  { name: "MENA", trend: "UP", color: "success" },
  { name: "Nifty 50", trend: "UP", color: "success" },
  { name: "BSE 200", trend: "DOWN", color: "error" },
  { name: "Vietnam VN-Index", trend: "UP", color: "success" },
  { name: "Colombia COLCAP", trend: "DOWN", color: "error" },
  { name: "Pakistan KSE 100", trend: "UP", color: "success" },
  { name: "Czech PX", trend: "DOWN", color: "error" },
  { name: "BIST 100", trend: "UP", color: "success" },
  { name: "SET Index", trend: "DOWN", color: "error" },
  { name: "Nigerian Stock Exchange", trend: "UP", color: "success" },
  { name: "SINGAPORE INDEX", trend: "DOWN", color: "error" },
];

export const apps = [
  {
    name: "Trader Dashboard",
    image: "https://cdn-icons-png.flaticon.com/128/13010/13010238.png",
    description:
      "Monitor your trading performance with real-time insights and analytics.",
    link: "/",
  },
  {
    name: "PnL Analyzer",
    image: "https://cdn-icons-png.flaticon.com/128/4449/4449895.png",
    description:
      "Track and analyze your profit and loss across all trading accounts.",
    link: "/",
  },
  {
    name: "Market Watch",
    image: "https://cdn-icons-png.flaticon.com/128/9361/9361815.png",
    description:
      "Get live market updates and track your favorite stocks in real-time.",
    link: "/",
  },
  {
    name: "Portfolio Manager",
    image: "https://cdn-icons-png.flaticon.com/128/18478/18478890.png",
    description: "Manage your portfolio and investments with ease.",
    link: "/",
  },
  {
    name: "Trading Signals",
    image: "https://cdn-icons-png.flaticon.com/128/2737/2737448.png",
    description:
      "Receive actionable trading signals to stay ahead in the market.",
    link: "/",
  },
  {
    name: "Risk Calculator",
    image: "https://cdn-icons-png.flaticon.com/128/9587/9587085.png",
    description:
      "Assess and manage your trading risks with advanced calculators.",
    link: "/",
  },
  {
    name: "Tax Optimizer",
    image: "https://cdn-icons-png.flaticon.com/128/18432/18432654.png",
    description: "Optimize your trading taxes and maximize your savings.",
    link: "/",
  },
  {
    name: "Economic Calendar",
    image: "https://cdn-icons-png.flaticon.com/128/9155/9155737.png",
    description:
      "Stay updated with upcoming economic events that can impact markets.",
    link: "/",
  },
];

export const slideUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.2 },
  }),
};

export const searchData = [
  "Stock Market",
  "Forex Trading",
  "Cryptocurrency",
  "Equities",
  "Bonds",
  "Commodities",
  "Options Trading",
  "Futures Trading",
  "Market Analysis",
  "Technical Analysis",
  "Fundamental Analysis",
  "Portfolio Management",
  "Venture Capital",
  "Private Equity",
  "Securities",
  "Derivatives",
  "Financial Instruments",
  "Corporate Finance",
  "Investment Banking",
  "Mergers and Acquisitions",
  "S&P 500",
  "NASDAQ",
  "Dow Jones",
  "Market Liquidity",
  "Leverage",
  "Margin Trading",
  "Arbitrage",
  "Stock Exchanges",
  "Market Orders",
  "Limit Orders",
  "Buy and Sell Orders",
  "Day Trading",
  "Swing Trading",
  "Position Trading",
  "Financial Modelling",
  "Trading Strategies",
  "Risk-Reward Ratio",
  "Technical Indicators",
  "Moving Average",
  "Relative Strength Index (RSI)",
  "Bollinger Bands",
  "Candlestick Patterns",
  "MACD",
  "Fibonacci Retracement",
  "P/E Ratio",
  "Earnings Per Share (EPS)",
  "Market Capitalization",
  "Short Selling",
  "IPO",
  "Blockchain",
  "Cryptocurrency Exchanges",
  "Crypto Wallets",
  "Smart Contracts",
  "DeFi (Decentralized Finance)",
  "NFTs",
];
