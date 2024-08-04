export type PureLabelPorps = {
  contents?: string;
};

const PureLabel = ({ contents }: PureLabelPorps) => {
  return <span className="text-white font-bold text-lg">{contents}</span>;
};

export default PureLabel;
