import React, { useState } from "react";
import { Box, TextField, Autocomplete } from "@mui/material";
import { motion } from "framer-motion";
import SearchIcon from "@mui/icons-material/Search";
import { slideUpVariant,searchData } from "../constants/constants";



const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(searchData);

  const handleInputChange = (event, value) => {
    setSearchInput(value);
    setFilteredOptions(
      searchData.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleSearch = () => {
    console.log("Searched Text:", searchInput);
  };

  return (
    <motion.div
      initial="hidden"
      id="search"
      animate="visible"
      variants={slideUpVariant}
      custom={0}
    >
      <Box textAlign="center" mb={5}>
        <Autocomplete
          freeSolo
          options={filteredOptions}
          inputValue={searchInput}
          onInputChange={handleInputChange}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              placeholder="Search (e.g., LeasedLine)"
              sx={{
                width: "50%",
                mr: 1,
                height: 56,
                "& .MuiInputBase-root": {
                  display: "flex",
                  justifyContent: "space-between",
                },
                "& .MuiInputAdornment-root": {
                  position: "absolute",
                  right: 10,
                },
              }}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <SearchIcon
                    sx={{ cursor: "pointer", marginRight: 2 }}
                    onClick={handleSearch}
                  />
                ),
              }}
            />
          )}
          sx={{
            "& .MuiAutocomplete-listbox": {
              "&::-webkit-scrollbar": {
                display: "none",
              },
              scrollbarWidth: "none",
            },
          }}
        />
      </Box>
    </motion.div>
  );
};

export default Search;
