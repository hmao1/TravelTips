import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@mui/material";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import { useTheme } from "@mui/material/styles";
import { alpha } from "@mui/material/styles";

/**
 *
 *
 * @return {*}
 */
const Header = () => {
  const theme = useTheme();
  const styles = {
    title: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      "&:hover": { backgroundColor: alpha(theme.palette.common.white, 0.25) },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: { width: "20ch" },
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
    },
  };

  console.log("search: ", styles.search);
  return (
    <AppBar position="static">
      <Toolbar sx={styles.toolbar}>
        <Typography variant="h5" sx={styles.title}>
          Travel Advisor
        </Typography>
      </Toolbar>
      <Box display="flex">
        <Typography variant="h6" sx={styles.title}>
          Explore new places
        </Typography>
        {/* <Autocomplete> */}
        <div sx={styles.search}>
          <div sx={styles.searchIcon}>
            <ManageSearchIcon />
          </div>
          <InputBase
            placeholder="Search for places"
            sx={{ root: styles.inputRoot, input: styles.inputInput }}
            type="text"
          />
        </div>
        {/* </Autocomplete> */}
      </Box>
    </AppBar>
  );
};

export default Header;
