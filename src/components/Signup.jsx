import React from "react";
import { useForm } from "react-hook-form";
export default function Signup() {
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
    <div className="flex h-screen justify-center items-center">
      <div className="w-96 h-auto bg-slate-500 flex flex-col rounded-lg shadow-lg p-6">
        <h1 className="text-4xl font-bold underline text-white text-center mb-5">
          Sign Up
        </h1>
        {isSubmitting && <div>loading.........</div>}
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <label htmlFor="name" className="text-white m-1">
            Name
          </label>
          <input
          autoComplete="off"
            className="w-full p-2 h-8"
            placeholder="Enter your Full name"
            {...register("name", {
              required: { value: true, message: "**Required Field" },
              minLength: {
                value: 4,
                message: "The minimum length of user's name should be 4",
              },
              pattern: {
                value: /^[a-zA-Z ]+$/,
                message: "Name can only contain letters.",
              },
            })}
          />
          <div className="h-6">
          {errors.name && (
            <span className="text-red-300">{errors.name.message}</span>
          )}
          </div>
          <label htmlFor="email" className="text-white m-1">
            Email
          </label>
          <input
          autoComplete="off"
            type="email"
            className="w-full p-2 h-8"
            placeholder="Enter your registered E-mail"
            {...register("email", {
              required: { value: true, message: "**Required Field" },
              minLength: {
                value: 4,
                message: "Invalid E-mail",
              },
              pattern: {
                value: /^[a-zA-Z0-9_@.]+$/,
                message: "Email can only contain letters, numbers, _ and @",
              },
            })}
          />
           <div className="h-6">
          {errors.email && (
            <span className="text-red-300">{errors.email.message}</span>
          )}
          </div>
          <label htmlFor="password" className="text-white mt-4">
            Password
          </label>
          <input
          autoComplete="off"
            type="password"
            className={`w-full p-2 h-8 
              ${
                errors.password || errors["conf-password"]
                  ? "border border-red-400"
                  : ""
              }`}
          
            placeholder="Enter your password"
            {...register("password", {
              required: { value: true, message: "**Required Field" },
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long.",
              },
              pattern: {
                value: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message: "Password must contain at least 8 characters, including letters, numbers, and special characters.",
              },
            }
            )}
          />
          <div className="h-6">
          {errors.password && (
            <span className="text-red-300">{errors.password.message}</span>
          )}
          </div>
          <label htmlFor="conf-password" className="text-white mt-4">
            Confirm Password
          </label>
          <input
          autoComplete="off"
            type="password"
            className={`w-full p-2 h-8   outline-none
              ${
                errors.password || errors["conf-password"]
                  ? "border border-red-500"
                  : ""
              }`}
            placeholder="Confirm password"
            {...register("conf-password", {
              required: { value: true, message: "**Required Field" },
              validate: (value) => {
                const password = watch("password");
                return value === password || "Passwords do not match";
              },
            })}
          />
           <div className="h-6">
          {errors["conf-password"] && (
            <span className="text-red-300">
              {errors["conf-password"].message}
            </span>
          )}
          </div>
          <input
            disabled={isSubmitting}
            className="bg-blue-500 text-white p-2 w-11/12 rounded self-center hover:bg-blue-600 cursor-pointer mt-6"
            type="submit"
          />
        </form>
        <div className="text-center mt-6 hover:underline text-white hover:text-blue-200 cursor-pointer">
          <a href="/login">Already have an account? Log In</a>
        </div>
      </div>
    </div>
  );
}
