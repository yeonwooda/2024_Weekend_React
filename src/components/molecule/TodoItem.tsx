import { useState } from "react";
import RoundCheckBox from "../atom/RoundCheckBox";
import CheckedLabel from "../atom/CheckedLable";
import TrashIcon from "../atom/TrashIcon";

export type TodoItemProps = {
  id: number;
  contents: string;
  onDelete?: () => void;
};

const TodoItem = ({ contents, onDelete }: TodoItemProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const handleCheck = () => setIsChecked((prev) => !prev);

  const obj = {
    roundChekBox: {
      isChecked,
      handleCheck,
    },
    checkedLabel: {
      isChecked,
      contents,
    },
    trashIcon: {
      onDelete,
    },
  };

  return (
    <div className="flex items-center gap-5">
      <RoundCheckBox {...obj.roundChekBox} />
      <CheckedLabel {...obj.checkedLabel} />
      {isChecked && <TrashIcon {...obj.trashIcon} />}
    </div>
  );
};

export default TodoItem;
