import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./components/MainLayout";

function App() {
  // return <MainLayout />;
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<div>home</div>} />
          <Route path="/forbidden" element={<div>forbidden (^_^)</div>} />
          <Route path="/addquestion" element={<div>add question(^_^)</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
