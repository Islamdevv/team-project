import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useProduct } from "../../context/ProductContext";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ el }) {
  const { deleteProduct } = useProduct();
  const navigate = useNavigate();
  return (
    <Card sx={{ width: "100%" }}>
      <CardMedia sx={{ height: 200 }} image={el.image} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {el.name}
        </Typography>
        <Typography
          sx={{
            display: el.price ? "" : "none",
          }}
          variant="body2"
          color="text.secondary"
        >
          {el.price}$
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => deleteProduct(el.id)} size="small">
          Delete
        </Button>
        <Button onClick={() => navigate(`/edit/${el.id}`)} size="small">
          Edit
        </Button>
      </CardActions>
    </Card>
  );
}
