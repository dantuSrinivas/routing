import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import HomePage from "./components/HomePage"
import AuthenticatedRoute from './auth/authentication';
import Login from './components/Login';
import { TokenContext } from "./context/context"
import { useState } from 'react';
import Task2 from './components/task2';



function App() {

  const [token, setToken] = useState(false)
  return (
    <div>
      <TokenContext.Provider
        value={
          {
            token: token,
            setToken: setToken
          }
        }
      >
        <Router>
          { token === true &&
            <nav>
            <Link to="/" className='text'> Home </Link>
            <Link to="/profile"  className='text'> DashBoard </Link>
          </nav>
          }
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route element={<AuthenticatedRoute />}>
              <Route path='/' element={<HomePage />} />
              <Route path='profile' element={<Task2 />} />
            </Route>


          </Routes>
        </Router>

      </TokenContext.Provider>
    </div>
  );
}

export default App;
