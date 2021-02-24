import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CategoryContextProvider from './Context/CategoryContext'
import DataContextProvider from './Context/DataContext'
import Main from './pages/Main'
import Categories from './pages/Categories'
import Product from './pages/Product'

function App() {
  return (
    <CategoryContextProvider>
      <DataContextProvider>
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
            </Switch>
          </Router>
        </div>
      </DataContextProvider>
    </CategoryContextProvider>
  );
}

export default App;
