import React from "react";
import { Container, Typography, Box, Link, Divider, Grid } from "@mui/material";
import { Facebook, Twitter, LinkedIn, GitHub } from "@mui/icons-material";
import { styled } from "@mui/system";

const VerticalLink = styled(Link)(({ theme }) => ({
  display: "block",
  marginBottom: theme.spacing(1),
  textDecoration: "none",
  color: theme.palette.text.primary,
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        mt: 5,
        mx: 0,
      }}
    >
      <Container>
        <Box textAlign="center">
          <Typography variant="h6" gutterBottom>
            Stock Nexus
          </Typography>
          <Typography variant="body2" color="inherit" paragraph>
            Your trusted platform for market analysis and trading tools.
          </Typography>

          <Box mb={2}>
            <Link href="https://facebook.com" color="inherit" sx={{ mx: 2 }}>
              <Facebook />
            </Link>
            <Link href="https://twitter.com" color="inherit" sx={{ mx: 2 }}>
              <Twitter />
            </Link>
            <Link href="https://linkedin.com" color="inherit" sx={{ mx: 2 }}>
              <LinkedIn />
            </Link>
            <Link href="https://github.com" color="inherit" sx={{ mx: 2 }}>
              <GitHub />
            </Link>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={3}>
              <Box>
                <Typography variant="h6" gutterBottom>
                  Company
                </Typography>
                <VerticalLink href="/">About Us</VerticalLink>
                <VerticalLink href="/">Careers</VerticalLink>
                <VerticalLink href="/">Privacy Policy</VerticalLink>
                <VerticalLink href="/">Terms of Service</VerticalLink>
              </Box>
            </Grid>

            <Grid item xs={12} sm={3}>
              <Box>
                <Typography variant="h6" gutterBottom>
                  Support
                </Typography>
                <VerticalLink href="/">Contact Us</VerticalLink>
                <VerticalLink href="/">FAQ</VerticalLink>
                <VerticalLink href="/">Help Center</VerticalLink>
                <VerticalLink href="/">Feedback</VerticalLink>
              </Box>
            </Grid>

            <Grid item xs={12} sm={3}>
              <Box>
                <Typography variant="h6" gutterBottom>
                  Products
                </Typography>
                <VerticalLink href="/">Dashboard</VerticalLink>
                <VerticalLink href="/">Trading Tools</VerticalLink>
                <VerticalLink href="/">Market Analysis</VerticalLink>
                <VerticalLink href="/">Charts & Graphs</VerticalLink>
              </Box>
            </Grid>

            <Grid item xs={12} sm={3}>
              <Box>
                <Typography variant="h6" gutterBottom>
                  Legal
                </Typography>
                <VerticalLink href="/">Terms & Conditions</VerticalLink>
                <VerticalLink href="/">Privacy Policy</VerticalLink>
                <VerticalLink href="/">Disclaimer</VerticalLink>
                <VerticalLink href="/">Refund Policy</VerticalLink>
              </Box>
            </Grid>
          </Grid>

          <Divider sx={{ my: 2 }} />
          <Typography variant="body2" color="inherit">
            © {new Date().getFullYear()} Trading Dashboard. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
