import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Book from './components/Book/Book';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/service">
            <Services></Services>
          </Route>

          <Route path="/booking/:serviceId">
            <Book></Book>
          </Route>

        </Switch>

      </Router>
    </div>
  );
}

export default App;
