import React, { useState } from "react";
import {
  Alert,
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  Input,
  TextField,
  Typography,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import { userInerface } from "./types";
import { json, useNavigate } from "react-router-dom";

export default function LoginFrom() {
  const navigate = useNavigate();
  const inatialValue = {
    name: "jonh",
    phone: "1234567",
    email: "John@gmail.com",
  };

  const handellogin = () => {
    if (userData.email && userData.name && userData.phone) {
      navigate("/data");
      localStorage.setItem("user",JSON.stringify(userData))
    }
  };

  const [userData, setuserData] = useState<userInerface>(inatialValue);
  return (
    <>
      <Stack
        sx={{
          width: 300,
          mx: "auto",
          my: 4,
          py: 6,
          px: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          borderRadius: "10px",
          border: "2px solid grey ",
          boxShadow: "5px",
        }}
      >
        <Box sx={{ textAlign: "center", pb: 2, fontWeight: "bold" }}>
          <Typography variant="h4">Login</Typography>
        </Box>

        <TextField
          value={userData.name}
          onChange={(e) => setuserData({ ...userData, name: e.target.value })}
          label={userData.name ? "name" : "Please enter name"}
          variant="outlined"
        ></TextField>
        <TextField
          value={userData.phone}
          onChange={(e) => setuserData({ ...userData, phone: e.target.value })}
          label={userData.phone ? "phone" : "Please enter Phone"}
          variant="outlined"
        ></TextField>
        <TextField
          value={userData.email}
          onChange={(e) => setuserData({ ...userData, email: e.target.value })}
          label={userData.email ? "Email" : "Please enter Email"}
          variant="outlined"
        ></TextField>
        <Button onClick={(e) => handellogin()} variant="contained">
          Save
        </Button>
        {userData.name && userData.email && userData.phone ? (
          ""
        ) : (
          <Typography sx={{ textAlign: "center" }} variant="h4">
            Please Login
          </Typography>
        )}
      </Stack>
    </>
  );
}
