import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Signin from './pages/Signin';
import SignUp from './pages/SignUp';
import About from './pages/about';
import Profile from './pages/profile';

export default function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Sign-in" element={<Signin />} />
    <Route path="/SignUp" element={<SignUp />} />
    <Route path="/about" element={<About />} />
    <Route path="/profile" element={<Profile />} />
    </Routes>
    </BrowserRouter>;
}
