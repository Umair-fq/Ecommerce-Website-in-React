import { createContext } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import Shop from './pages/Shop'
import ProductCategory from './pages/ProductCategory'
import Product from './pages/Product'
import Cart from './pages/Cart'
import LoginSignup from './pages/LoginSignup';
import MenBanner from './components/assets/men_banner2.png'
import WomenBanner from './components/assets/banner_women.png'
import KidsBanner from './components/assets/banner_kids.png'


function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path = '/'>
            <Shop />
          </Route>
          <Route exact path = '/men'>
            <ProductCategory banner = {MenBanner} category = "men"/>
          </Route>
          <Route exact path = '/women'>
            <ProductCategory banner = {WomenBanner} category = "women"/>
          </Route>
          <Route exact path = '/kids'>
            <ProductCategory banner = {KidsBanner} category = "kid"/>
          </Route>
          {/* <Route exact path = '/products'>
            <Product />
          </Route> */}
          <Route exact path = '/product/:id'>
            <Product />
          </Route>
          <Route exact path = '/cart'>
            <Cart />
          </Route>
          <Route exact path = '/login'>
            <LoginSignup />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
