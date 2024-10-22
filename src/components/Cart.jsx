const Cart = ({ cartItems }) => {
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);
    
    return (
      <div className="container mx-auto p-8">
        <h2 className="text-2xl font-bold text-blue-600">Shopping Cart</h2>
        <div className="mt-6">
          {cartItems.map(item => (
            <div key={item.id} className="flex justify-between items-center p-4 border-b">
              <span>{item.name}</span>
              <span className="text-lg text-green-700">${item.price}</span>
            </div>
          ))}
        </div>
        <div className="mt-6 text-xl font-semibold text-green-700">
          Total: ${total.toFixed(2)}
        </div>
        <button className="bg-blue-600 text-white px-6 py-2 rounded mt-4 hover:bg-blue-700">
          Checkout
        </button>
      </div>
    );
  }

export default Cart;