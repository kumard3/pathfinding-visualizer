import { Route, Routes } from "react-router-dom";
import NavComponent from "./components/NavComponent";
import PathfindingVisualizer from "./PathfindingVisualizer/PathfindingVisualizer";

export const HomePage = () => {
  return (
    <div className="bg-[#0F182B] text-white min-h-screen">
      <h1>tailwind css starter </h1>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <PathfindingVisualizer />
    </div>
  );
}

export default App;
