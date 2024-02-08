import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";

const SignIn = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: "300px",
        m: "150px auto",
      }}
    >
      <Typography variant="h5">Sign In</Typography>
      <TextField id="outlined-basic" label="Email" variant="outlined" />
      <TextField id="outlined-basic" label="Password" variant="outlined" />
      <Button
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
        sign-in
      </Button>
    </Box>
  );
};

export default SignIn;
