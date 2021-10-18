import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Book from './components/Book/Book';
import Services from './components/Services/Services';
import Login from './components/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Contacts from './components/Contacts/Contacts';
import Doctors from './components/Doctors/Doctors';
// import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
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
            <Route path="/login">
              <Login></Login>
            </Route>


            <PrivateRoute path="/booking/:serviceId">
              <Book></Book>
            </PrivateRoute>

            <PrivateRoute path="/contacts">
              <Contacts></Contacts>
            </PrivateRoute>
            <PrivateRoute path="/doctors">
              <Doctors></Doctors>
            </PrivateRoute>

          </Switch>

        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
