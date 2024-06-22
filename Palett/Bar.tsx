import { CSSProperties } from "react";

type BarProps = {
  backgroundColor: string;
};
const Bar = ({ backgroundColor }: BarProps) => {
  const style: CSSProperties = {
    width: "30px",
    height: "180px",
    border: "1px solid balck",
    backgroundColor: backgroundColor,
  };
  return <div style={style}></div>;
};
export default Bar;
