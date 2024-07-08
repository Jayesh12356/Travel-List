import Form from "./Form";
// import Item from "./Item";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Stats from "./Stats";
import { useState } from "react";

// const initialItems = [
//   { id: 1, description: "Joggers", quantity: 2, packed: false },
//   { id: 2, description: "T-shirts", quantity: 12, packed: true },
// ];

export default function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleCheck(id) {
    // setItems((items) => items.map((item) => item.id === id && !item.packed));
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all the items"
    );
    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onCheck={handleCheck}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
