// import { Box, Typography, Button } from "@mui/material";
// import { motion } from "framer-motion";

// const plans = [
//   {
//     tag: "POPULAR",
//     title: "Superfast Internet + TV Combo",
//     details: "20 Mbps • 250+ Channels • Free Installation",
//     price: "₹499",
//   },
//   {
//     tag: "INTERNET PLAN",
//     title: "Unlimited Broadband",
//     details: "30 Mbps • Unlimited Data • High Speed",
//     price: "₹599",
//   },
//   {
//     tag: "OTT PLAN",
//     title: "Internet + OTT Pack",
//     details: "30 Mbps • Hotstar • Zee5 • ETV Win",
//     price: "₹499",
//   },
// ];

// export default function Plans() {
//   return (
//     <Box
//       sx={{
//         py: 8,
//         px: 3,
//         background: "#F5F9FA",
//       }}
//     >
//       {/* Title */}
//       <Typography
//         variant="h4"
//         textAlign="center"
//         fontWeight={700}
//         mb={6}
//         sx={{ color: "#1e293b" }}
//       >
//         Our Plans
//       </Typography>

//       {/* Plans */}
//       <Box sx={{ maxWidth: "1000px", mx: "auto" }}>
//         {plans.map((plan, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: i * 0.15 }}
//             viewport={{ once: true }}
//           >
//             <Box
//               sx={{
//                 mb: 3,
//                 p: 3,
//                 borderRadius: "18px",

//                 background:
//                   "linear-gradient(135deg, rgba(29,78,216,0.85), rgba(42,127,127,0.85))",

//                 color: "white",

//                 display: "flex",
//                 flexDirection: { xs: "column", md: "row" },
//                 alignItems: "center",
//                 justifyContent: "space-between",
//                 gap: 2,

//                 backdropFilter: "blur(6px)",
//                 boxShadow: "0 10px 25px rgba(0,0,0,0.08)",

//                 transition: "0.3s",

//                 "&:hover": {
//                   transform: "translateY(-4px)",
//                 },
//               }}
//             >
//               {/* 🧠 Left */}
//               <Box>
//                 <Typography
//                   sx={{
//                     fontSize: "12px",
//                     opacity: 0.75,
//                     mb: 0.5,
//                     letterSpacing: "0.5px",
//                   }}
//                 >
//                   {plan.tag}
//                 </Typography>

//                 <Typography
//                   sx={{
//                     fontSize: "18px",
//                     fontWeight: 600,
//                   }}
//                 >
//                   {plan.title}
//                 </Typography>

//                 <Typography
//                   sx={{
//                     mt: 0.5,
//                     fontSize: "13px",
//                     opacity: 0.85,
//                   }}
//                 >
//                   {plan.details}
//                 </Typography>
//               </Box>

//               {/* 💰 Price */}
//               <Box textAlign="center">
//                 <Typography
//                   sx={{
//                     fontSize: "22px",
//                     fontWeight: 700,
//                   }}
//                 >
//                   {plan.price}
//                 </Typography>
//                 <Typography
//                   sx={{
//                     fontSize: "12px",
//                     opacity: 0.7,
//                   }}
//                 >
//                   /month
//                 </Typography>
//               </Box>

//               {/* 🚀 Button */}
//               <Button
//                 variant="contained"
//                 sx={{
//                   background: "rgba(255,255,255,0.9)",
//                   color: "#1e293b",
//                   borderRadius: "999px",
//                   px: 3,
//                   fontWeight: 600,
//                   textTransform: "none",
//                   boxShadow: "none",

//                   "&:hover": {
//                     background: "white",
//                   },
//                 }}
//               >
//                 Get Connection
//               </Button>
//             </Box>
//           </motion.div>
//         ))}
//       </Box>

//       {/* Bottom note */}
//       <Typography
//         textAlign="center"
//         sx={{
//           mt: 4,
//           fontSize: "14px",
//           color: "#475569",
//         }}
//       >
//         Free Installation • Free Set-top Box • 24/7 Support
//       </Typography>
//     </Box>
//   );
// }

