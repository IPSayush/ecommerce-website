import React from "react";
import Hero from "../components/hero/Hero.jsx";
import Popular from "../components/popular/Popular.jsx";
import Offers from "../components/offers/Offers.jsx";
import NewCollections from "../components/newcollections/Newcol.jsx";
import NewsLetter from "../components/newsletter/Newsltr.jsx";


const Shop = () => {
  return (
    <>
      {/* mounting */}
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </>
  );
};

export default Shop;
