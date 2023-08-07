

import Navbar from './components/Navbar';
import Home from './components/Home';
import Books from './components/Books';

import { Link, Route, Routes} from 'react-router-dom'


function App() {
  return (

    <>

    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/books'>Books</Link></li>
      </ul>
    </nav>

    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="books" element={<Books></Books>}></Route>
    </Routes>

    </>
    );
}

export default App;
