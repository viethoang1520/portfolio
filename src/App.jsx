import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "@/pages/Home/Home"
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  AOS.init({
      duration: 600
  })
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
