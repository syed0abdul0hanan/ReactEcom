import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";



function Layout(props) {
  return (
    <>
      <Header />
      <main className="container mx-auto my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {props.children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
