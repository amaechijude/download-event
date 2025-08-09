import Link from "next/link";

export default function ContactUs() {
  return (
    <div className="relative min-h-screen bg-[#031632] overflow-x-hidden flex items-center justify-center py-16">
      <img
        src="/sponsor-bg.png"
        alt="Background Pattern"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-20 z-0"
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-xl md:text-2xl text-blue-100">
            We&apos;re here to answer your questions and explore new ideas together.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-start">
          {/* Form Section */}
          <form className="bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-10 flex-1 min-w-[340px] max-w-xl text-left">
            <h2 className="text-xl font-semibold text-orange-400 mb-2">Send us a message</h2>
            <p className="text-white mb-6">We&apos;d love to hear from you. Fill out the form below and we’ll get back to you as soon as possible</p>
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="flex-1">
                <label className="block text-white mb-1">Full name</label>
                <input type="text" placeholder="Enter your full name here" className="w-full rounded-md border border-white/30 bg-transparent text-white px-4 py-2 focus:outline-none focus:border-orange-400 placeholder:text-blue-100" />
              </div>
              <div className="flex-1">
                <label className="block text-white mb-1">Email Address</label>
                <input type="email" placeholder="your@email.com" className="w-full rounded-md border border-white/30 bg-transparent text-white px-4 py-2 focus:outline-none focus:border-orange-400 placeholder:text-blue-100" />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-white mb-1">Subject</label>
              <input type="text" placeholder="What is it about?" className="w-full rounded-md border border-white/30 bg-transparent text-white px-4 py-2 focus:outline-none focus:border-orange-400 placeholder:text-blue-100" />
            </div>
            <div className="mb-6">
              <label className="block text-white mb-1">Subject</label>
              <textarea placeholder="Tell us more about your question or concern..." rows={3} className="w-full rounded-md border border-white/30 bg-transparent text-white px-4 py-2 focus:outline-none focus:border-orange-400 placeholder:text-blue-100 resize-none" />
            </div>
            <button type="submit" className="w-full flex items-center justify-center gap-2 bg-orange-400 hover:bg-orange-500 text-white text-lg font-semibold rounded-full py-3 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v7.125c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V15.75c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v1.125c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V9.75" />
              </svg>
              Send Message
            </button>
          </form>
          {/* Contact Info Section */}
          <div className="flex flex-col gap-6 flex-1 min-w-[300px] max-w-sm w-full">
            <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex flex-col gap-2">
              <div className="flex items-center gap-2 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-green-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75v10.5A2.25 2.25 0 004.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75M2.25 6.75A2.25 2.25 0 014.5 4.5h15a2.25 2.25 0 012.25 2.25m-19.5 0l9.75 7.5 9.75-7.5" />
                </svg>
                <span className="text-orange-400 font-semibold text-lg">Call us or WhatsApp</span>
              </div>
              <span className="text-white block">+234 7045375814</span>
              <span className="text-white block">+234 8164586882</span>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex flex-col gap-2">
              <div className="flex items-center gap-2 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-red-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5A2.25 2.25 0 0119.5 19.5h-15A2.25 2.25 0 012.25 17.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75m19.5 0l-9.75 7.5-9.75-7.5" />
                </svg>
                <span className="text-orange-400 font-semibold text-lg">Email Us</span>
              </div>
              <Link href="mailto:downloadtechevent@gmail.com" className="text-white block break-all">downloadtechevent@gmail.com</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}