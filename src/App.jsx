import { useState } from "react";
import "./App.css";
import Content from "./assets/content";
import Header from "./assets/header";
import Footer from "./assets/Footer";

function App() {
  const [items, setItems] = useState([
    { id: 1, checked: true, name: "Learn coding" },
    { id: 2, checked: false, name: "Play cricket" },
    { id: 3, checked: false, name: "Read about AI" },
  ]);
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

  return (
    <>
      <Header />
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
