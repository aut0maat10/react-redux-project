import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {

  const renderItems = props.items.map((item) => 
      <li key={item.id}>
        <Link to={`/items/${item.id}`}>
          <h4>{item.name}</h4>
        </Link>
      </li>
    );

  return (
    <div className="container">
      <div>
        <ul>
          { renderItems }
        </ul>
      </div>
    </div>
  );
}


