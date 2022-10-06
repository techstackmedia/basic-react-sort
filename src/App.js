import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StateProvider } from "./context/StageContexts";
import UseStageContexts from "./UseStagContexts";

export default function App() {
  return (
    <StateProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UseStageContexts />} />
        </Routes>
      </BrowserRouter>
    </StateProvider>
  );
}
