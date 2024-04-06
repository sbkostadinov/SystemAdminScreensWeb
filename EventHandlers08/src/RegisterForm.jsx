export default function RegisterForm ({name, password, email}) {

    return (

        //<!--Register Form-->
        <div class="row">
            
            <div class="col justify-content-center">
                <form id="registrationForm" class="form-signin">
                    <img class="mb-4" src="images/cutitronics-brand-logo.png" alt="" width="375" height="120">
                    <h1 class="h3 mb-3 font-weight-normal">Register as a system admin</h1>
                    
                    <label for="emailInputRegister" class="sr-only"> Email Address</label>
                    <input type="email" id="emailInputRegister" class="form-control" placeholder="Email Address" pattern=".*" required autofocus>
                    
                    <label for="passwordInputRegister" class="sr-only">Password</label>
                    <input type="password" id="passwordInputRegister" class="form-control" placeholder="Password" pattern=".*" required>
                    
                    <label for="password2InputRegister" class="sr-only">Confirm password</label>
                    <input type="password" id="password2InputRegister" class="form-control" placeholder="Confirm Password" pattern=".*" required>
    
                    <input type="submit" class="btn btn-lg btn-primary btn-block" value="Register">
                    
                    <p class="mt-5 mb-3 text-muted">&copy; Cutitronics Ltd</p>
                </form>
            </div>
        </div>
    

    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script src="js/vendor/aws-cognito-sdk.min.js"></script>
    <script src="js/vendor/amazon-cognito-identity.min.js"></script>
    <script src="js/config.js"></script>
    <script src="js/cognito-auth.js"></script>
    );

}

export { RegisterForm } from './RegisterForm.jsx';
