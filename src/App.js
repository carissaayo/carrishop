import {BrowserRouter} from "react-router-dom"
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <div className="App bg-[#F4F4F9]">
      <BrowserRouter>
      <Home />
      </BrowserRouter>
    </div>
  );
}

export default App;
