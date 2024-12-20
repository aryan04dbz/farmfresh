// FarmProductCard.js
import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css';

function FarmProductCard({ product }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img src={product.image || "abc"} alt={product.name || "xyz"} className="w-full h-48 object-cover" />
      <h2 className="text-lg font-bold">{product.name || "No Name"}</h2>
      <p className="text-lg">${product.price || "0"}</p>
      <Link to={`/product/${product.id || "random"}`} className="btn btn-primary-green">
        View Details
      </Link>
    </div>
  )
}

export default FarmProductCard