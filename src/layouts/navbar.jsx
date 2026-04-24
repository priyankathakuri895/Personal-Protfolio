import React from "react";
import {
  AppBar,
  Toolbar,
  Avatar,
  Typography,
  Box
} from "@mui/material";
import Logo from "../assets/image/sa.png";
import { Link } from "react-router-dom";

const navItems = [
  { title: "Home", link: "/home" },
  { title: "About", link: "/about" },
  { title: "Projects", link: "/project" },
  { title: "Contact", link: "/contact" },
];

export default function Navbar() {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backdropFilter: "blur(15px)",
        background: "linear-gradient(135deg, rgba(31,28,44,0.75), rgba(146,141,171,0.55))",
        borderBottom: "1px solid rgba(255,255,255,0.15)",
        px: 4,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar
            src={Logo}
            sx={{
              border: "2px solid #00e5ff",
              width: 42,
              height: 42,
            }}
          />
          <Typography
            sx={{
              ml: 1.5,
              fontWeight: "bold",
              fontSize: "1.2rem",
              background: "linear-gradient(to right, #00e5ff, #00ff88)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Priyanka Thakuri
          </Typography>
        </Box>

        {/* NAV LINKS */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 5,
          }}
        >
          {navItems.map((nav, index) => (
            <Link
              key={index}
              to={nav.link}
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "500",
                transition: "0.3s",
                display: "inline-block",
              }}
            >
              <span
                style={{
                  transition: "0.3s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#00e5ff";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "white";
                }}
              >
                {nav.title}
              </span>
            </Link>
          ))}
        </Box>

      </Toolbar>
    </AppBar>
  );
}