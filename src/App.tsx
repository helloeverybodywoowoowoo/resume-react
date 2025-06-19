import { Routes, Route} from 'react-router-dom';
import './App.css'
import Home from './pages/Home/Home'
import Ecom from './pages/Ecom/Ecom'
import Feature from './pages/Feature/Feature'
import Resume from './pages/Resume/Resume'
import Header from './Header/Header'
import Footer from './Footer/Footer'


export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/resume-react" element={< Home />} />
        <Route path="/resume-react/Ecom" element={< Ecom />} />
        <Route path="/resume-react/Feature" element={< Feature />} />
        <Route path="/resume-react/Resume" element={< Resume />} />

        {/* <Route path="/" element={< Ecom />} /> */}
        <Route path="/" element={< Home />} />
        <Route path="*" element={< Feature />} />
        {/* <Route path="/Feature" element={< Feature />} /> */}
        {/* <Route path="/Resume" element={< Resume />} /> */}

      </Routes>
      <Footer />
    </>
  )
}

