import Choose from "./components/Choose";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Plans from "./components/Plans";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Navbar />

        <Box sx={{ flex: 1 }}>
          <Hero />
          {/* <Choose /> */}
          <Plans />
        </Box>

        <Footer />
      </Box>
    </>
  );
};

export default Home;
