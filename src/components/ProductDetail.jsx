const ProductDetail = ({ product }) => {
    return (
      <div className="container mx-auto p-8">
        <div className="flex flex-col lg:flex-row">
          <img src={product.image} alt={product.name} className="h-64 w-full lg:w-1/2 object-cover rounded-md" />
          <div className="lg:ml-8 mt-4 lg:mt-0">
            <h1 className="text-3xl font-bold text-blue-600">{product.name}</h1>
            <p className="text-xl text-gray-700 mt-4">{product.description}</p>
            <p className="text-lg text-gray-500 mt-2">Category: {product.category}</p>
            <p className="text-xl font-semibold text-green-700 mt-4">${product.price}</p>
            <button className="bg-green-500 text-white px-6 py-2 rounded mt-4 hover:bg-green-600">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  }

  export default ProductDetail;