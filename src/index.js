import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [search, setSearch] = useState("");
  return (
    <div>
      <h2>Search Keyword</h2>
      <p>Searched Keyword: {search}</p>
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
