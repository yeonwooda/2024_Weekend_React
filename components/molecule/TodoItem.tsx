import { useState } from "react";
import Label from "../atom/Label";
import RoundCheckBox from "../atom/RoundCheckBox";
import TrashIcon from "../atom/TrashIcon";

export type TodoItemProps = {
  contents: string;
};

const TodoItem = ({ contents }: TodoItemProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const handleCheck = () => setIsChecked((prev) => !prev);

  const obj = {
    roundCheckBox: {
      isChecked,
      handleCheck,
    },
    lable: {
      isChecked,
      contents,
    },
  };

  return (
    <div className="flex items-center gap-1">
      <RoundCheckBox {...obj.roundCheckBox} />
      <Label {...obj.lable} />
      {isChecked && <TrashIcon />}
    </div>
  );
};
export default TodoItem;
