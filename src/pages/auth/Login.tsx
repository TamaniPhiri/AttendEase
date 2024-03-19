const Login = () => {
  return (
    <section className="min-h-screen w-full px-4 flex flex-col md:px-12 items-center justify-center">
      <h1 className=" font-bold text-2xl">
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
          href="/"
          className=" md:p-4 p-3 hover:bg-purple-500 text-center font-semibold bg-purple-600 text-white"
        >
          Login
        </a>
      </div>
    </section>
  );
};

export default Login;
