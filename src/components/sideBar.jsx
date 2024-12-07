import React, { useState, useEffect, useRef, useCallback } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Typography, Box, Slide, IconButton, useTheme } from "@mui/material";

import { mockUpdates } from "../constants/constants";

const Sidebar = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const theme = useTheme(); // Access the current theme

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
    <>
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
            color:
              theme.palette.mode === "light"
                ? "text.primary"
                : "text.secondary", // Adjust text color
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
    </>
  );
};

export default Sidebar;
