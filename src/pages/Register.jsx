import React, { useState } from "react";

const Register = () => {
  const [gender, setGender] = useState("Male");

  const handleGenderSelect = (selectedGender) => {
    setGender(selectedGender);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold text-gray-900">Register</h1>
      <form className="flex flex-col gap-4 mt-4 w-60">
        <input
          type="text"
          placeholder="First Name"
          className="p-2 border-2 border-gray-300 rounded-lg"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="p-2 border-2 border-gray-300 rounded-lg"
        />
        <input
          type="text"
          placeholder="Email"
          className="p-2 border-2 border-gray-300 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 border-2 border-gray-300 rounded-lg"
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
      </form>
    </div>
  );
};

export default Register;
