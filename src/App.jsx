import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Mars from './pages/Mars'
import Asteroids from './pages/Asteroids'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0a0a1a] text-white flex flex-col">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mars" element={<Mars />} />
            <Route path="/asteroids" element={<Asteroids />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App