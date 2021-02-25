import './App.css';
import Header from "./Components/Header"
import Nav from "./Components/Nav"
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contacts from './Pages/Contacts/Contact'

import { Switch, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <Header>
        <Nav />
      </Header>

      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/about' exact>
          <About />
        </Route>
        <Route path='/contacts' exact>
          <Contacts />
        </Route>
      </Switch>
    </>
  );
}

export default App;
