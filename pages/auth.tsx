import React, { useCallback, useState } from "react";
import Input from "../components/Input";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [varient, setVarient] = useState("");

  const togleVarient = useCallback(() => {
    setVarient((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  return (
    <div className="relative h-full w-full bg-[url('/Images/Hero.png')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/Images/logo.svg" alt="logo" className="h-12" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 p-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {varient === "login" ? "Sign in" : "Resister"}
            </h2>
            <div className="flex flex-col gap-4">
              {varient === "register" && (
                <Input
                  lable="Username"
                  onchange={(e: any) => setName(e.target.value)}
                  id="name"
                  type="text"
                  value={name}
                />
              )}
              <Input
                lable="Email"
                onchange={(e: any) => setEmail(e.target.value)}
                id="email"
                type="email"
                value={email}
              />
              <Input
                lable="Password"
                onchange={(e: any) => setPassword(e.target.value)}
                id="pass"
                type="password"
                value={password}
              />
            </div>
            <button className="bg-red-600 py-3 text-white rounded-md w-full my-10 hover:bg-red-700 transition">
              {varient === "login" ? "login" : "Sign up"}
            </button>
            <p className="text-neutral-500">
              {varient === "login"
                ? "First time using Netflix?"
                : "Already have an account"}
              <span
                onClick={togleVarient}
                className="text-white  ml-2 hover:underline cursor-pointer"
              >
                {varient === "login" ? "Create new account" : "Login"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
