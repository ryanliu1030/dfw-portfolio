import './App.scss';
import Layout from './components/Layout'
import Home from './components/Home'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
