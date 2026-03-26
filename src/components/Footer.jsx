import { Box, Typography } from "@mui/material";
import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";
import { LocationOn, Call, Email } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box sx={{ borderTop: "5px solid #be9337" }}>
      {/* ⚪ Middle Section */}
      <Box
        sx={{
          background: "#f8fafc",
          py: 6,
        }}
      >
        <Box
          sx={{
            maxWidth: "1000px",
            mx: "auto",

            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 4,
          }}
        >
          {/* Section 1 */}
          <Box sx={{ minWidth: "220px" }}>
            <Typography
              sx={{
                fontWeight: 600,
                color: "#1e293b",
                mb: 1,
              }}
            >
              RR Fibernet
            </Typography>

            <Typography
              sx={{
                fontSize: "13px",
                color: "#64748b",
              }}
            >
              High-speed broadband services
            </Typography>
          </Box>

          {/* Section 2 */}
          <Box sx={{ minWidth: "220px" }}>
            <Typography fontWeight={600} mb={1}>
              Address
            </Typography>

            <Box
              sx={{ display: "flex", alignItems: "flex-start", gap: 1, mb: 1 }}
            >
              <LocationOn sx={{ color: "#2A7F7F", fontSize: 18, mt: "2px" }} />
              <Typography sx={{ fontSize: "13px", color: "#64748b" }}>
                Bikkavolu, East Godavari, Andhra Pradesh
              </Typography>
            </Box>
          </Box>

          {/* Section 3 */}
          {/* Section 3 */}
          <Box sx={{ minWidth: "220px" }}>
            <Typography fontWeight={600} mb={1}>
              Contact
            </Typography>

            {/* Phone 1 */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                mb: 1,
              }}
            >
              <Call sx={{ color: "#2A7F7F", fontSize: 16 }} />
              <Typography sx={{ fontSize: "13px", color: "#64748b" }}>
                +91 90005 43369
              </Typography>
            </Box>

            {/* Phone 2 */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                mb: 1,
              }}
            >
              <Call sx={{ color: "#2A7F7F", fontSize: 16 }} />
              <Typography sx={{ fontSize: "13px", color: "#64748b" }}>
                +91 90631 91222
              </Typography>
            </Box>

            {/* Email */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Email sx={{ color: "#2A7F7F", fontSize: 16 }} />
              <Typography sx={{ fontSize: "13px", color: "#64748b" }}>
                rrfibernet2022@gmail.com
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* 🟢 Bottom Strip */}
      <Box
        sx={{
          px: 3,
          py: 2.5,
          background: "linear-gradient(90deg, #2A7F7F, #1D4ED8)",

          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
          gap: 1,
        }}
      >
        {/* Left */}
        <Typography
          sx={{
            fontSize: "13px",
            color: "white",
            opacity: 0.9,
          }}
        >
          © {new Date().getFullYear()} RR Fibernet
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            alignItems: "center",
          }}
        >
          <Facebook
            sx={{
              color: "white",
              cursor: "pointer",
              transition: "0.2s",
              "&:hover": { opacity: 0.7 },
            }}
            onClick={() => window.open("https://facebook.com", "_blank")}
          />

          <Instagram
            sx={{
              color: "white",
              cursor: "pointer",
              transition: "0.2s",
              "&:hover": { opacity: 0.7 },
            }}
            onClick={() => window.open("https://instagram.com", "_blank")}
          />

          <WhatsApp
            sx={{
              color: "white",
              cursor: "pointer",
              transition: "0.2s",
              "&:hover": { opacity: 0.7 },
            }}
            onClick={() => window.open("https://wa.me/919063191222", "_blank")}
          />
        </Box>
      </Box>
    </Box>
  );
}
