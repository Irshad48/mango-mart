import React from "react";
import { Paper, Box, Typography } from "@mui/material";

type AuthCardProps = {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  maxWidth?: number | string;
};

const AuthCard: React.FC<AuthCardProps> = ({
  title = "Welcome",
  subtitle,
  children,
  maxWidth = "420px",
}) => {
  return (
    // outer wrapper centers the card; uses Tailwind to center and ensure min height = viewport
    <div className="flex items-center justify-center min-h-screen p-4">
      {/* MUI Paper gives elevation (shadow) and we use sx for theme-aware styles */}
      <Paper
        elevation={6}
        sx={{
          width: "100%",
          maxWidth,
          borderRadius: 2,
          px: 4,
          py: 5,
          backgroundColor: "rgba(255,255,255,0.9)",
          backdropFilter: "blur(6px)",
        }}
      >
        {/* Header area */}
        <Box textAlign="center" mb={3}>
          <Typography variant="h4" component="h1" gutterBottom>
            {title}
          </Typography>
          {subtitle && (
            <Typography variant="body2" color="text.secondary">
              {subtitle}
            </Typography>
          )}
        </Box>

        {/* children = form or whatever page passes in */}
        {children}
      </Paper>
    </div>
  );
};

export default AuthCard;
