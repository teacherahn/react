const Header = () => {  
  return (
    <div style={{ textAlign: "center", marginBottom: "20px" }}>
      <h1 style={{ fontSize: "28px", margin: "0" }}>📆 Todo List 📆</h1>
      <p style={{ fontSize: "14px", color: "#666", margin: "5px 0 0" }}>
        {new Date().toDateString()}
      </p>
    </div>
  );
}

export default Header;