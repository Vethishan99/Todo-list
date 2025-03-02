import React from "react";
import ListItems from "./ListItems";
const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <main>
      {items.length ? (
        <ListItems
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p className="para">Your list is empty</p>
      )}
    </main>
  );
};
export default Content;
