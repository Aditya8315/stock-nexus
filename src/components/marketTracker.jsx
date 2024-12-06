import React from "react";
import { Typography, Box, Chip } from "@mui/material";
import { motion } from "framer-motion";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { markets, slideUpVariant } from "../constants/constants";

const MarketTracker = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideUpVariant}
      custom={5}
    >
      <Typography variant="h5" mb={3}>
        Markets Tracker
      </Typography>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          overflowX: "auto",
          p: 2,
          mt: 2,
          boxShadow: 3,
          borderRadius: 1,
          "::-webkit-scrollbar": {
            display: "none",
          },
          scrollbarWidth: "none",
        }}
      >
        {markets.map((market, index) => (
          <Chip
            key={index}
            icon={
              market.trend === "UP" ? <TrendingUpIcon /> : <TrendingDownIcon />
            }
            label={`${market.name}`}
            color={market.color}
            sx={{ mr: 2, borderRadius: 2, fontWeight: 600 }}
          />
        ))}
      </Box>
    </motion.div>
  );
};

export default MarketTracker;
