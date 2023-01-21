import { FormEvent, useId, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import { listen } from '@tauri-apps/api/event';
import {
  MemoryRouter as Router,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import "./App.css";
import Input from "./components/Input/Input";
import Main from "./components/Main/Main";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Input />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
