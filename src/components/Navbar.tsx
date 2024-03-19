import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" bg-purple-600 w-full px-4 md:px-12 flex items-center py-4 justify-between">
      <div>
        <h1 className="text-white font-bold text-2xl">
          Attend<span className=" text-purple-900">Ease</span>
        </h1>
      </div>
      <div className=" flex items-center gap-8 text-white">
        <Link to={"/home"}>link 1</Link>
        <Link to={"/home"}>link 2</Link>
        <Link to={"/home"}>link 3</Link>
      </div>
    </nav>
  );
};

export default Navbar;
