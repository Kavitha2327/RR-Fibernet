import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import heroImg from "../assets/2.jpg";

export default function Hero() {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* 🖼️ Background Image with subtle zoom */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* 🌫️ Overlay (very important for readability) */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(245, 249, 250, 0.89) 30%, rgba(245,249,250,0.6) 60%, rgba(245,249,250,0.2))",
        }}
      />

      {/* ✨ Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          alignItems: "center",
          px: { xs: 3, md: 8 },
        }}
      >
        <Box maxWidth="600px">
          {/* 🧠 Title */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                color: "#1e293b",
                lineHeight: 1.2,
              }}
            >
              Experience Lightning Fast Internet
            </Typography>
          </motion.div>

          {/* ✍️ Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Typography
              sx={{
                mt: 2,
                fontSize: "18px",
                color: "#475569",
              }}
            >
              Seamless connectivity with RR Fibernet — built for speed,
              reliability, and your digital lifestyle.
            </Typography>
          </motion.div>

          {/* 🚀 Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Box sx={{ mt: 4, display: "flex", gap: 2 }}>
              <Button
                variant="contained"
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: "999px",
                  background: "linear-gradient(90deg, #2A7F7F, #1D4ED8)",
                  boxShadow: "0 8px 25px rgba(42,127,127,0.3)",
                }}
              >
                Explore Plans
              </Button>

              <Button
                variant="outlined"
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: "999px",
                  borderColor: "#2A7F7F",
                  color: "#2A7F7F",
                }}
              >
                Contact Us
              </Button>
            </Box>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
}
