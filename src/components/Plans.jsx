import { Box, Typography, Grid, Button } from "@mui/material";
import { motion } from "framer-motion";

const plans = [
  {
    title: "Basic",
    speed: "50 Mbps",
    price: "₹499",
  },
  {
    title: "Standard",
    speed: "100 Mbps",
    price: "₹799",
    featured: true,
  },
  {
    title: "Premium",
    speed: "200 Mbps",
    price: "₹1199",
  },
];

export default function Plans() {
  return (
    <Box
      sx={{
        py: 10,
        px: 3,
        position: "relative",
        background: "linear-gradient(180deg, #F5F9FA, #E6F4F1)",
        overflow: "hidden",
      }}
    >
      {/* 🌊 Soft Teal Glow */}
      <Box
        sx={{
          position: "absolute",
          width: "350px",
          height: "350px",
          background: "radial-gradient(circle, #2A7F7F, transparent)",
          top: "10%",
          left: "5%",
          filter: "blur(100px)",
          opacity: 0.2,
        }}
      />

      {/* 🔵 Blue Glow */}
      <Box
        sx={{
          position: "absolute",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, #1D4ED8, transparent)",
          bottom: "10%",
          right: "5%",
          filter: "blur(100px)",
          opacity: 0.15,
        }}
      />

      {/* ✨ Section Animation Wrapper */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* 🧠 Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h4"
            textAlign="center"
            fontWeight={700}
            mb={6}
            sx={{ color: "#1e293b" }}
          >
            Choose Your Plan
          </Typography>
        </motion.div>

        {/* 🎯 Stagger Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <Grid container spacing={4} justifyContent="center">
            {plans.map((plan, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 60 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      p: 4,
                      borderRadius: "20px",
                      textAlign: "center",
                      background: "rgba(255,255,255,0.65)",
                      backdropFilter: "blur(12px)",
                      border: plan.featured
                        ? "1px solid rgba(29,78,216,0.3)"
                        : "1px solid rgba(0,0,0,0.05)",
                      boxShadow: plan.featured
                        ? "0 10px 40px rgba(29,78,216,0.15)"
                        : "0 10px 30px rgba(0,0,0,0.08)",
                      transition: "0.3s",
                    }}
                  >
                    {/* 🌟 Featured Tag */}
                    {plan.featured && (
                      <Typography
                        sx={{
                          position: "absolute",
                          top: 16,
                          right: 16,
                          fontSize: "12px",
                          px: 1.5,
                          py: 0.5,
                          borderRadius: "999px",
                          background: "#1D4ED8",
                          color: "white",
                        }}
                      >
                        Popular
                      </Typography>
                    )}

                    <Typography
                      variant="h5"
                      fontWeight={600}
                      sx={{ color: "#1e293b" }}
                    >
                      {plan.title}
                    </Typography>

                    <Typography
                      variant="h3"
                      sx={{ mt: 2, fontWeight: 700, color: "#1e293b" }}
                    >
                      {plan.price}
                    </Typography>

                    <Typography sx={{ mt: 1, color: "#64748b" }}>
                      {plan.speed}
                    </Typography>

                    <Button
                      variant="contained"
                      sx={{
                        mt: 4,
                        px: 4,
                        borderRadius: "999px",
                        background: "linear-gradient(90deg, #2A7F7F, #1D4ED8)",
                        boxShadow: "0 8px 25px rgba(42,127,127,0.3)",
                      }}
                    >
                      Get Started
                    </Button>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </motion.div>
    </Box>
  );
}
