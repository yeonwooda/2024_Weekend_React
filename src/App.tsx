import AddButton from "./components/atom/AddButton";
import TodoItem from "./components/molecule/TodoItem";
import Body from "./components/organism/Body";
import Head from "./components/organism/Head";

function App() {
  return (
    <div className="w-screen mx-auto max-w-lg">
      <Head />
      <Body />
    </div>
  );
}

export default App;
