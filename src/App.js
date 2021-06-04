import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, {lazy} from 'react';
import AppContext from './context'
import Loader from "./pages/Loader";
import './assets/css/bootstrap.min.css'
import './assets/css/animate.min.css'
import './assets/css/fontawesome.min.css'
import './assets/css/flaticon.css'
import './assets/css/magnific-popup.min.css'
import './assets/css/nice-select.css'
import './assets/css/slick.min.css'
import './assets/css/meanmenu.css'
import './assets/css/responsive.css'
import './assets/css/style.css'
import './assets/css/odometer.min.css'

const Login = lazy(()=> import('./components/auth/login'));
const Register = lazy(()=> import('./components/auth/register'));
const Footer = lazy(()=> import('./components/footer/footer'));
const Header = lazy(()=> import('./components/Header/header'));
const Home = lazy(()=> import('./components/home'));
const Contact = lazy(()=> import('./components/contact'));
const About = lazy(()=> import('./components/about'));
const Movies = lazy(()=> import('./pages/Movies/movies'));
const Series = lazy(()=> import('./pages/Series/series'));
const Trending = lazy(()=> import('./pages/Trending/trending')); 


function App() {
  return (
    <AppContext.Provider>
      <Router>
        <React.Suspense fallback={<Loader />}>
        <Switch>
         <Route path="/login" exact component={Login}/>
         <Route path="/register" exact component={Register}/>
            <Route component={()=>
            <>
              <Header />
              <Route path="/" exact component={Home}/>
              <Route path="/nyango/contact" exact component={Contact}/>
              <Route path="/nyango/about" exact component={About}/>
              <Route path="/nyango/movies" exact component={Movies}/>
              <Route path="/nyango/series" exact component={Series}/>
              <Route path="/nyango/trending" exact component={Trending}/>
              <Footer />
            </>
            }/>
        </Switch>
      </React.Suspense>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
