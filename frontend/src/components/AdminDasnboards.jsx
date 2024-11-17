import React, { useState } from "react";
import Sidebar from "./Sidebar";
import ProductsPage from "./Products/ProductsPage";

const AdminDashboards = () => {
  const [activePage, setActivePage] = useState("");

  const renderContent = () => {
    switch (activePage) {
      case "Products":
        return <ProductsPage />;
      default:
        return <h2>Welcome to the Admin Dashboard</h2>;
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <Sidebar setActivePage={setActivePage} />

      {/* Main Content */}
      <div style={{ flex: 1, padding: "20px" }}>{renderContent()}</div>
    </div>
  );
};

export default AdminDashboards;