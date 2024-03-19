import { Link } from "react-router-dom";
import bg from "../../assets/bg.png";

const Login = () => {
  return (
    <section
      style={{ backgroundImage: `url(${bg})` }}
      className="min-h-screen w-full px-4 flex bg-cover bg-center bg-no-repeat flex-col md:px-12 items-center justify-center"
    >
      <h1 className="text-white font-bold text-2xl">
        Attend<span className=" text-purple-500">Ease</span>
      </h1>
      <div className="lg:max-w-sm flex flex-col w-full gap-4 my-6">
        <input
          type="text"
          placeholder="Register No."
          className=" border focus:outline-none md:p-4 p-3 focus:outline-purple-400"
        />
        <input
          type="email"
          placeholder="Email"
          className=" border focus:outline-none md:p-4 p-3 focus:outline-purple-400"
        />
        <input
          type="password"
          placeholder="Password"
          className=" border focus:outline-none md:p-4 p-3 focus:outline-purple-400"
        />
        <a
          href="/home"
          className=" md:p-4 p-3 hover:bg-purple-500 text-center font-semibold bg-purple-600 text-white"
        >
          Login
        </a>
        <div className=" flex gap-2 w-full items-center justify-center text-white">
          <span>Don't have an account</span>
          <Link to="/register" className=" text-purple-300">
            Register
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
