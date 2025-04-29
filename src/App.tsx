import ReactLifeCycle from "./component/life-cycle/ReactLifeCycle";
import Rerender from "./component/re-render/Rerender";
import "./App.css";
import { useState } from "react";

function App() {
  const [showChild, setShowChild] = useState(true);

  return (
    <>
      {/* <>
        <button
          onClick={() => setShowChild(!showChild)}
          style={{
            padding: "8px 16px",
            backgroundColor: showChild ? "#f44336" : "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          {showChild ? "ซ่อน Component (Unmount)" : "แสดง Component (Mount)"}
        </button>

        <div className="pt-10">
          {showChild ? (
            <ReactLifeCycle />
          ) : (
            <p>Child Component ถูก Unmount แล้ว</p>
          )}
        </div>
      </> */}

      <Rerender />
    </>
  );
}

export default App;
