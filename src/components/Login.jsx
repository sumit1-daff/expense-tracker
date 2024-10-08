import React from "react";
import { useForm } from "react-hook-form";
export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    let r = await fetch("http://localhost:3000/", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    });
  };
  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <div className="w-96 h-auto bg-slate-500 flex flex-col rounded-lg shadow-lg p-6">
          <h1 className="text-4xl font-bold underline text-white text-center mb-5">
            Log In
          </h1>
          {isSubmitting && <div>loading.........</div>}
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
            <label htmlFor="username" className="text-white m-1">
              Email
            </label>
            <input
              type="email"
              className="w-full p-2 h-8"
              placeholder="Enter your registered Email"
              {...register("username", {
                required: { value: true, message: "**Required Field" },
                minLength: {
                  value: 4,
                  message: "The minimum length og username should be 4",
                },
                maxLength: {
                  value: 10,
                  message: "maximum length should be 10",
                },
                pattern: {
                  value: /^[a-zA-Z0-9_@]+$/,
                  message:
                    "Username can only contain letters, numbers, _ and @",
                },
              })}
            />
            <div className="h-6">
              {errors.username && (
                <span className="text-red-300">{errors.username.message}</span>
              )}
            </div>
            <label htmlFor="password" className="text-white mt-4">
              Password
            </label>
            <input
              type="password"
              className="w-full p-2 h-8"
              placeholder="Enter your password"
              {...register("password", { required: true })}
            />
            <div className="h-6">
              {errors.password && (
                <span className="text-red-300">**Required Field</span>
              )}
            </div>
            <input
              disabled={isSubmitting}
              className="bg-blue-500 text-white p-2 w-11/12 rounded self-center hover:bg-blue-600 cursor-pointer mt-6"
              type="submit"
            />
          </form>
          <div className=" mt-3 flex text-blue-50 cursor-pointer justify-end">
            <a className="hover:underline hover:text-blue-200 " href="/">
              Forgot Password?
            </a>
          </div>
          <div className="text-center mt-6 hover:underline text-white hover:text-blue-200 cursor-pointer">
            <a href="/signup">Don't have an account? Sign Up</a>
          </div>
        </div>
      </div>
    </>
  );
}
