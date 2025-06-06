import React from 'react';

const ProductCard = ({ product, onAddToCart, onViewDetails }) => {
  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(product);
    }
  };

  const handleViewDetails = () => {
    if (onViewDetails) {
      onViewDetails(product);
    }
  };

  const discountPercentage = product.offerPrice 
    ? Math.round(((product.price - product.offerPrice) / product.price) * 100)
    : 0;

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={product.image[0]}
          alt={product.name}
          className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Discount Badge */}
        {discountPercentage > 0 && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            {discountPercentage}% OFF
          </div>
        )}
        
        {/* Stock Status */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-bold text-lg">Out of Stock</span>
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="p-4 sm:p-6">
        {/* Category */}
        <div className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-2">
          {product.category}
        </div>
        
        {/* Product Name */}
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 line-clamp-2 hover:text-green-600 transition-colors duration-200">
          {product.name}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description.join(' • ')}
        </p>
        
        {/* Price Section */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-green-600">
              ₹{product.offerPrice || product.price}
            </span>
            {product.offerPrice && (
              <span className="text-lg text-gray-500 line-through">
                ₹{product.price}
              </span>
            )}
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex space-x-2">
          <button
            onClick={handleViewDetails}
            className="flex-1 px-4 py-2 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-600 hover:text-white transition-all duration-200 font-semibold text-sm"
          >
            View Details
          </button>
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`flex-1 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 ${
              product.inStock
                ? 'bg-green-600 text-white hover:bg-green-700 hover:shadow-lg'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
