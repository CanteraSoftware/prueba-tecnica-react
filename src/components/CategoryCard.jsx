import React from 'react';
import '../styles/CategoryCard.css';
import { Link } from 'react-router-dom';

export function CategoryCard({ img, title, name, filterToModal }) {
  return (
    <Link
      to={name}
      className='category-card-container'>
      <img src={img} alt="" className='category-img' />
      {name && <p className="category-name home">{name}</p>}
      <h2 className='category-title'
        onClick={() => filterToModal(title)}
      >
        {title}
      </h2>
    </Link>
  );
}

