import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import NotFound from './Pages/NotFound';
import Footer from './Components/Footer';
import Header from './Components/Header';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>

        <Header />
        
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/Product'>
              <Product />
            </Route>
            <Route exact path='/Cart'>
              <Cart />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
                
        <Footer />

      </Router>
      
    </div>
    
  );
}

export default App;
