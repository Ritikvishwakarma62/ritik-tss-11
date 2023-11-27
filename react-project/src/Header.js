let Header = ()=>{
    return(
        <>
                    <nav className="navbar bg-warning navbar-dark navbar-expand-sm">
                <div className="container">
                <i class="fa fa-leaf fa-2x text-light" aria-hidden="true"></i>
                <div className="navbar-brand">
                  <b><h5>Nature</h5></b></div>
                <button className="navbar-toggler" data-bs-toggle="collapse"         data-bs-target="#navbar" >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="navbar" className=" navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li className="nav-item">
                            <a href="/" className="nav-link text-light"><b>Home</b></a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link text-light"><b>About</b></a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link text-light"><b>Contact</b></a>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
        
        </>
    )
}

export default Header