import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import DataEngineer from './pages/DataEngineer.jsx'
import Writer from './pages/Writer.jsx'
import Gamedev from './pages/Gamedev.jsx'
import Header from './components/Header.jsx'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/data-engineer" element={<><Header /><DataEngineer /></>} />
                <Route path="/writer" element={<><Header /><Writer /></>} />
                <Route path="/gamedev" element={<><Header /><Gamedev /></>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
