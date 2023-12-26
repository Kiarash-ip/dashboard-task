import React, { useState } from "react";
import Input from "../components/input";
import useStore from "../store/store";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useStore((state) => state);

  function submitHandler(e) {
    e.preventDefault();
    if (mobile.length > 10 && password.length > 6) {
      login({ mobile, password });
      navigate("/");
    }
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={submitHandler}>
              <Input
                name="mobile"
                label="Mobile"
                type="tel"
                value={mobile}
                setValue={setMobile}
                placeholder="09 ..."
              />
              <Input
                name="password"
                label="Password"
                type="password"
                value={password}
                setValue={setPassword}
                placeholder="password"
              />
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
