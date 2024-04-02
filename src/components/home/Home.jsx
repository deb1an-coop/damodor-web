import { KeyboardArrowDown } from "@mui/icons-material";
import { Avatar, Box, IconButton, Typography } from "@mui/material";
import Header from "./header/Header";
import Search from "./search/Search";

function Home() {
  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}
      sx={{
      backgroundColor: "white",
    }}>
      <Header />
      <Search />
      <Box>Content</Box>
    </Box>
  );
}

export default Home;