import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

const plans = [
  {
    tag: "POPULAR",
    title: "Superfast Internet + TV Combo",
    details: "20 Mbps • 250+ Channels • Free Installation",
    price: "₹499",
  },
  {
    tag: "INTERNET",
    title: "Unlimited Broadband",
    details: "30 Mbps • Unlimited Data • High Speed",
    price: "₹599",
  },
  {
    tag: "OTT",
    title: "Internet + OTT Pack",
    details: "30 Mbps • Hotstar • Zee5 • ETV Win",
    price: "₹499",
  },
];

export default function Plans() {
  return (
    <Box sx={{ py: 8, px: 3, background: "#F5F9FA" }}>
      {/* Title */}
      <Typography
        variant="h4"
        textAlign="center"
        fontWeight={700}
        mb={6}
        sx={{ color: "#1e293b", letterSpacing: "-0.5px" }}
      >
        Our Plans
      </Typography>

      <Box sx={{ maxWidth: "950px", mx: "auto" }}>
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12 }}
            viewport={{ once: true }}
          >
            <Box
              sx={{
                mb: 3,
                p: 3,
                borderRadius: "18px",
                position: "relative",
                overflow: "hidden",

                // 🎯 layered gradient (premium feel)
                background: `
                  linear-gradient(135deg, rgba(29,78,216,0.75), rgba(42,127,127,0.75)),
                  linear-gradient(135deg, #1D4ED8, #2A7F7F)
                `,

                color: "white",

                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                justifyContent: "space-between",
                gap: 2,

                // ✨ glass + inner border
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.15)",

                // 💎 refined shadow
                boxShadow: "0 8px 25px rgba(0,0,0,0.06)",

                transition: "all 0.3s ease",

                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 12px 35px rgba(0,0,0,0.08)",
                },
              }}
            >
              {/* subtle shine layer */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(120deg, transparent, rgba(255,255,255,0.15), transparent)",
                  opacity: 0.4,
                  pointerEvents: "none",
                }}
              />

              {/* 🧠 Left */}
              <Box>
                <Typography
                  sx={{
                    fontSize: "11px",
                    opacity: 0.7,
                    letterSpacing: "1px",
                    mb: 0.5,
                  }}
                >
                  {plan.tag}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 600,
                    letterSpacing: "-0.2px",
                  }}
                >
                  {plan.title}
                </Typography>

                <Typography
                  sx={{
                    mt: 0.5,
                    fontSize: "13px",
                    opacity: 0.85,
                  }}
                >
                  {plan.details}
                </Typography>
              </Box>

              {/* 💰 Price */}
              <Box textAlign="center">
                <Typography
                  sx={{
                    fontSize: "22px",
                    fontWeight: 700,
                    letterSpacing: "0.3px",
                  }}
                >
                  {plan.price}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "12px",
                    opacity: 0.6,
                  }}
                >
                  /month
                </Typography>
              </Box>

              {/* 🚀 Button */}
              <Button
                sx={{
                  px: 3,
                  py: 1,
                  borderRadius: "999px",
                  fontWeight: 600,
                  fontSize: "13px",
                  textTransform: "none",

                  background: "rgba(255,255,255,0.9)",
                  color: "#1e293b",

                  backdropFilter: "blur(4px)",
                  border: "1px solid rgba(255,255,255,0.4)",

                  "&:hover": {
                    background: "white",
                  },
                }}
              >
                Get Connection
              </Button>
            </Box>
          </motion.div>
        ))}
      </Box>

      {/* bottom note */}
      <Typography
        textAlign="center"
        sx={{
          mt: 4,
          fontSize: "13px",
          color: "#64748b",
        }}
      >
        Free Installation • Free Set-top Box • 24/7 Support
      </Typography>
    </Box>
  );
}
