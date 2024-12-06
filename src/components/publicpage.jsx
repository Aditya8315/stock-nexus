import React, { useEffect, useRef, useCallback } from "react";
import { Typography, Container, Box, Slide, IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { mockUpdates, slideUpVariant } from "../constants/constants";
import MarketOverview from "./marketOverview";
import MarketTracker from "./marketTracker";
import Apps from "./apps";
import Search from "./search";

const PublicPage = () => {
  const [isPanelOpen, setIsPanelOpen] = React.useState(false);
  const panelRef = useRef(null);
  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };
  const handleClickOutside = useCallback((event) => {
    if (panelRef.current && !panelRef.current.contains(event.target)) {
      setIsPanelOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);
  return (
    <Container maxWidth="xl" sx={{ mt: 5 }}>
      <Search />
      <MarketTracker />

      <MarketOverview />

      <Slide direction="left" in={isPanelOpen} mountOnEnter unmountOnExit>
        <Box
          ref={panelRef}
          sx={{
            width: 300,
            position: "fixed",
            right: 0,
            top: 64,
            bottom: 0,
            bgcolor: "background.default",
            boxShadow: 5,
            p: 3,
            overflowY: "auto",
            maxHeight: "calc(100vh - 64px)",
            "::-webkit-scrollbar": {
              display: "none",
            },
            scrollbarWidth: "none",
          }}
        >
          <Typography variant="h6" mb={2}>
            Recent Updates
          </Typography>
          {mockUpdates.map((item) => (
            <Box key={item.region} mb={2}>
              <Typography variant="subtitle1">{item.region}</Typography>
              {item.updates.map((update, idx) => (
                <Typography
                  key={idx}
                  variant="body2"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Box component="span" sx={{ mr: 1 }}>
                    •
                  </Box>
                  {update}
                </Typography>
              ))}
            </Box>
          ))}
        </Box>
      </Slide>
      <IconButton
        onClick={togglePanel}
        sx={{
          position: "fixed",
          top: "10%",
          right: isPanelOpen ? 300 : 0,
          transform: "translateY(-50%)",
          borderRadius: "25%",
          boxShadow: 2,
        }}
      >
        {isPanelOpen ? <ArrowForwardIosIcon /> : <ArrowBackIosIcon />}
      </IconButton>
      <Apps />
    </Container>
  );
};

export default PublicPage;
