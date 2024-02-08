import React, { useEffect } from "react";
import { useProduct } from "../../context/ProductContext";
import { Box, Pagination } from "@mui/material";
import ProductCard from "./ProductCard";
import PaginationProduct from "./PaginationProduct";

const ProductList = () => {
  const { currentPage, data, getProduct } = useProduct();

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 23%)",
          maxWidth: "90%",
          m: "40px auto",
          justifyContent: "space-between",
          gap: "20px",
          gridAutoRows: "350px",
        }}
      >
        {data ? (
          currentPage().map((el, index) => <ProductCard key={index} el={el} />)
        ) : (
          <h1>Loading...</h1>
        )}
      </Box>
      <PaginationProduct />
    </>
  );
};

export default ProductList;
