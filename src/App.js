import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import Body from "./components/Body";

/**
 * Header
 * - Logo
 * - Nav Items
 *
 * Body
 * - Search
 * - Restaurant Container
 *   - Restaurant Card
 *    - Image
 *   - Name of Restaurant, Cuisines, Rating, Delivery Time
 * Footer
 * - copyright
 * - Links
 * - Address
 * - contact
 *
 */



const styleCard = {
  backgroundColor: "#f0f0f0",
  padding: "10px",
  margin: "20px",
  borderRadius: "10px",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
};


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
