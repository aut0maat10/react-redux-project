import React from 'react';
import { Link } from 'react-router-dom';
import LikeButton from './LikeButton';

export default (props) => {
  const renderItems = props.items.map((item) => 
  
    <li key={item.id}>
      <Link to={`/items/${item.id}`}>
        <h4>{item.name} ({item.price})</h4>
      </Link>
      <LikeButton item={item}/>
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


