import { useState } from "react";
import "./App.css";
import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer";
import AddItem from "./AddItem";

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("todo_list") || "[]")
  );
  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = { id, checked: false, name: item };
    const listItems = [...items, addNewItem];
    setItems(listItems);
    localStorage.setList("todo_list", JSON.stringify(listItems));
  };
  const [newItem, setNewItem] = useState("");
  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setList("todo_list", JSON.stringify(listItems));
  };
  const handleDelete = (id) => {
    const deleteItems = items.filter((item) => item.id !== id);
    setItems(deleteItems);
    localStorage.setList("todo_list", JSON.stringify(listItems));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    console.log(newItem);
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
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </>
  );
}

export default App;
