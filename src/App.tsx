import {
  MemoryRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Input from "./components/Input/Input";
import Main from "./components/Main/Main";
import { DataProvider } from "./shared/DataContext.js";

function App() {
  return (
    <DataProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Input />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </Router>
    </DataProvider>
  );
}

export default App;
