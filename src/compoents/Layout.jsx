import React, { useState, useEffect } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

import Loader from "./Loader";

export default function LayoutPage({ children }) {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    isLoading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <Loader setLoading={setLoading} />
      ) : (
        <>
          <header>
            <Navbar />
          </header>
          
          <div className="dark:bg-dark-900 bg-[#f6f8fd] text-zinc-800 dark:text-gray-300">
            <main className="mx-8 relative md:mx-20 lg:mx-44">
              {children}
              <Footer />
            </main>
          </div>
        </>
      )}
    </>
  );
}
