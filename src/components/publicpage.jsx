import React, { useEffect, useRef, useCallback } from "react";
import { Typography, Container, Box, Slide, IconButton } from "@mui/material";

import { mockUpdates, slideUpVariant } from "../constants/constants";
import MarketOverview from "./marketOverview";
import MarketTracker from "./marketTracker";
import Apps from "./apps";
import Search from "./search";

const PublicPage = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 5 }}>
      <Search />
      <MarketTracker />
      <MarketOverview />
      <Apps />
    </Container>
  );
};

export default PublicPage;
