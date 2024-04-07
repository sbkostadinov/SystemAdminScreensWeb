function NavBar(props){

    return (
        //<!--Navbar-->
        <div class="row">
            <div class="col my-col">
                
                <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd;">
                  <a class="navbar-brand" href="#">Cutitronics Admin Screen</a>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
            
                  <div class="collapse navbar-collapse" id="navbarsExample05">
                    <ul class="navbar-nav mr-auto">
                      <li class="nav-item active">
                        <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://cutitronics.com/">Cutitronics Website</a>
                      </li>
                      <li class="nav-item ml-auto">
                          <li class="nav-item text-nowrap">
                            <a class="nav-link" href="sign-in.html">Sign In</a>
                          </li>
                          <li class="nav-item text-nowrap">
                            <a class="nav-link disabled" href="#">Register</a>
                          </li>
                      </li>
                    </ul>
                  </div>
                </nav>
            </div>
        </div>
    ); 
}

export { NavBar } from './NavBar.jsx';

