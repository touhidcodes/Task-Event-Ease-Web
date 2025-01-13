"use client";

import { useState } from "react";
import { TextField, Button, Box, Stack, Typography, Grid } from "@mui/material";
import Link from "next/link";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Add login functionality
    console.log("Login attempted with:", { email, password });
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel (Image) */}
      <Box
        sx={{
          backgroundImage: `url("assets/images/event.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          display: { xs: "none", sm: "block" }, // Hide image on mobile
          width: { sm: "50%", md: "33.33%" },
          color: "#fff",
          textAlign: "center",
          backdropFilter: "blur(8px)",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "1rem 2rem",
            borderRadius: "10px",
            position: "absolute",
            bottom: "20px",
            left: "20px",
            right: "20px",
          }}
        >
          <Typography variant="h4" sx={{ margin: 0 }}>
            Welcome to the Event
          </Typography>
          <Typography variant="body1">
            Experience the magic of the moment.
          </Typography>
        </Box>
      </Box>

      {/* Right Panel (Form) */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "80%", md: "100%" },
            padding: { xs: 3, md: 4 },
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* Heading */}
          <Typography
            variant="h4"
            fontWeight="bold"
            color="#0B1134CC"
            gutterBottom
          >
            Welcome Back!
          </Typography>
          <Typography variant="body1" mb={3}>
            Please login to your account to continue.
          </Typography>

          {/* Error Message */}
          {/* {error && (
            <Typography
              sx={{
                color: "red",
                marginBottom: 2,
              }}
            >
              {error}
            </Typography>
          )} */}

          {/* Form */}
          <PHForm
            onSubmit={handleLogin}
            // resolver={zodResolver(loginValidationSchema)}
            defaultValues={{
              identifier: "",
              password: "",
            }}
          >
            <Stack spacing={2} mb={2}>
              <Box
                fontWeight={700}
                style={{
                  textAlign: "start",
                  color: "#00026E",
                }}
              >
                <Typography style={{ marginBottom: "3px", fontWeight: "500" }}>
                  Email or Username*
                </Typography>
                <PHInput
                  name="identifier"
                  label="Username or Email"
                  type="text"
                  fullWidth
                />
              </Box>
              <Box
                fontWeight={700}
                style={{
                  textAlign: "start",
                  color: "#00026E",
                }}
              >
                <Typography style={{ marginBottom: "3px", fontWeight: "500" }}>
                  Password*
                </Typography>
                <PHInput
                  name="password"
                  label="Password"
                  type="password"
                  fullWidth={true}
                />
              </Box>
            </Stack>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#0B1134",
                color: "white",
                marginY: 2,
                "&:hover": {
                  backgroundColor: "#061022",
                },
              }}
            >
              Login
            </Button>
          </PHForm>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Button
              variant="contained"
              sx={{
                marginRight: 3,
                backgroundColor: "#0B1134",
                color: "white",
                marginBottom: 2,
                "&:hover": {
                  backgroundColor: "#061022",
                },
              }}
              fullWidth
              //   onClick={() => handleTestLogin("user")}
            >
              Test User
            </Button>
            <Button
              variant="contained"
              sx={{
                marginLeft: 3,
                backgroundColor: "#0B1134",
                color: "white",
                marginBottom: 2,
                "&:hover": {
                  backgroundColor: "#061022",
                },
              }}
              fullWidth
              //   onClick={() => handleTestLogin("admin")}
            >
              Test Admin
            </Button>
          </Box>

          {/* Additional Links */}
          <Typography sx={{ mt: 2 }}>
            Don&apos;t have an account?{" "}
            <Link href="/register">
              <Typography
                component="span"
                sx={{
                  color: "#00026E",
                  fontWeight: "500",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                Sign Up
              </Typography>
            </Link>{" "}
            Now
          </Typography>
        </Box>
      </Grid>
    </div>
  );
}
