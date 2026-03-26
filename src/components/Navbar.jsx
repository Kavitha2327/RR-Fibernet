import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import logo from "../assets/logo.jpeg";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        top: 20,
        width: "100%",
        zIndex: 1000,
        display: "flex",
        justifyContent: "center",
        px: 2,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",

          px: 3,
          py: 1.5,

          borderRadius: "20px",

          backdropFilter: "blur(14px)",
          background: "rgba(255,255,255,0.6)",

          border: "1px solid rgba(255,255,255,0.4)",

          boxShadow: scrolled
            ? "0 10px 40px rgba(0,0,0,0.12)"
            : "0 6px 20px rgba(0,0,0,0.08)",

          transition: "all 0.3s ease",
        }}
      >
        {/* 🟢 Logo Section */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
          }}
        >
          <Box
            sx={{
              width: 180,
              height: 60,
              borderRadius: "15px", // rounded square (better than circle here)
              overflow: "hidden",
              background: "rgba(255,255,255,0.7)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
              border: "1px solid rgba(0,0,0,0.05)",
            }}
          >
            <img
              src={logo}
              alt="RR Fibernet"
              style={{
                height: "60px",
                objectFit: "contain",
              }}
            />
          </Box>

          {/* <Typography
            sx={{
              fontWeight: 600,
              fontSize: "18px",
              color: "#1e293b",
              letterSpacing: "0.5px",
            }}
          >
            RR Fibernet
          </Typography> */}
        </Box>

        {/* 🔗 Nav Links */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 3,
          }}
        >
          {["Home", "Plans", "About", "Contact"].map((item) => (
            <Typography
              key={item}
              sx={{
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: 500,
                color: "#334155",
                px: 1.5,
                py: 0.5,
                borderRadius: "8px",
                transition: "0.25s",

                "&:hover": {
                  background: "rgba(42,127,127,0.1)",
                  color: "#1D4ED8",
                },
              }}
            >
              {item}
            </Typography>
          ))}

          {/* 🚀 CTA */}
          <Button
            variant="contained"
            sx={{
              borderRadius: "999px",
              px: 3,
              py: 0.8,
              fontSize: "13px",
              textTransform: "none",
              fontWeight: 600,

              background: "linear-gradient(90deg, #2A7F7F, #1D4ED8)",

              boxShadow: "0 6px 20px rgba(42,127,127,0.3)",

              "&:hover": {
                boxShadow: "0 10px 25px rgba(29,78,216,0.4)",
              },
            }}
          >
            Get Connection
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
