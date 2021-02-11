import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CategoryContextProvider from './Context/CategoryContext'
import Main from './pages/Main'
import Categories from './pages/Categories'
import Video from './pages/Video'
import Admin from './pages/Admin'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <CategoryContextProvider>
              <Main />
            </CategoryContextProvider>
          </Route>
          <Route path='/video'>
            <Video />
          </Route>
          <Route path='/cat'>
            <CategoryContextProvider>
              <Categories />
            </CategoryContextProvider>
          </Route>
          <Route path='/adm'>
            <CategoryContextProvider>
              <Admin />
            </CategoryContextProvider>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
