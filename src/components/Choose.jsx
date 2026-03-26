import { Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import SpeedIcon from "@mui/icons-material/Speed";
import SecurityIcon from "@mui/icons-material/Security";
import WifiIcon from "@mui/icons-material/Wifi";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const features = [
  {
    icon: <SpeedIcon fontSize="large" />,
    title: "Blazing Fast Speeds",
    desc: "Enjoy ultra-fast internet for streaming, gaming, and work without interruptions.",
  },
  {
    icon: <WifiIcon fontSize="large" />,
    title: "Reliable Connectivity",
    desc: "Stable and consistent connection with minimal downtime.",
  },
  {
    icon: <SecurityIcon fontSize="large" />,
    title: "Secure Network",
    desc: "Advanced security to keep your data safe and protected.",
  },
  {
    icon: <SupportAgentIcon fontSize="large" />,
    title: "24/7 Support",
    desc: "Our team is always ready to assist you whenever you need help.",
  },
];

export default function Choose() {
  return (
    <Box
      sx={{
        py: 10,
        px: 3,
        background: "#F5F9FA",
      }}
    >
      {/* 🧠 Title */}
      <Typography
        variant="h4"
        textAlign="center"
        fontWeight={700}
        mb={6}
        sx={{ color: "#1e293b" }}
      >
        Why Choose RR Fibernet
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {features.map((item, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  p: 4,
                  borderRadius: "18px",
                  background: "rgba(255,255,255,0.7)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(0,0,0,0.05)",
                  textAlign: "center",
                  transition: "0.3s",
                  height: "100%",

                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 15px 40px rgba(0,0,0,0.1)",
                  },
                }}
              >
                {/* 🔵 Icon */}
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    mx: "auto",
                    mb: 2,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "linear-gradient(135deg, #2A7F7F, #1D4ED8)",
                    color: "white",
                  }}
                >
                  {item.icon}
                </Box>

                {/* 🧾 Title */}
                <Typography fontWeight={600} sx={{ color: "#1e293b", mb: 1 }}>
                  {item.title}
                </Typography>

                {/* ✍️ Desc */}
                <Typography fontSize="14px" sx={{ color: "#64748b" }}>
                  {item.desc}
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
