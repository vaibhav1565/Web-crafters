import { Link } from "react-router-dom";
import marketImage from "../assets/image.png"

const Header = () => (
  <header className="flex justify-between bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-6 shadow-lg">
    <Link to="/home">
      <img src={marketImage} alt="logo" className="h-28 ml-8"/>
    </Link>
    <div className="mr-8">
      <Link to="/cart"><span className="mr-2">Cart</span></Link>
      <Link>About us</Link>
    </div>
  </header>
);

export default Header;