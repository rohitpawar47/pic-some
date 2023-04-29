
import './App.css';
import Header from './components/Header';
import { Routes, Route } from "react-router-dom"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"

function App() {
  return (
    <div className="App">
      <Header />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Photos />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
