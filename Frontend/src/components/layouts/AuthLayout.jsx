import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-br from-indigo-50 to-white">
      <div className="flex w-full max-w-4xl bg-white shadow-2xl rounded-2xl overflow-hidden">
        {/* Left branding section */}
        <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-indigo-600 text-white p-10">
          <h2 className="text-3xl font-bold">Expense Tracker</h2>
          <p className="mt-4 text-sm text-indigo-100 text-center">
            Track your income and expenses effortlessly, and take control of
            your finances.
          </p>
        </div>

        {/* Right auth form section */}
        <div className="w-full md:w-1/2 px-8 py-10 flex flex-col justify-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
