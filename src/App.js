import './App.css';
import AboutUs from './pages/AboutUs';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/about' element={ <AboutUs />} />
          <Route path='/' element={ <Home/>} />
        </Routes>
        <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
