import './App.css';
import { Route, Routes } from 'react-router-dom';
// import Initial from './pages/initial';
import Home from './pages/home';
// import Events from "./pages/events";
import Projects from "./pages/projects";
import Team from "./pages/team";
// import Contact from "./pages/contact";
import Binder from './pages/binder';





import Navbar from "./components/navbar/index";
import Footer from './components/footer';













export const endpoints = {

  home:`/`,
  events:`events/`,
  projects:`projects/`,
  acts:"acts/",
  team:`team/`,
  contact:`contact/`,
}

function App() {
  return (
    <>
      <Navbar/>
        <Routes>
                {/* <Route exact path={endpoints.initial} element={<Initial/>}/> */}
                <Route path={endpoints.home} element={<Binder><Home/></Binder>}/>

                {/* <Route path={endpoints.events} element={<Binder><Events/></Binder>}/> */}

                <Route path={endpoints.projects} element={<Binder><Projects/></Binder>}/>

                <Route path={endpoints.team} element={<Binder><Team/></Binder>}/>

                {/* <Route path={endpoints.contact} element={<Binder><Contact/></Binder>}/> */}
                
      </Routes>
      <Footer/>
      </>
  );
}

export default App;