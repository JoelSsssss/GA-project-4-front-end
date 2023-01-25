import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Navbar from './components/Navbar';
import Home from './components/Home';
import UserCardsIndex from './components/UserCardsIndex';
import UsercardsList from './components/UserCards';

window.Buffer = window.Buffer || require('buffer').Buffer;

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/usercards' element={<UsercardsList />} />
      </Routes>
      <ToastContainer></ToastContainer>
    </Router>
  );
}

export default App;
