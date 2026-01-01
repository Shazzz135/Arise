


import Loading from './pages/Loading';
import Home from './pages/Home';
import Create from './pages/Create';
import { useEffect, useState } from 'react';
import FadeTransition from './utils/FadeTransition';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createToken, verifyToken } from './utils/jwt';


function App() {
  const [showLoading, setShowLoading] = useState(false);
  // Removed unused token state

  useEffect(() => {
    // Simulate local data
    const localData = { user: 'ME', habits: [] };
    let storedToken = localStorage.getItem('arise_jwt');
    let valid = false;
    if (storedToken) {
      const verified = verifyToken(storedToken);
      valid = !!verified;
    }
    if (!storedToken || !valid) {
      // Token missing or expired, create new
      const newToken = createToken(localData);
      localStorage.setItem('arise_jwt', newToken);
      setShowLoading(true);
      // Show loading for 3.5s then hide
      setTimeout(() => setShowLoading(false), 3500);
    } else {
      setShowLoading(false);
    }
  }, []);

  return (
    <div className="bg-black min-h-screen w-full">
      {showLoading && (
        <FadeTransition show={showLoading} duration={500}>
          <Loading />
        </FadeTransition>
      )}
      {!showLoading && (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<Create />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App
