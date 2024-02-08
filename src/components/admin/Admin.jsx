import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useProduct } from "../../context/ProductContext";

const Admin = () => {
  const { addProduct } = useProduct();
  const [products, setProducts] = useState({
    name: "",
    price: "",
    image: "",
  });

  const handleInp = (e) => {
    if (e.target.name === "price") {
      setProducts({ ...products, [e.target.name]: Number(e.target.value) });
    } else {
      setProducts({ ...products, [e.target.name]: e.target.value });
    }
  };

  function handleChangeProduct() {
    if (products) {
      addProduct(products);
    }
    setProducts({
      name: "",
      price: "",
      image: "",
    });
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        maxWidth: "500px",
        width: "100%",
        m: "150px auto",
      }}
    >
      <TextField
        onChange={handleInp}
        id="outlined-basic"
        label="Name"
        variant="outlined"
        name="name"
        value={products.name}
      />
      <TextField
        onChange={handleInp}
        id="outlined-basic"
        type="number"
        label="Price"
        variant="outlined"
        name="price"
        value={products.price}
      />
      <TextField
        onChange={handleInp}
        id="outlined-basic"
        label="Image"
        variant="outlined"
        name="image"
        value={products.image}
      />
      <Button
        onClick={handleChangeProduct}
        sx={{
          "&:hover": {
            background: "#000",
            color: "#fff",
          },
          background: "transparent",
          color: "#000",
        }}
        variant="contained"
      >
        create
      </Button>
    </Box>
  );
};

export default Admin;
