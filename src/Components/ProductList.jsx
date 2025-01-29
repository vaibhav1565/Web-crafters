import { useDispatch, useSelector } from "react-redux";
import { decrementProduct, incrementProduct } from "../utils/productsSlice";


const ProductList = () => {
  const productsData = useSelector((store) => store.products.products);
  const dispatch = useDispatch();

  function handleDecrement(id) {
    dispatch(decrementProduct(id));
  }
  function handleIncrement(id) {
    dispatch(incrementProduct(id));
  }
  console.log(productsData);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {Object.values(productsData).map((product) => {
        const { id, image, title, description, cartCount, rating, productCost } = product;

        return (
          <div
            key={id}
            className="h-[600px] bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img src={image} alt={title} className="h-64 w-full object-contain" />
            <div className="p-4 flex flex-col">
              <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
              <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                {description}
              </p>
              <p className="text-yellow-500 mt-2">⭐ {rating.rate}</p>
              <p className="text-center mt-1 line-clamp-2">
                ₹ {productCost / 100}/-
              </p>

              {/* Cart Button */}
              {cartCount === 0 ? (
                <button
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition cursor-pointer"
                  onClick={() => handleIncrement(id)}
                >
                  Add to Cart
                </button>
              ) : (
                <div className="mt-4 flex items-center justify-between bg-gray-200 rounded-lg px-3 py-2">
                  <button
                    className="text-lg font-semibold text-blue-600 cursor-pointer"
                    onClick={() => handleDecrement(id)}
                  >
                    -
                  </button>
                  <span className="text-lg font-semibold">{cartCount}</span>
                  <button
                    className="text-lg font-semibold text-blue-600 cursor-pointer"
                    onClick={() => handleIncrement(id)}
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;