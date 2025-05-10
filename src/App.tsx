import { Routes, Route } from "react-router-dom";
import Rerender from "./component/re-render/Rerender";
import ParamsView from "./component/params/ParamsView";
import "./App.css";
import UseMemoExample from "./component/useMemo/UseMemo";
import UseCallbackExample from "./component/useCallback/UseCallback";
import FetchExample from "./component/fetching/Fetching";
import LoadingState from "./component/fetching/LoadingState";
import AxiosFetching from "./component/fetching/AxiosFetching";
import UseFetchHook from "./component/FetchHook/UseFetchHook";
import UseQuery from "./component/useQuery/UseQuery";

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
        <Route path="/usememo" element={<UseMemoExample />} />
        <Route path="/usecallback" element={<UseCallbackExample />} />
        <Route path="/fetching" element={<FetchExample />} />
        <Route path="/axios" element={<AxiosFetching />} />
        <Route path="/loadingstate" element={<LoadingState />} />
        <Route path="/usefetchhook" element={<UseFetchHook />} />
        <Route path="/usequery" element={<UseQuery />} />

        {/* { path: '*', element: <Pages.NotfoundPage />, isPrivate: false },
        { path: '/', element: <Pages.HomePage /> }, */}
      </Routes>
    </div>
  );
}

export default App;
