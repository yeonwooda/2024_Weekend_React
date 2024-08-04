import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";

function FloatingActionButtonExtendedSize() {
  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Fab variant="extended" size="small" color="primary">
        <NavigationIcon sx={{ mr: 1 }} />
        오늘
      </Fab>
      <Fab variant="extended" size="small" color="primary">
        <NavigationIcon sx={{ mr: 1 }} />
        주간
      </Fab>
      <Fab variant="extended" size="small" color="primary">
        <IoCalendarNumberOutline sx={{ mr: 1 }} />
        전체
      </Fab>
    </Box>
  );
}

export default FloatingActionButtonExtendedSize;
