import React from "react";
import ProductCard from "./ProductCard";
import { useFetch } from "../Hooks/useFetch";

const url = "https://dummyjson.com/products";
function Home() {
  const { data, isError, isLoading } = useFetch(url);

  return (
    <>
      {!isError &&
        !isLoading &&
        data.products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
    </>
  );
}

export default Home;
