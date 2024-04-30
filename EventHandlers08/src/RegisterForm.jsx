function RegisterForm () {

    return (
        <div>
            <head>
                <meta charset="utf-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
                <title></title>
                <meta name="description" content=""/>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

                {/*<!-- Bootstrap CSS -->*/}
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>-->
                
                
            </head>
            <body className="text-center bg-gradient-info">

                {/*<!--Register Form-->*/}
                <div className="row">
                    <div className="col justify-content-center">
                        <form id="registrationForm" className="form-signin">
                            <img className="mb-4" src="images/cutitronics-brand-logo.png" alt="" width="375" height="120"/>
                            <h1 className="h3 mb-3 font-weight-normal">Register as a system admin</h1>
                            
                            <label for="emailInputRegister" className="sr-only"> Email Address</label>
                            <input type="email" id="emailInputRegister" className="form-control" placeholder="Email Address" pattern=".*" required autofocus/>
                            
                            <label for="passwordInputRegister" className="sr-only">Password</label>
                            <input type="password" id="passwordInputRegister" className="form-control" placeholder="Password" pattern=".*" required/>
                            
                            <label for="password2InputRegister" className="sr-only">Confirm password</label>
                            <input type="password" id="password2InputRegister" className="form-control" placeholder="Confirm Password" pattern=".*" required/>
            
                            <input type="submit" className="btn btn-lg btn-primary btn-block" value="Register"/>
                            
                            <p className="mt-5 mb-3 text-muted">&copy; Cutitronics Ltd</p>
                        </form>
                    </div>
                </div>
            

                <script async src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
                <script async src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
                <script async src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
                <script async src="js/vendor/aws-cognito-sdk.min.js"></script>
                <script async src="js/vendor/amazon-cognito-identity.min.js"></script>
                <script async src="js/config.js"></script>
                <script async src="js/cognito-auth.js"></script>

            </body>
        </div>
        

    );

}

export { RegisterForm } from './RegisterForm.jsx';
