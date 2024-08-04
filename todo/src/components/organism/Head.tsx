import BasicButtons from "../atom/AddButton";
import FloatingActionButtonExtendedSize from "../atom/FloatingButton";
import PureLabel from "../atom/PureLabel";

const Head = () => {
  return (
    <div className="p-5 bg-purple-500 flex justify-center items-center relative max-w-lg">
      <div>
        <FloatingActionButtonExtendedSize />
      </div>
      <PureLabel contents="메모장" />
      <BasicButtons />
    </div>
  );
};

export default Head;
