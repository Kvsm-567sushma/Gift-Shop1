import React, { useState } from "react";
import Anniversary from "./Anniversary";
import Birthday from "./Birthday";
import BabyShower from "./BabyShower";
import HomeCeremony from "./HomeCeremony";

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const renderCategory = () => {
    switch (selectedCategory) {
      case "Anniversary":
        return <Anniversary />;
      case "Birthday":
        return <Birthday />;
      case "BabyShower":
        return <BabyShower />;
      case "HomeCeremony":
        return <HomeCeremony />;
      default:
        return <p>Select a category to display its details.</p>;
    }
  };

  return (
    <div>
      <h2>Products</h2>
      <ul style={{ display: "flex", listStyle: "none", padding: "0" }}>
        <li style={{ margin: "10px" }}>
          <button
            onClick={() => setSelectedCategory("Anniversary")}
            style={{ padding: "10px", cursor: "pointer" }}
          >
            Anniversary
          </button>
        </li>
        <li style={{ margin: "10px" }}>
          <button
            onClick={() => setSelectedCategory("Birthday")}
            style={{ padding: "10px", cursor: "pointer" }}
          >
            Birthday
          </button>
        </li>
        <li style={{ margin: "10px" }}>
          <button
            onClick={() => setSelectedCategory("BabyShower")}
            style={{ padding: "10px", cursor: "pointer" }}
          >
            Baby Shower
          </button>
        </li>
        <li style={{ margin: "10px" }}>
          <button
            onClick={() => setSelectedCategory("HomeCeremony")}
            style={{ padding: "10px", cursor: "pointer" }}
          >
            Home Ceremony
          </button>
        </li>
      </ul>
      <div style={{ marginTop: "20px" }}>{renderCategory()}</div>
    </div>
  );
};

export default ProductsPage;