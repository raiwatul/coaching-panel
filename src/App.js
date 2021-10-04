import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Header from './Header/Header';
import Footer from './Components/Footer/Footer';
import Services from './Components/Services/Services';
import Error from './Components/Error/Error';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Coach from './Components/Coach/Coach';
import Banner from './Components/Banner/Banner';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route>
          <Header></Header>
        </Route>
        <Switch>
          <Route path="/banner">
            <Banner></Banner>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/coach">
            <Coach></Coach>
          </Route>

          <Route>
            <Error></Error>
          </Route>
        </Switch>
        <Route>
          <Footer></Footer>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
