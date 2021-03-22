import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CategoryContextProvider from './Context/CategoryContext'
import Main from './pages/Main'
import Categories from './pages/Categories'
import Product from './pages/Product'
import AllCategories from './pages/AllCategories'
import SearchProducts from './pages/SearchProducts'

function App() {
  return (
    <CategoryContextProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/'>
              <Main />
            </Route>
            <Route path='/cat'>
              <Categories />
            </Route>
            <Route path='/product/:id'>
              <Product />
            </Route>
            <Route path='/all'>
              <AllCategories />
            </Route>
            <Route path='/search'>
              <SearchProducts />
            </Route>
          </Switch>
        </Router>
      </div>
    </CategoryContextProvider>
  );
}

export default App;
