import React from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
import { apps, slideUpVariant } from "../constants/constants";

const Apps = () => {

    // styled component for app tile
  const AppTile = styled(Card)(({ theme }) => ({
    textAlign: "center",
    padding: theme.spacing(2),
    transition: "transform 0.2s, box-shadow 0.2s",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: theme.shadows[6],
    },
  }));

  const AppImage = styled("img")(({ theme }) => ({
    width: "60px",
    height: "60px",
    marginBottom: theme.spacing(2),
    borderRadius: "8px",
  }));

  return (
    <motion.div
      initial="hidden"
      id="applications"
      animate="visible"
      variants={slideUpVariant}
      custom={10}
    >
      <Typography variant="h5" mt={5} mb={3}>
        Applications
      </Typography>
      <Grid container spacing={3}>
        {apps.map((app, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={app.name}
            component={motion.div}
            initial="hidden"
            animate="visible"
            variants={slideUpVariant}
            custom={5 + index}
          >
            <AppTile>
              <AppImage src={app.image} alt={app.name} />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {app.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {app.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  href={app.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                </Button>
              </CardActions>
            </AppTile>
          </Grid>
        ))}
      </Grid>
    </motion.div>
  );
};

export default Apps;
