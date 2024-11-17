import React from "react";

const Sidebar = ({ setActivePage }) => {
  return (
    <div style={{ width: "20%", backgroundColor: "#f4f4f4", padding: "10px" }}>
      <h3>Categories</h3>
      <ul style={{ listStyle: "none", padding: "0" }}>
        <li>
          <button
            onClick={() => setActivePage("Products")}
            style={{
              background: "none",
              border: "none",
              padding: "10px",
              cursor: "pointer",
              textAlign: "left",
              width: "100%",
            }}
          >
            Products
          </button>
        </li>
        <li>
          <button
            style={{
              background: "none",
              border: "none",
              padding: "10px",
              cursor: "pointer",
              textAlign: "left",
              width: "100%",
            }}
          >
            Orders
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;