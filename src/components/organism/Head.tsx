import BarIcon from "../atom/BarIcon";
import PureLabel from "../atom/PureLabel";

const Head = () => {
  return (
    <div className="p-5 bg-purple-500 flex justify-center items-center relative max-w-lg">
      <div className="absolute left-6 text-white ">
        <BarIcon />
      </div>
      <PureLabel contents="WebSite todo" />
    </div>
  );
};

export default Head;
