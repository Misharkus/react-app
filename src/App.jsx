import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./components/MainLayout";
import { HomePage } from "./pages/HomePage";
import { QuestionCard } from "./components/QuestionCard";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/forbidden" element={<div>forbidden (^_^)</div>} />
          <Route path="/addquestion" element={<div>add question(^_^)</div>} />
          <Route path="/question/:id" element={<QuestionCard />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
