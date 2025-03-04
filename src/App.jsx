import { use, useEffect, useState, useSyncExternalStore } from "react";
import "./App.css";
import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";

function App() {
  const API_URL = "http://localhost:3500/items";
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [newItem, setNewItem] = useState("");

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = { id, checked: false, name: item };
    const listItems = [...items, addNewItem];
    setItems(listItems);
    localStorage.setItem("todo_list", JSON.stringify(listItems));
  };

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        console.log(response);
        const listItems = await response.json;
        console.log(listItems);
        setItems(listItems);
      } catch (err) {
        console.log(err.stack);
      }
    };
    (async () => await fetchItems())();
  }, []);

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("todo_list", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const deleteItems = items.filter((item) => item.id !== id);
    setItems(deleteItems);
    localStorage.setItem("todo_list", JSON.stringify(deleteItems));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    setNewItem("");
    addItem(newItem);
  };

  return (
    <>
      <Header />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        items={items.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        )}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </>
  );
}

export default App;
