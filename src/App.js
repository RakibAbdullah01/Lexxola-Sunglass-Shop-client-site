import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AuthProvider from './context/AuthProvider/AuthProvider';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Home from "./Pages/Home/Home/Home";
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Registration from './Pages/Login/Registration/Registration';
import NotFound from './Pages/NotFound/NotFound';
import Purchase from './Pages/Purchase/Purchase';
import Shop from './Pages/Shop/Shop';



function App() {
  return (
    <div className="App">
            <AuthProvider>
              <Router>
                  <Switch>
                    
                      <Route exact path="/">
                        <Home/>
                      </Route>
                      
                      <Route exact path="/home">
                        <Home/>
                      </Route>

                      <Route exact path="/login">
                        <Login/>
                      </Route>
                      
                      <Route exact path="/registration">
                        <Registration/>
                      </Route>

                      <Route path="/dashboard">
                        <Dashboard/>
                      </Route>

                      <Route path="/shop">
                        <Shop/>
                      </Route>

                      <PrivateRoute path="/purchase/:id">
                        <Purchase/>
                      </PrivateRoute>

                      <Route path="/about">
                        <About/>
                      </Route>

                      <Route path="/contact">
                        <Contact/>
                      </Route>

                      <Route path="*">
                        <NotFound/>
                      </Route>
                      
                    </Switch>
                </Router>
            </AuthProvider>
    </div>
  );
}

export default App;
