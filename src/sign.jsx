import { Link , useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup"; 
import React, { useState } from "react";

export default function Sign() {
  const navigate = useNavigate();
const [isPasswordFocused, setIsPasswordFocused] = useState(false);
 const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
    },
//validation schema
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .matches(/[A-Z]/, "At least one uppercase letter required")
        .matches(/[a-z]/, "At least one lowercase letter required")
        .matches(/[0-9]/, "At least one number required")
        .matches(/[^a-zA-Z0-9]/, "At least one special character required")
        .required("Password is required"),
         name: Yup.string()
         .required("Name is required")

    }),
     onSubmit: (values) => {
       console.log("form data",values)
  localStorage.setItem("userData", JSON.stringify(values));
  // Redirect to login
  navigate("/");
},
  });
  const password = formik.values.password;
const conditions = {
  length: password.length >= 6,
  upper: /[A-Z]/.test(password),
  lower: /[a-z]/.test(password),
  numberSymbol: /[0-9!@#$%^&*]/.test(password),
};

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            action="#"
            method="POST"
            className="space-y-6"
            onSubmit={formik.handleSubmit}
          >
             <div>
              <label
                htmlFor="Name"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Enter Your Name
              </label>
<div className="mt-2">
  <input
                  id="name"
                  name="name"
                  type="name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                value={formik.values.name}
                  onChange={formik.handleChange}
          />
           {formik.touched.name && formik.errors.name && (
          <p className="text-red-500 text-sm">{formik.errors.name}</p>
        )}
</div>              
</div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Email Address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                />
                  {formik.touched.email && formik.errors.email && (
          <p className="text-red-500 text-sm">{formik.errors.email}</p>
        )}
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  
                   onBlur={(e) => {
    formik.handleBlur(e);
    setIsPasswordFocused(false); // blur => hide
  }}
  onFocus={() => setIsPasswordFocused(true)} // focus => show
/>
   {formik.touched.password && formik.errors.password && (
          <p className="text-red-500 text-sm">{formik.errors.password}</p>
        )}
             {isPasswordFocused && (
  <ul className="text-sm mt-2 space-y-1">
    <li className={conditions.length ? "text-green-600" : "text-red-500"}>
      • Minimum 6 characters
    </li>
    <li className={conditions.upper ? "text-green-600" : "text-red-500"}>
      • At least one uppercase letter
    </li>
    <li className={conditions.lower ? "text-green-600" : "text-red-500"}>
      • At least one lowercase letter
    </li>
    <li className={conditions.numberSymbol ? "text-green-600" : "text-red-500"}>
      • At least one number or symbol
    </li>
  </ul>
)}
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Already Have an Account?{" "}
            <Link
              to="/"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
