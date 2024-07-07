import { FaBars } from "react-icons/fa6";
import { alarm } from "../../utils/util";
type BarIconType = {
  onClick?: () => void;
};
const BarIcon = ({ onClick = alarm }: BarIconType) => {
  return <FaBars onClick={onClick} />;
};

export default BarIcon;
