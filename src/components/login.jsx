import React, { useState } from "react";
import { TextField, Button, Typography, Container, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { USERS } from "../constants/constants";

const Login = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = USERS.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      localStorage.setItem("uniqueId", user.uniqueId);
      localStorage.setItem("user", JSON.stringify(user));
      setUser(user); // Update the global user state
      navigate("/");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 8,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ mb: 2 }}
        />
        {error && (
          <Typography color="error" variant="body2" sx={{ mb: 2 }}>
            {error}
          </Typography>
        )}
        <Button
          variant="contained"
          color="primary"
          onClick={handleLogin}
          fullWidth
        >
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
