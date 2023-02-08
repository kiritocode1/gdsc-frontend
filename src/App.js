import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Projects from "./pages/projects";
import Team from "./pages/team";




// Better import this here so we save from re-render . 
import Navbar from "./components/navbar/index";
import Footer from './components/footer';













export const endpoints = {

  home:`/`,
  projects:`projects/`,
  team:`team/`,
}

function App() {
  return (
    <>
      <Navbar/>
        <Routes>
                <Route path={endpoints.home} element={<Home/>}/>
                <Route path={endpoints.projects} element={<Projects/>}/>
                <Route path={endpoints.team} element={<Team/>}/>
      </Routes>
      <Footer/>
      </>
  );
}

export default App;