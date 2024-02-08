import { Box, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useProduct } from "../../context/ProductContext";
import { useNavigate, useParams } from "react-router-dom";

const AdminEdit = () => {
  const { oneProduct, getOneProduct, editProduct, getProduct, data } =
    useProduct();
  const [editedProduct, setEditedProduct] = useState(oneProduct);

  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getOneProduct(id);
  }, []);

  useEffect(() => {
    setEditedProduct(oneProduct);
  }, [oneProduct]);

  const handleInp = (e) => {
    let obj = { ...editedProduct, [e.target.name]: e.target.value };
    setEditedProduct(obj);
  };

  function handleSaveProduct() {
    editProduct(id, editedProduct);
    navigate("/list");
  }
  useEffect(() => {
    getProduct();
  }, [data]);

  return (
    <>
      {editedProduct ? (
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
            value={editedProduct.name || ""}
          />
          <TextField
            onChange={handleInp}
            id="outlined-basic"
            type="number"
            label="Price"
            variant="outlined"
            name="price"
            value={editedProduct.price || ""}
          />
          <TextField
            onChange={handleInp}
            id="outlined-basic"
            label="Image"
            variant="outlined"
            name="image"
            value={editedProduct.image || ""}
          />
          <Button
            onClick={handleSaveProduct}
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
            save
          </Button>
        </Box>
      ) : (
        <></>
      )}
    </>
  );
};

export default AdminEdit;
