const ProductList = ({ products }) => {
    return (
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow-lg">
            <img src={product.image} alt={product.name} className="h-32 w-full object-cover rounded-t-md" />
            <h2 className="text-xl font-semibold text-green-700 mt-4">{product.name}</h2>
            <p className="text-gray-700 mt-2">{product.category}</p>
            <p className="text-lg font-bold text-blue-600 mt-2">${product.price}</p>
            <button className="bg-green-500 text-white px-4 py-2 rounded mt-4 hover:bg-green-600">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    );
  }
export default  ProductList ;