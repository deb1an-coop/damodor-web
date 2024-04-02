import { KeyboardArrowDown } from "@mui/icons-material";
import { Avatar, Box, IconButton, Typography } from "@mui/material";

function Header() {
  return (
    <Box
      display={"flex"}
      gap={1}
      justifyContent={"flex-start"}
      alignItems={"center"}
      sx={{
        // backgroundColor: "purple",
        color: "white",
        height: "7.5vh",
        width: "90vw",
        // ml:2
      }}
    >
      <Avatar
        src="https://m.media-amazon.com/images/M/MV5BMzgwYWNlMDItZDdjOS00NmI3LWJlNGUtNjRkYzYyYjU4OWE5XkEyXkFqcGdeQWRvb2xpbmhk._V1_QL75_UY281_CR0,0,500,281_.jpg"
        sx={{
          width: 40,
          height: 40,
        }}
      />
      <Box display={"flex"} flexDirection={"column"}>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{
            color: "black",
            mb: -1,
          }}
        >
          Welcome Damodor!
        </Typography>
        <Box display={"flex"} alignItems={"center"}>
          <Typography
            variant="body2"
            component="div"
            sx={{
              color: "black",
            }}
          >
            Home - Podrah, Andul Road
          </Typography>
          <IconButton>
            <KeyboardArrowDown />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
