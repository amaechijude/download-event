import React, { useState } from "react";

interface FormData {
  lastName: string;
  firstName: string;
  email: string;
  companyName: string;
  telephone: string;
}

export default function Download2025Sponsor() {
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
    <>
      <img
        src="/sponsor-bg.png"
        alt="Background Pattern"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Be a Sponsor at Download{" "}
            <span className="text-orange-400">2025</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 font-light">
            Support Innovation. Empower Youth. Build the
            <br />
            Future.
          </p>
        </div>

        {/* Content Card */}
        <div className="max-w-4xl w-full">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-orange-400 mb-8 text-center">
              What You Should Know
            </h2>

            <div className="space-y-6 text-white text-lg md:text-xl leading-relaxed">
              <p>
                Download 2025 is not just a tech event — it's a movement to
                ignite innovation, connect brilliant minds, and shape the future
                of Africa's tech ecosystem starting from{" "}
                <span className="font-semibold text-orange-300">Nnewi</span>.
              </p>

              <p>
                Sponsoring Download 2025 is more than visibility—it's a chance
                to align your brand with Africa's grassroot innovation, digital
                creators, and tech disruptors. From powerful storytelling to
                immersive innovation, Download connects your brand and positions
                your organization at the heart of Africa's digital future.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Become a Sponsor
          </button>
        </div>
      </div>
      <div className="min-h-screen bg-[#031632] flex items-center justify-center p-6">
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
    </>
  );
}
