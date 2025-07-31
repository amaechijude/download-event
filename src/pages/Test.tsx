export default function App() {
  return (
    <div className="relative min-h-screen bg-brand-dark bg-wavy-pattern bg-repeat-x overflow-x-hidden">
      <img
        src="/sponsor-bg.png"
        alt="Background Pattern"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="container mx-auto px-6 py-16 flex flex-col items-center text-center">
        {/* Header Section */}
        <header className="mb-12">
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
        </header>

        {/* "What You Should Know" Section */}
          <div className="max-w-4xl w-full">
            <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-orange-400 mb-8 text-center">
                What You Should Know
              </h2>

              <div className="space-y-6 text-white text-lg md:text-xl leading-relaxed">
                <p>
                  Download 2025 is not just a tech event — it's a movement to
                  ignite innovation, connect brilliant minds, and shape the
                  future of Africa's tech ecosystem starting from{" "}
                  <span className="font-semibold text-orange-300">Nnewi</span>.
                </p>

                <p>
                  Sponsoring Download 2025 is more than visibility—it's a chance
                  to align your brand with Africa's grassroot innovation,
                  digital creators, and tech disruptors. From powerful
                  storytelling to immersive innovation, Download connects your
                  brand and positions your organization at the heart of Africa's
                  digital future.
                </p>
              </div>
            </div>
          </div>
        {/* </section> */}

        {/* "Partner with Us" Form Section */}
        <section className="w-full max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Partner with Us</h2>
          <SponsorForm />
        </section>
      </div>
    </div>
  );
}

// Form Component
function SponsorForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Thank you for your interest!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      <div className="flex flex-col items-start">
        <label htmlFor="last-name" className="mb-2 text-sm text-gray-400">
          Last Name
        </label>
        <input
          type="text"
          id="last-name"
          placeholder="Enter your last name here"
          className="w-full bg-brand-blue p-3 rounded-lg border-2 border-transparent focus:border-brand-cyan focus:outline-none"
        />
      </div>
      <div className="flex flex-col items-start">
        <label htmlFor="company-name" className="mb-2 text-sm text-gray-400">
          Company Name
        </label>
        <input
          type="text"
          id="company-name"
          placeholder="Enter your brand name here"
          className="w-full bg-brand-blue p-3 rounded-lg border-2 border-transparent focus:border-brand-cyan focus:outline-none"
        />
      </div>
      <div className="flex flex-col items-start">
        <label htmlFor="first-name" className="mb-2 text-sm text-gray-400">
          First Name
        </label>
        <input
          type="text"
          id="first-name"
          placeholder="Enter your first name here"
          className="w-full bg-brand-blue p-3 rounded-lg border-2 border-transparent focus:border-brand-cyan focus:outline-none"
        />
      </div>
      <div className="flex flex-col items-start">
        <label htmlFor="telephone" className="mb-2 text-sm text-gray-400">
          Telephone
        </label>
        <input
          type="tel"
          id="telephone"
          placeholder="+000-000-0000-000"
          className="w-full bg-brand-blue p-3 rounded-lg border-2 border-transparent focus:border-brand-cyan focus:outline-none"
        />
      </div>
      <div className="flex flex-col items-start md:col-span-2">
        <label htmlFor="email" className="mb-2 text-sm text-gray-400">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          placeholder="example.user@gmail.com"
          className="w-full bg-brand-blue p-3 rounded-lg border-2 border-transparent focus:border-brand-cyan focus:outline-none"
        />
      </div>
      <div className="md:col-span-2 flex justify-center mt-4">
        <button
          type="submit"
          className="bg-brand-lime text-brand-dark font-bold py-3 px-12 rounded-lg hover:bg-opacity-90 transition-colors duration-300"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
