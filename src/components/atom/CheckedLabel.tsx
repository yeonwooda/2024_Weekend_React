import { ERROR } from "../../constants/errormessage";
import { TEXTSTYLE } from "../../styles/textStyles";

export type CheckedLabelPorps = {
  contents?: string;
  isChecked?: boolean;
};

const CheckedLabel = ({
  contents = ERROR.NOCONTENT,
  isChecked = false,
}: CheckedLabelPorps) => {
  return (
    <span className={isChecked ? TEXTSTYLE.DONE : TEXTSTYLE.TODO}>
      {contents}
    </span>
  );
};
export default CheckedLabel;
