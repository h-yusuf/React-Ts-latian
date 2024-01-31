import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Index from './components/useState/Index';
import IndexUe from './components/useEffect/Index';

// interface AppProps {
//   name: string;
// }

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/useeffect" element={<IndexUe />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
