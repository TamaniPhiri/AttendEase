const Login = () => {
  return (
    <section className="min-h-screen w-full px-4 flex flex-col md:px-12 items-center justify-center">
      <h1 className=" font-bold text-2xl">
        Attend <span className=" text-purple-500">Ease</span>
      </h1>
      <div className="lg:max-w-md flex flex-col w-full gap-4">
        <input
          type="text"
          placeholder="Register No."
          className=" border focus:outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className=" border focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className=" border focus:outline-none"
        />
      </div>
    </section>
  );
};

export default Login;
