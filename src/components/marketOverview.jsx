import React from "react";
import {
  Typography,
  Grid,
  CardContent,
  CardMedia,
  Chip,
  Card,
} from "@mui/material";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
import { mockMarkets, slideUpVariant } from "../constants/constants";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
const MarketsCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[5],
  transition: "transform 0.2s",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));
const MarketOverview = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideUpVariant}
      custom={1}
    >
      <Typography variant="h5" mb={3}>
        Markets Overview
      </Typography>
      <Grid container spacing={3}>
        {mockMarkets.map((market, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={market.name}
            component={motion.div}
            initial="hidden"
            animate="visible"
            variants={slideUpVariant}
            custom={2 + index} // Animations stagger for each card
          >
            <MarketsCard>
              <CardMedia
                component="img"
                alt={market.name}
                height="200"
                image={market.image}
                title={market.name}
              />
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                  {market.name}
                </Typography>
                <Typography variant="body2">{market.info}</Typography>
                <Chip
                  label={market.isOpen ? "Open" : "Closed"}
                  color={market.isOpen ? "success" : "error"}
                  sx={{ marginTop: 1, borderRadius: 2, marginRight: 2 }}
                />
                <Chip
                  variant="outlined"
                  label={
                    market.trend === "up" ? "Trending Up" : "Trending Down"
                  }
                  icon={
                    market.trend === "up" ? (
                      <TrendingUpIcon />
                    ) : (
                      <TrendingDownIcon />
                    )
                  }
                  color={market.trend === "up" ? "success" : "error"}
                  sx={{
                    marginTop: 1,
                    borderRadius: 2,
                    fontWeight: 500,
                    borderColor:
                      market.trend === "up" ? "success.main" : "error.main",
                  }}
                />
              </CardContent>
            </MarketsCard>
          </Grid>
        ))}
      </Grid>
    </motion.div>
  );
};

export default MarketOverview;
