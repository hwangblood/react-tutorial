import { useState } from "react";

import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppinglist"))
  );

  const [newItemTitle, setNewItemTitle] = useState("");
  const [search, setSearch] = useState("");

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem("shoppinglist", JSON.stringify(newItems));
  };

  const addItem = (title) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;

    const myNewItem = { id, checked: false, title };
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndSaveItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // don't reload the page
    if (!newItemTitle) return;
    addItem(newItemTitle);
    setNewItemTitle(""); // clear the input field
  };

  return (
    <div className="App">
      <Header title="Grocery List" />
      <AddItem
        newItemTitle={newItemTitle}
        setNewItemTitle={setNewItemTitle}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        items={items.filter((item) =>
          item.title.toLowerCase().includes(search.toLowerCase())
        )}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
