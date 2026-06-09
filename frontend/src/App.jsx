import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewProfile from "./pages/ViewProfile";
import EditProfile from "./pages/EditProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ViewProfile />} />
        <Route path="/edit" element={<EditProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;