import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import About from '../../Pages/About'
import Home from '../../Pages/Home'

function NavBar() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Hem</Link>
          </li>
          <li>
            <Link to="/about">Om oss</Link>
          </li>
          <li></li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  )
}

export default NavBar
