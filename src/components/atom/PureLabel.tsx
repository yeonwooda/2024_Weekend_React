import { ERROR } from "../../constants/errormessage";

export type PureLabelPorps = {
  contents?: string;
};
const PureLabel = ({ contents = ERROR.NOCONTENT }: PureLabelPorps) => {
  return <span className="text-white font-bold text-lg">{contents}</span>;
};

export default PureLabel;
