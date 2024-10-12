"use client";

import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function HomePage() {
  const router = useRouter();

  const handleGetStartedClick = () => {
    router.push("/login");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-gray-500 to-indigo-600 text-white">
      <header className="p-6 bg-opacity-90 backdrop-blur-sm shadow-md">
        
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">FreshCart</h1>
          <nav>
            <Link href="/register">
              <Button variant="outline" className="text-black border-white">
                Register
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      <section className="flex-grow flex justify-center items-center text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-4">Welcome to freshCart App</h2>
          <p className="text-lg mb-8">
          FreshCart offers a streamlined, efficient solution for all your grocery shopping needs, combining advanced technology with a seamless user experience.
          {/* FreshCart makes grocery shopping easier than ever with a user-friendly design and a modern shopping experience. */}
          {/* Discover FreshCart, your go-to app for a seamless and convenient grocery shopping experience. */}
            {/* a sleek and intuitive grocery shopping app */}
          </p>
          <Button
            variant="primary"
            size="lg"
            className="bg-white text-purple-500 hover:bg-gray-100"
            onClick={handleGetStartedClick}
          >
            Get Started Now
          </Button>
        </div>
      </section>
      <footer className="bg-indigo-800 p-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} My App. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
