import React from "react";
import Hero from "../components/hero/hero";
import Popular from "../components/popular/popular";
import Offers from "../components/offers/offers";
import NewCollections from "../components/newcollections/Newcol.jsx";
import NewsLetter from "../components/newsletter/newsltr";


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
