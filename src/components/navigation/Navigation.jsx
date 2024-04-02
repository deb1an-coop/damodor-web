import {
  Category,
  Chair,
  LocalOffer,
  ShoppingCart,
  StarHalf,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";

function Navigation() {
  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#233060",
          //   backgroundColor: "#E67300",
          top: "auto",
          bottom: 0,
        }}
      >
        <Toolbar>
          <Box display="flex" justifyContent="space-between" width="100%">
            <IconButton color="inherit" aria-label="open drawer">
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
              >
                <Chair
                  sx={{
                    fontSize: 30,
                  }}
                />
                <Typography variant="caption" noWrap component="div">
                  Home
                </Typography>
              </Box>
            </IconButton>
            <IconButton color="secondary" aria-label="add">
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
              >
                <Category
                  sx={{
                    fontSize: 30,
                  }}
                />
                <Typography variant="caption" noWrap component="div">
                  Category
                </Typography>
              </Box>
            </IconButton>
            <Box>
              <IconButton color="inherit">
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                >
                  <StarHalf
                    sx={{
                      fontSize: 30,
                    }}
                  />
                  <Typography variant="caption" noWrap component="div">
                    The Zone
                  </Typography>
                </Box>
              </IconButton>
            </Box>
            <IconButton color="inherit">
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
              >
                <LocalOffer
                  sx={{
                    fontSize: 30,
                  }}
                />
                <Typography variant="caption" noWrap component="div">
                  Deals
                </Typography>
              </Box>
            </IconButton>
            <IconButton color="inherit">
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
              >
                <ShoppingCart
                  sx={{
                    fontSize: 30,
                  }}
                />
                <Typography variant="caption" noWrap component="div">
                  Cart
                </Typography>
              </Box>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navigation;
