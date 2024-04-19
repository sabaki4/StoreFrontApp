import React from "react";
import { Link } from "react-router-dom";
import ItemThumbnail from "./ItemThumbnail";

const ItemList = ({ items, category }) => {
  const filteredItems = category ? items.filter((item) => item.category === category) : items;

  const itemComponents = filteredItems.map(item => {
    <Link to={`/items/${item.id}`} key={item.id} className="itemLink">
      <ItemThumbnail item={item} />
    </Link>
  });

  return (
    <div>

      <div className="itemLists">
        <div className="items">
          {itemComponents}
        </div>
      </div>
    </div>
  );
};

export default ItemList;