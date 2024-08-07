import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import { FaCheck } from "react-icons/fa6";
import { TbBracketsAngle } from "react-icons/tb";
function FloatingActionButtonExtendedSize() {
  return (
    <Box sx={{ display: "flex" }}>
      <Fab variant="extended" size="small" color="primary">
        <FaCheck />
        오늘
      </Fab>
      <Fab variant="extended" size="small" color="primary">
        <TbBracketsAngle />
        주간
      </Fab>
    </Box>
  );
}

export default FloatingActionButtonExtendedSize;
