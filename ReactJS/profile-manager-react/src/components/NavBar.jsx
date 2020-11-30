import { NavLink} from 'react-router-dom';
function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
            <NavLink className="navbar-brand" to="/">Profile Manager</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/">Home <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/profiles/new">New Profile</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/feedback">Feedback</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;