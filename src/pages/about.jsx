import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Grid,
  Button,
  Typography,
  CircularProgress
} from "@mui/material";

export default function AboutUs() {
  const [category, setCategory] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    async function getCategories() {
      setLoader(true);
      try {
        const response = await axios.get(
          "https://bycarrapi.janaktech.com/api/v1/en/category"
        );

        setCategory(response.data);
      } catch (error) {
        console.log("Error:", error.message);
      } finally {
        setLoader(false);
      }
    }

    getCategories();
  }, []);

  const finalFormat = category?.data?.data || [];

  return (
    <Box
      sx={{
        mt: 12,
        px: 3,
        background: "linear-gradient(135deg, #1f1c2c, #928dab)",
        minHeight: "100vh",
      }}
    >
      <Grid container justifyContent="center">
        <Grid item xs={12} md={10}>

          {/* Header */}
          <Box sx={{ mb: 5 }}>
            <Typography sx={{ color: "#00e5ff", fontSize: "1.2rem" }}>
              About 🦄
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "1.8rem", md: "2.5rem" },
                color: "white",
                fontWeight: "bold",
              }}
            >
              Here you will find more information about me, what I do, and my skills.
            </Typography>
          </Box>

          {/* Loader */}
          {loader && (
            <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
              <CircularProgress sx={{ color: "#00e5ff" }} />
            </Box>
          )}

          {/* Content */}
          <Grid container spacing={4}>

            {/* LEFT SIDE */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  backdropFilter: "blur(15px)",
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: 3,
                  p: 3,
                  color: "white",
                }}
              >
                <Typography sx={{ fontSize: "1.5rem", mb: 2 }}>
                  My Story
                </Typography>

                <Typography sx={{ textAlign: "justify", color: "rgba(255,255,255,0.8)" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Error, aliquid! Itaque corrupti magnam fugiat mollitia...
                  <br /><br />
                  Explicabo ducimus sequi aut corporis odio repellendus...
                  <br /><br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit...
                </Typography>

                <Button
                  variant="contained"
                  sx={{
                    mt: 3,
                    background: "#00e5ff",
                    color: "black",
                    fontWeight: "bold",
                    "&:hover": {
                      background: "#00bcd4",
                    },
                  }}
                >
                  Projects
                </Button>
              </Box>
            </Grid>

            {/* RIGHT SIDE */}
            <Grid item xs={12} md={6}>
              <Typography sx={{ fontSize: "1.5rem", color: "white", mb: 2 }}>
                My Categories
              </Typography>

              <Grid container spacing={2}>
                {finalFormat.length === 0 && !loader && (
                  <Typography sx={{ color: "white", ml: 2 }}>
                    No categories found
                  </Typography>
                )}

                {finalFormat.map((data, index) => (
                  <Grid item xs={6} key={index}>
                    <Box
                      sx={{
                        backdropFilter: "blur(15px)",
                        background: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.2)",
                        borderRadius: 3,
                        p: 2,
                        textAlign: "center",
                        color: "white",
                        transition: "0.3s",
                        "&:hover": {
                          transform: "scale(1.05)",
                          boxShadow: "0 0 20px rgba(0,229,255,0.3)",
                        },
                      }}
                    >
                      <img
                        src={data.logo}
                        alt={data.name}
                        style={{
                          width: "80px",
                          height: "80px",
                          objectFit: "contain",
                        }}
                      />
                      <Typography sx={{ mt: 1 }}>
                        {data.name}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>

          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}