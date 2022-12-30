import { useState, useEffect } from "react";

import Form from "./Form";
import List from "./List";
import Table from "./Table";

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com";
  const [reqType, setReqType] = useState("users");
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}/${reqType}`);
        if (!response.ok) throw Error("Can't fetch data.");

        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.log(error.message);
      } finally {
      }
    };
    setTimeout(() => {
      fetchItems();
    }, 2000);
  }, [reqType]);
  return (
    <div className="App">
      <Form reqType={reqType} setReqType={setReqType} />

      {/* <List items={items} /> */}
      <Table items={items} />
    </div>
  );
}

export default App;
