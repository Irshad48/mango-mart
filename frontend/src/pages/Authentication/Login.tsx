import React, { useState } from "react";
import TextInput from "../../components/Auth/TextInput";
import PrimaryButton from "../../components/UI/PrimaryButton";
import { Box, Typography } from "@mui/material";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    setLoading(true);
    // Simulate authentication (replace with API call)
    setTimeout(() => {
      setLoading(false);
      if (email !== "test@example.com" || password !== "password") {
        setError("Invalid credentials.");
      } else {
        setError("");
        // Redirect or update auth state here
      }
    }, 1200);
  };

  return (
    <Box maxWidth={400} mx="auto" mt={8} p={4} boxShadow={3} borderRadius={2} bgcolor="#fff">
      <Typography variant="h5" mb={2} align="center">Sign In</Typography>
      <form onSubmit={handleSubmit} noValidate>
        <TextInput
          name="email"
          label="Email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          autoComplete="email"
          error={!!error && !email}
          helperText={!!error && !email ? error : ""}
        />
        <Box mt={2} />
        <TextInput
          name="password"
          label="Password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          autoComplete="current-password"
          error={!!error && !password}
          helperText={!!error && !password ? error : ""}
        />
        {error && email && password && (
          <Typography color="error" mt={2} fontSize={14} align="center">{error}</Typography>
        )}
        <Box mt={3}>
          <PrimaryButton type="submit" disabled={loading} fullWidth>
            {loading ? "Signing In..." : "Sign In"}
          </PrimaryButton>
        </Box>
        <Box display="flex" justifyContent="space-between" mt={4}>
          <a href="/register" style={{ color: '#1976d2', fontSize: 14 }}>Register new user</a>
          <a href="/forgot" style={{ color: '#1976d2', fontSize: 14 }}>Forgot password?</a>
        </Box>
      </form>
    </Box>
  );
};

export default Login;
