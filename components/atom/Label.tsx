import { TEXTSTYLE } from "../../styles/textStyles";

export type LabelPorps = {
  contents?: string;
  isChecked?: boolean;
};

const Label = ({ contents = "내용 없음", isChecked = false }: LabelPorps) => {
  return (
    <span className={isChecked ? TEXTSTYLE.DONE : TEXTSTYLE.TODO}>
      {contents}
    </span>
  );
};
export default Label;
