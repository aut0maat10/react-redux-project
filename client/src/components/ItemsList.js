import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {

  const renderItems = props.items.map((item) => 

    <li key={item.id}>
      <Link to={`/items/${item.id}`}>
        <div className="list-card">
        <h4>{item.name} ({item.price})</h4>
        </div>
      </Link>
    </li>
  );

  return (
    <div className="container">
      <div>
        <ul className="item">
          { renderItems }
        </ul>
      </div>
    </div>
  );
}


