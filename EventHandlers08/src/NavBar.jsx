function NavBar(props){

    return (
        <div className="container bg-gradient-info">
        {/* <!--Navbar-->*/}
        <div className="row">
            <div className="col my-col">
                
                <nav className="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd;">
                  <a className="navbar-brand" href="#">Cutitronics Admin Screen</a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
            
                  <div className="collapse navbar-collapse" id="navbarsExample05">
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item active">
                        <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="https://cutitronics.com/">Cutitronics Website</a>
                      </li>
                      <li className="nav-item ml-auto">
                          <li className="nav-item text-nowrap">
                            <a className="nav-link" href="sign-in.html">Sign In</a>
                          </li>
                          <li className="nav-item text-nowrap">
                            <a className="nav-link disabled" href="#">Register</a>
                          </li>
                      </li>
                    </ul>
                  </div>
                </nav>
            </div>
        </div>
      </div>
    ); 
}

export { NavBar } from './NavBar.jsx';

