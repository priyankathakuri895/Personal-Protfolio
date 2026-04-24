import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import {
  FacebookOutlined,
  Instagram,
  LinkedIn,
  GitHub,
  Pinterest
} from "@mui/icons-material";

const navItems = [
  { title: "Home", link: "/home" },
  { title: "About", link: "/about" },
  { title: "Projects", link: "/project" },
  { title: "Contact", link: "/contact" },
];

const socialItems = [
  { icon: <FacebookOutlined />, link: "https://facebook.com" },
  { icon: <Instagram />, link: "https://instagram.com" },
  { icon: <LinkedIn />, link: "https://linkedin.com" },
  { icon: <GitHub />, link: "https://github.com" },
  { icon: <Pinterest />, link: "https://pinterest.com" },
];

export default function Footer() {
  return (
    <Box
      sx={{
        mt: 15,
        px: 4,
        py: 6,
        background: "linear-gradient(135deg, #1f1c2c, #928dab)",
      }}
    >

      {/* Glass Container */}
      <Box
        sx={{
          backdropFilter: "blur(18px)",
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: 4,
          p: 5,
        }}
      >

        {/* Nav Links */}
        <Grid container justifyContent="center" spacing={4}>
          {navItems.map((nav, i) => (
            <Grid item key={i}>
              <Link
                to={nav.link}
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontWeight: "500",
                  transition: "0.3s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#00e5ff")}
                onMouseLeave={(e) => (e.target.style.color = "white")}
              >
                {nav.title}
              </Link>
            </Grid>
          ))}
        </Grid>

        {/* Divider */}
        <Box
          sx={{
            height: "1px",
            width: "100%",
            my: 4,
            background: "linear-gradient(to right, transparent, white, transparent)",
          }}
        />

        {/* Social Icons */}
        <Grid container justifyContent="center" spacing={3}>
          {socialItems.map((item, i) => (
            <Grid item key={i}>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "white",
                  fontSize: "1.6rem",
                  transition: "0.3s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#00e5ff";
                  e.target.style.transform = "scale(1.2)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "white";
                  e.target.style.transform = "scale(1)";
                }}
              >
                {item.icon}
              </a>
            </Grid>
          ))}
        </Grid>

        {/* Bottom Text */}
        <Typography
          sx={{
            textAlign: "center",
            mt: 4,
            fontSize: "0.85rem",
            color: "rgba(255,255,255,0.7)",
          }}
        >
          © 2026 Priyanka Thakuri • Built with React & Material UI
        </Typography>
      </Box>
    </Box>
  );
}