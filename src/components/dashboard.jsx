import React, { useEffect, useState } from "react";
import {
  Button,
  Typography,
  Container,
  Box,
  Stack,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { samplePnLData } from "../constants/constants";
import TraderPnLChart from "./pnl";
import PnLHeatmap from "./heatmap";
import ClearAllIcon from "@mui/icons-material/ClearAll";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const navigate = useNavigate();

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const uniqueId = localStorage.getItem("uniqueId");
    if (!uniqueId) {
      navigate("/login");
    } else {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      setUser(storedUser);
    }
  }, [navigate]);

  useEffect(() => {
    const today = new Date();
    const lastMonth = new Date(today);
    lastMonth.setMonth(today.getMonth() - 1);

    const formattedStartDate = lastMonth.toISOString().split("T")[0];
    const formattedEndDate = today.toISOString().split("T")[0];

    setStartDate(formattedStartDate);
    setEndDate(formattedEndDate);
  }, []);
  const applyFilters = () => {
    let filtered = samplePnLData;

    if (startDate) {
      filtered = filtered.filter(
        (item) => new Date(item.date) >= new Date(startDate)
      );
    }
    if (endDate) {
      filtered = filtered.filter(
        (item) => new Date(item.date) <= new Date(endDate)
      );
    }

    setFilteredData(filtered);
  };
  useEffect(() => {
    applyFilters();
    console.log(startDate, endDate);
  }, [startDate, endDate]);

  const handleMonthChange = (month) => {
    const firstDay = new Date(selectedYear, month, 1);
    const lastDay = new Date(selectedYear, month + 1, 0);

    const formattedStartDate = firstDay.toISOString().split("T")[0];
    const formattedEndDate = lastDay.toISOString().split("T")[0];

    setStartDate(formattedStartDate);
    setEndDate(formattedEndDate);
  };

  const handleYearChange = (year) => {
    setSelectedYear(year);
    if (selectedMonth !== "") {
      const firstDay = new Date(year, selectedMonth, 1);
      const lastDay = new Date(year, selectedMonth + 1, 0);

      setStartDate(firstDay.toISOString().split("T")[0]);
      setEndDate(lastDay.toISOString().split("T")[0]);
    } else {
      const firstDay = new Date(year, 0, 1);
      const lastDay = new Date(year, 11, 31);

      setStartDate(firstDay.toISOString().split("T")[0]);
      setEndDate(lastDay.toISOString().split("T")[0]);
    }
  };
  const resetFilters = () => {
    const today = new Date();
    const lastMonth = new Date(today);
    lastMonth.setMonth(today.getMonth() - 1);

    const formattedStartDate = lastMonth.toISOString().split("T")[0];
    const formattedEndDate = today.toISOString().split("T")[0];

    setStartDate(formattedStartDate);
    setEndDate(formattedEndDate);
    setSelectedMonth(currentMonth);
    setSelectedYear(currentYear);
    setFilteredData(samplePnLData);
    applyFilters();
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  // Framer Motion variants
  const fadeInSlideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.2 },
    }),
  };

  // Key Stats data for a user
  const keyStats = [
    { label: "Profit / Loss", value: 3200, type: "currency" },
    {
      label: "Invested Amount",
      value: 50000,
      type: "currency",
    },
    { label: "Total Trades", value: 120, type: "number" },
    {
      label: "Average PnL per Trade",
      value: 26.67,
      type: "currency",
    },
  ];

  return (
    <Container
      component={motion.div} // Animate the container
      initial="hidden"
      animate="visible"
      variants={fadeInSlideUp}
      custom={0}
      sx={{
        marginTop: {
          xs: "1rem",
          sm: "2rem",
          md: "3rem",
        },
      }}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInSlideUp}
        custom={1}
      >
        <Typography variant="h4" gutterBottom>
          Trader Dashboard
        </Typography>
        <Grid container spacing={3} sx={{ mb: 3 }}>
          {keyStats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{stat.label}</Typography>
                  <Typography
                    variant="h5"
                    color={stat.value >= 0 ? "green" : "red"}
                  >
                    {stat.type === "currency"
                      ? `$${stat.value.toFixed(2)}`
                      : stat.value}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </motion.div>

      {/* Filters Section */}
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ my: 3 }}>
        <TextField
          label="Start Date"
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          InputLabelProps={{ shrink: true }}
          fullWidth
        />
        <TextField
          label="End Date"
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          InputLabelProps={{ shrink: true }}
          fullWidth
        />

        {/* Month Selector */}
        <FormControl fullWidth>
          <InputLabel>Month</InputLabel>
          <Select
            value={selectedMonth}
            onChange={(e) => {
              setSelectedMonth(e.target.value);
              handleMonthChange(e.target.value);
            }}
            label="Month"
          >
            {Array.from({ length: 12 }, (_, index) => (
              <MenuItem key={index} value={index}>
                {new Date(0, index).toLocaleString("en-US", { month: "long" })}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel>Year</InputLabel>
          <Select
            value={selectedYear || currentYear}
            onChange={(e) => handleYearChange(e.target.value)}
            label="Year"
          >
            {Array.from({ length: 5 }, (_, index) => (
              <MenuItem key={currentYear - index} value={currentYear - index}>
                {currentYear - index}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button variant="contained" onClick={resetFilters}>
          <ClearAllIcon />
        </Button>
      </Stack>

      {/* Charts and Heatmap */}
      <Stack
        component={motion.div} // Animate the stack
        direction={{ xs: "column", md: "row" }}
        spacing={3}
        initial="hidden"
        animate="visible"
        variants={fadeInSlideUp}
        custom={2} // Sequential animation
      >
        <Box
          flex={1}
          component={motion.div} // Animate the first chart
          initial="hidden"
          animate="visible"
          variants={fadeInSlideUp}
          custom={3} // Sequential animation
        >
          <TraderPnLChart data={filteredData} />
        </Box>
        <Box
          flex={1}
          component={motion.div} // Animate the heatmap
          initial="hidden"
          animate="visible"
          variants={fadeInSlideUp}
          custom={4} // Sequential animation
        >
          <PnLHeatmap data={filteredData} />
        </Box>
      </Stack>
    </Container>
  );
};

export default Dashboard;
