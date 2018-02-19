import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {

  const items = props.items.map((item) => 
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
          { items }
        </ul>
      </div>
    </div>
  );
}


