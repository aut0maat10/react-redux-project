import React from 'react';
import { Link } from 'react-router-dom';

const ItemsList = ({ items }) => {
  const renderItems = items.map(item =>
    <Link >{pet.name}</Link>
  );

  return (
    <div>
      {renderItems}
    </div>
  );
};

export default ItemsList;