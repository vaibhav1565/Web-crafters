import { Link } from "react-router";

const Home = () => {
  return (
    <div className="bg-gray-50 p-4">
      {/* Header Section */}
      <div className="text-center py-4">
        <h1 className="text-3xl font-bold text-gray-800">Marketplace</h1>
        {/* <img src={IndiaMap} alt="India Map" className="w-1/2 mx-auto my-4" /> */}
        <Link to="/home">
          <button className="px-6 py-2 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600">
            Shop Now!
          </button>
        </Link>
      </div>

      {/* Discover Section */}
      <div className="mt-8">
        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-16">
          <div className="relative group">
            <img
              src="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
              alt="Pottery"
              className="w-full h-64 object-contain rounded-xl shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
              <p className="text-white font-semibold">Jewellery</p>
            </div>
          </div>
          <div className="relative group">
            <img
              src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
              alt="Handmade Bowls"
              className="w-full h-64 object-contain rounded-xl shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
              <p className="text-white font-semibold">T-shirts</p>
            </div>
          </div>
          <div className="relative group">
            <img
              src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
              alt="Handicrafts"
              className="w-full h-64 object-contain rounded-xl shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
              <p className="text-white font-semibold">Jackets</p>
            </div>
          </div>
        </div>

        {/* Iframe Section */}
        <div className="mt-8 flex justify-center">
        <div>
            <h1 className="text-center text-2xl">Location</h1>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d219979.2085961512!2d76.37138668671876!3d30.516086499999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fc32344a6e2d7%3A0x81b346dee91799ca!2sChitkara%20University!5e0!3m2!1sen!2sin!4v1738143559499!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{border: 0}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;