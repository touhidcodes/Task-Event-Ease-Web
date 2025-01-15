"use client";

import { Button, Box, Stack, Typography, Grid } from "@mui/material";
import Link from "next/link";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerValidationSchema } from "@/constants/schema";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { userLogin } from "@/services/actions/userLogin";
import { USER_ROLE } from "@/constants/role";
import { userRegister } from "@/services/actions/userRegister";
import { storeUserInfo } from "@/services/auth.services";

export default function Login() {
  const router = useRouter();

  const handleRegister = async (values: FieldValues) => {
    const data = {
      ...values,
      role: USER_ROLE.USER,
    };

    try {
      const res = await userRegister(data);

      if (res?.data?.id) {
        toast.success("User registered successfully!");
        const result = await userLogin({
          password: values.password,
          identifier: values.email || values.username,
        });
        if (result?.data?.accessToken) {
          storeUserInfo({ accessToken: result?.data?.accessToken });
          router.push("/dashboard/home");
        }
      }
    } catch (err) {
      console.error(err);
    }
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
          display: { xs: "none", sm: "block" },
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
            Welcome to Event Ease
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
            New Here!
          </Typography>
          <Typography variant="body1" mb={3}>
            Please Register your account to continue.
          </Typography>
          {/* Form */}
          <PHForm
            onSubmit={handleRegister}
            resolver={zodResolver(registerValidationSchema)}
            defaultValues={{
              email: "",
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
                  Username*
                </Typography>
                <PHInput
                  name="username"
                  label="Username"
                  type="text"
                  fullWidth={true}
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
                  Email*
                </Typography>
                <PHInput
                  name="email"
                  label="Email"
                  type="email"
                  fullWidth={true}
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
              Register
            </Button>
          </PHForm>
          {/* Additional Links */}
          <Typography sx={{ mt: 2 }}>
            Already have an account?{" "}
            <Link href="/">
              <Typography
                component="span"
                sx={{
                  color: "#00026E",
                  textDecoration: "underline",
                  fontWeight: "500",
                  cursor: "pointer",
                }}
              >
                Sign In
              </Typography>
            </Link>
          </Typography>
        </Box>
      </Grid>
    </div>
  );
}
