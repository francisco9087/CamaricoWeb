
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Home from '../views/Home'

const NavBar = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" >Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav mx-auto">
              <Link to="/home" className="nav-item nav-link">Home</Link>
              <Link to="/home" className="nav-item nav-link">Pricing</Link>
              <Link to="/home" className="nav-item nav-link"> </Link>
              <Link to="/home" className="nav-item nav-link t">Disabled</Link>
          </div>
        </div>
      </nav>
      <Switch>
        <Route path="/home" component={Home} />
      </Switch>
    </Router>
    
      
  
  )
}

export default NavBar