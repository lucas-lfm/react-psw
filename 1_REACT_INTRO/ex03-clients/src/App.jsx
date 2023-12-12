import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import ClientList from "./pages/ClientList";
import ClientDetail from "./pages/ClientDetail";

// styles
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ClientList />}></Route>
          <Route path="/clients/:id" element={<ClientDetail />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
