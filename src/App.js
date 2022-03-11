import './App.css';
import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project'
import Blog from './components/Blog'
import Hiring from './components/Hiring'
import Requrments from './components/Requrments'
import Contact from './components/Contact'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Inquiry_form from './components/Inquiry_form';
import Loan_assistant from './components/Loan_assistant';
import Interior_designing from './components/Interior_designing';
import Home_loan_calculator from './components/Home_loan_calculator';

function App() {
  return (
    <div>
      <Router>
      <Header />
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/about' element={< About />}></Route>
          <Route exact path='/project' element={< Project />}></Route>
          <Route exact path='/blog' element={< Blog />}></Route>
          <Route exact path='/hiring' element={< Hiring />}></Route>
          <Route exact path='/requrments' element={< Requrments />}></Route>
          <Route exact path='/contact' element={< Contact />}></Route>
          <Route exact path='/inquiry_from' element={< Inquiry_form />}></Route>
          <Route exact path='/loan_assistant' element={< Loan_assistant />}></Route>
          <Route exact path='/interior_designing' element={< Interior_designing />}></Route>
          <Route exact path='/home_loan_calculator' element={< Home_loan_calculator/>}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}


export default App;
