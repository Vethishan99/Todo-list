import React from "react";
import LineItems from "./LineItems";

const ListItems = ({ items, handleCheck, handleDelete }) => {
  return (
    <main>
      <ul>
        {items.map((item) => (
          <LineItems
            item={item}
            key={item.id}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </main>
  );
};

export default ListItems;
