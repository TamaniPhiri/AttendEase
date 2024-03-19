import bg from "../../assets/bg.png";

const Register = () => {
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
          placeholder="New Password"
          className=" border focus:outline-none md:p-4 p-3 focus:outline-purple-400"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className=" border focus:outline-none md:p-4 p-3 focus:outline-purple-400"
        />
        <a
          href="/home"
          className=" md:p-4 p-3 hover:bg-purple-500 text-center font-semibold bg-purple-600 text-white"
        >
          Register
        </a>
        <div className=" flex gap-2 w-full items-center justify-center text-white">
          <span>Already have an account</span>
          <a href="/" className=" text-purple-300">
            Login
          </a>
        </div>
      </div>
    </section>
  );
};

export default Register;
