import Appbar from "./components/Appbar";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from "./pages/HomePage";
import HistoryPage from "./pages/HistoryPage";
import ErrorPage from "./pages/ErrorPage";
import RedirectPage from "./pages/RedirectPage";
import ExpiredPage from "./pages/ExpiredPage";

function App() {
  return (
    <div>
      <Appbar></Appbar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/expired" element={<ExpiredPage />} />
          <Route path="/:shortcut" element={<RedirectPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
