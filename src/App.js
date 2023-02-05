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
        <Home/>
        <Routes>
          <Route path='/about' element={ <AboutUs />} />
        </Routes>
        <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
