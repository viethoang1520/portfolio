import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Home from "./pages/Home/Home"
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  const theme = useSelector((state) => state.theme.theme)

  useEffect(() => {
    AOS.init({
      duration: 600
    })
  }, [])

  return (
    <div className={`App ${theme}`}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
