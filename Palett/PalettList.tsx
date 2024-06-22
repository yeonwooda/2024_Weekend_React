import { CSSProperties } from "react";
import Bar from "./Bar";

type PalettListProps = {
  text: string;
  backgroundColor: string;
};

const PalettList = ({ text, backgroundColor }: PalettListProps) => {
  const style: CSSProperties = {
    display: "felx",
    alignItems: "center",
    backgroundColor: backgroundColor,
  };
  return (
    <div style={style}>
      <Bar backgroundColor={backgroundColor} />
      <span>{text}</span>
    </div>
  );
};
export default PalettList;
