import { useSelector, useDispatch } from "react-redux";
import { incrementProduct, decrementProduct } from "../utils/productsSlice";

const Cart = () => {
  const productsData = useSelector((store) => store.products.products);
  const dispatch = useDispatch();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>
      <div className="space-y-4">
        {Object.values(productsData)
          .filter((product) => product.cartCount > 0) // Only show items in cart
          .map((product) => {
            const { id, title, cartCount, productCost } = product;

            return (
              <div
                key={id}
                className="flex items-center justify-between bg-gray-100 rounded-lg p-4"
              >
                <span className="text-lg font-semibold">{title}</span>
                <div className="flex">
                  <div className="flex items-center space-x-4">
                    <button
                      className="text-lg font-semibold text-blue-600 cursor-pointer"
                      onClick={() => dispatch(decrementProduct(id))}
                    >
                      -
                    </button>
                    <span className="text-lg font-semibold">{cartCount}</span>
                    <button
                      className="text-lg font-semibold text-blue-600 cursor-pointer"
                      onClick={() => dispatch(incrementProduct(id))}
                    >
                      +
                    </button>
                  </div>
                  <span className="text-lg font-semibold ml-8">
                    ₹{productCost / 100}
                  </span>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Cart;
