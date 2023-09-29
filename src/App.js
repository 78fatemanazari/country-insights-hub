import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import DetailsPage from './components/DetailsPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Details" element={<DetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
