import { useEffect, useState } from "react";

const styles = {
  app: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  header: {
    backgroundColor: "#4f46e5",
    color: "white",
    textAlign: "center",
    padding: "1.2rem",
    fontSize: "1.5rem",
    fontWeight: 600,
    letterSpacing: "1px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  body: {
    flex: 1,
    padding: "2rem",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  search: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.8rem",
    marginBottom: "2rem",
  },
  searchInput: {
    width: "250px",
    padding: "0.6rem 1rem",
    border: "1px solid #ccc",
    borderRadius: "8px",
    outline: "none",
    fontSize: "1rem",
    transition: "all 0.2s ease",
  },
  searchButton: {
    backgroundColor: "#4f46e5",
    color: "white",
    border: "none",
    padding: "0.6rem 1rem",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: 500,
    transition: "all 0.2s ease",
    "&:hover": {
      backgroundColor: "#3730a3",
    },
  },
  products: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "1.5rem",
  },
  product: {
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "1rem",
    textAlign: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    },
  },
};

// Add global styles
const globalStyles = document.createElement("style");
globalStyles.innerHTML = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  body {
    background-color: #f4f4f9;
    color: #333;
  }

  .search input:focus {
    border-color: #4f46e5;
    box-shadow: 0 0 5px rgba(79, 70, 229, 0.4);
  }
`;
document.head.appendChild(globalStyles);

const Header = () => {
  return <div style={styles.header}>Header</div>;
};
const Search = ({ filterHandler }) => {
  return (
    <div style={styles.search}>
      <input
        type="text"
        name="search"
        id="search"
        style={styles.searchInput}
        onChange={(e) => filterHandler(e.target.value)}
      />
      <button style={styles.searchButton}>search</button>
    </div>
  );
};
const Product = ({ product }) => {
  return (
    <div style={styles.product}>
      <img src={product.img} alt="img-here" />
      <h2>{product.title}</h2>
      <h3>{product.price}</h3>
    </div>
  );
};
const Body = () => {
  const [products, setProducts] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredData(data);
      })
      .catch((err) => console.log("unable to load data", err));
  }, []);
  const filterHandler = (query) => {
    const data = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(data);
  };
  return (
    <div style={styles.body}>
      <Search filterHandler={filterHandler} />
      <div style={styles.products}>
        {filteredData.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
const Footer = () => {
  return <div style={styles.footer}>Footer</div>;
};
function App() {
  return (
    <div style={styles.app}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
export default App;
