import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GithubState from './contextAPI/github/githubState';
import AlertState from './contextAPI/alert/alertState';
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { NotFound } from './components/pages/NotFound';
import Users from './components/users/Users';
import "./App.css";
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';


function App() {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <div className='App'>
            <Navbar/>
          <div className='container'>
            <Alert/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/user/:login" element={<Users/>}/>
            <Route element={<NotFound/>}/>
          </Routes>
          </div>
          </div>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
}

export default App;
