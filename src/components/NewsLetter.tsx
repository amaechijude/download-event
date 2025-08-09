"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      //   toast({
      //     title: "Subscribed!",
      //     description: "Thank you for subscribing to our newsletter.",
      //   });
      setEmail("");
    }
  };

  return (
    <div className="relative overflow-hidden bg-[url('/news.jpg')] bg-cover bg-center min-h-[400px] flex items-center">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#031632]/80"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Get Updates
        </h2>
        <p className="text-white/90 text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Subscribe to our newsletter for the latest updates, speaker
          announcements, and exclusive insights from Download.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto"
        >
          <div className="flex items-center w-full max-w-2xl mx-auto bg-white shadow-lg border border-gray-200 p-2">
            <Input
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 text-black"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSubmit(e);
                }
              }}
            />
            <Button
              onClick={handleSubmit}
              className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium transition-colors duration-200 whitespace-nowrap"
            >
              Subscribe
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
