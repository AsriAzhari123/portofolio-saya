import React from "react";
import LayoutPage from "../compoents/Layout";
import { Hero, About, Built, Contact,  } from "../sections";


export default function IndexPage() {
  return (
    <LayoutPage>
      <Hero />
      <About />
      <Built />
      <Contact />
    </LayoutPage>
  );
}
