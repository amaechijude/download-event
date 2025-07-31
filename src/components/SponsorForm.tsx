import React, { useState } from "react";

interface FormData {
  lastName: string;
  firstName: string;
  email: string;
  companyName: string;
  telephone: string;
}

export function SponsorForm() {
  const [formData, setFormData] = useState<FormData>({
    lastName: "",
    firstName: "",
    email: "",
    companyName: "",
    telephone: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
    alert("Partnership form submitted successfully!");
  };

  return (
    <div className="bg-[#031632] flex items-center justify-center p-6">
      {/* Form Container */}
      <div className="relative z-10 w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">
            Partner with Us
          </h1>
        </div>

        {/* Form */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Last Name */}
            <div>
              <label
                htmlFor="lastName"
                className="block text-white text-sm font-medium mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Enter your last name here"
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Company Name */}
            <div>
              <label
                htmlFor="companyName"
                className="block text-white text-sm font-medium mb-2"
              >
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                placeholder="Enter your brand name here"
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* First Name */}
            <div>
              <label
                htmlFor="firstName"
                className="block text-white text-sm font-medium mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Enter your first name here"
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Telephone */}
            <div>
              <label
                htmlFor="telephone"
                className="block text-white text-sm font-medium mb-2"
              >
                Telephone
              </label>
              <input
                type="tel"
                id="telephone"
                name="telephone"
                value={formData.telephone}
                onChange={handleInputChange}
                placeholder="+000-000-0000-000"
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Email Address - Full Width */}
            <div className="md:col-span-1">
              <label
                htmlFor="email"
                className="block text-white text-sm font-medium mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Example: user@gmail.com"
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <button
              onClick={handleSubmit}
              className="bg-lime-400 hover:bg-lime-500 text-black font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-lime-400/50"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
