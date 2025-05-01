import { Routes, Route } from "react-router-dom";
import Rerender from "./component/re-render/Rerender";
import ParamsView from "./component/params/ParamsView";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<div>Home ja</div>} />
        <Route path="/rerender" element={<Rerender />} />
        <Route path="/param/:id/:name" element={<ParamsView />} />
        <Route
          path="*"
          element={<div className="text-white">hello world</div>}
        />

        {/* { path: '*', element: <Pages.NotfoundPage />, isPrivate: false },
        { path: '/', element: <Pages.HomePage /> }, */}
      </Routes>
    </div>
  );
}

export default App;
