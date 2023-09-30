import { Link } from 'react-router-dom'
import './Header.css'
import { routePaths } from '../../utils/routes'
import { NAV_DATA } from '../../data/NavData'

const Header = () => {

    return (
        <header className='nav-header'>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand  text-light" to={routePaths.home}>TravelEra</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to={routePaths.home} className="nav-link  text-light active" aria-current="page" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to={routePaths.aboutUs}>About</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link  text-light dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Our Services
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to={routePaths.allServices}>All Services</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    {NAV_DATA.map(item => (
                                        <li key={item.id}><Link className="dropdown-item" to={item.to}>{item.linkName}</Link></li>
                                    ))}
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  text-light" to={routePaths.contactUs}>Contact US</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header