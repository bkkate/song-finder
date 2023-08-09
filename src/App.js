import "./App.css";
import { Route, Routes } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import SearchPage from "./pages/SearchPage";
import SongInfoPage from "./pages/SongInfoPage";
import { Provider } from "./context";

function App() {

  return (
    <Provider>
      <React.Fragment>
        <Navbar />

        <Routes>
          <Route path="/" element={<SearchPage />}></Route>
          <Route path="/song/:id" element={<SongInfoPage />}></Route>
        </Routes>
      </React.Fragment>
    </Provider>
  );
}

export default App;
