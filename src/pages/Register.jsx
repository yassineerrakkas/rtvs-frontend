import React, { useState } from "react";

const Register = () => {
  const [gender, setGender] = useState("Male");

  const handleGenderSelect = (selectedGender) => {
    setGender(selectedGender);
  };

  return (
    <div className="flex flex-col items-center justify-start mb-16 pt-32">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Create your account
      </h1>
      <form className="flex flex-col gap-4 mt-4 w-80">
        <input
          type="text"
          placeholder="First Name"
          className="p-2 border-2 border-gray-300 rounded-lg h-14"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="p-2 border-2 border-gray-300 rounded-lg h-14"
        />
        <input
          type="text"
          placeholder="Email"
          className="p-2 border-2 border-gray-300 rounded-lg h-14"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 border-2 border-gray-300 rounded-lg h-14"
        />

        <div className="flex justify-around gap-4">
          <button
            type="button"
            onClick={() => handleGenderSelect("Male")}
            className={`text-lg ${
              gender === "Male" ? "text-gray-900 font-bold" : "text-gray-500"
            }`}
          >
            Male
          </button>
          <button
            type="button"
            onClick={() => handleGenderSelect("Female")}
            className={`text-lg duration-150 ${
              gender === "Female" ? "text-gray-900 font-bold" : "text-gray-500"
            }`}
          >
            Female
          </button>
        </div>

        <button className="text-gray-100 bg-slate-800 p-2 rounded-lg hover:rounded-xl hover:bg-slate-700 duration-500">
          Register
        </button>
        <div className="flex flex-col items-center justify-center mt-4 w-80">
          <div className="flex gap-2 w-full items-center">
            <p className="bg-slate-400 h-[1px] w-full"></p>
            <p className="text-gray-900">OR</p>
            <p className="bg-slate-400 h-[1px] w-full"></p>
          </div>
          <div className="flex gap-4 mt-4 w-full">
            <button className="flex items-center gap-4 justify-center text-gray-900 border-2 border-slate-300 p-2 rounded-lg hover:rounded-xl hover:bg-slate-200 duration-500 w-full h-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>
              <p>Continue with Google</p>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
