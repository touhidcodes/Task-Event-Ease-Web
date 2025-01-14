"use client";

import Loading from "@/components/UI/Loading/Loading";
import { useGetUserWithProfileQuery } from "@/redux/api/userApi";

import {
  Box,
  Container,
  Typography,
  Grid,
  styled,
  Avatar,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

const background =
  "https://images.unsplash.com/photo-1636690424408-4330adc3e583";
const placeholder =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUOdfo4lewXJYT_2xPo_Xu2Lj6XPn78X9UJA&s";

const StyledInformationBox = styled(Box)(({ theme }) => ({
  background: "#fff",
  borderRadius: theme.spacing(1),
  padding: "16px",
  textAlign: "center",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  "& p": {
    fontWeight: 500,
  },
}));

const ProfilePage = () => {
  const { data: profileData, isLoading } = useGetUserWithProfileQuery({});
  console.log(profileData);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Box>
      <Container>
        <Card
          sx={{
            maxWidth: "100%",
            borderRadius: "16px",
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
            mt: 4,
            height: "300px",
            position: "relative",
          }}
        >
          <CardMedia
            component="img"
            height="200"
            image={background}
            alt="Banner Image"
          />
          <CardContent
            sx={{
              textAlign: "center",
              position: "absolute",
              top: "80px",
              width: "100%",
            }}
          >
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={3} sx={{ textAlign: "center" }}>
                <Avatar
                  alt="Profile Picture"
                  src={placeholder}
                  sx={{
                    width: 120,
                    height: 120,
                    margin: "0 auto",
                    border: "4px solid white",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={9}>
                <Typography
                  variant="h5"
                  component="h2"
                  sx={{ color: "#FFF", fontWeight: 600 }}
                >
                  {profileData?.username || "User Name"}
                </Typography>
                <Typography variant="body2" color="#FFF" mb={2}>
                  {profileData?.profession || "Profession not provided"}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} sm={6} md={4}>
            <StyledInformationBox>
              <Typography
                variant="caption"
                sx={{
                  color: "#00026E",
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
              >
                Username
              </Typography>
              <Typography>{profileData?.username}</Typography>
            </StyledInformationBox>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <StyledInformationBox>
              <Typography
                variant="caption"
                sx={{
                  color: "#00026E",
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
              >
                Email
              </Typography>
              <Typography>{profileData?.email}</Typography>
            </StyledInformationBox>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <StyledInformationBox>
              <Typography
                variant="caption"
                sx={{
                  color: "#00026E",
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
              >
                Address
              </Typography>
              <Typography>
                {profileData?.address || "Data not provided"}
              </Typography>
            </StyledInformationBox>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <StyledInformationBox>
              <Typography
                variant="caption"
                sx={{
                  color: "#00026E",
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
              >
                Profession
              </Typography>
              <Typography>
                {profileData?.profession || "Data not provided"}
              </Typography>
            </StyledInformationBox>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProfilePage;
