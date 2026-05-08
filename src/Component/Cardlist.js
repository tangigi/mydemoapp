import { useEffect, useState } from "react";

import ProductCard from "./ProductCard";
import ShimmerUI from "./ShimmerUI";
import "./cardlist.css";

const CardList = ({placeholder}) => {
 const [productData, setProductData] = useState([]);
 const [loading, setLoading] = useState(true);
// async await fetch("https://dummyjson.com/products") ---hw
 useEffect(() => {
   fetch("https://dummyjson.com/products")
   .then((res) => res.json())
   .then((data) =>{
    setProductData(data.products || []);
    setLoading(false);
   }).catch((err) => {
    console.log(err);
    setLoading(false);
   });
 }, []);

 if(loading) return <ShimmerUI count={10}/>;

  return (
    <div className="products-container">
      <div className="products-grid">
        {productData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CardList;