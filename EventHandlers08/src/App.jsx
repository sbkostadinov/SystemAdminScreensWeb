import { RegisterForm } from './RegisterForm.jsx';

export const user  = {
  name: '',
};

function App() {
  // Your goal: This function should be called WITH A VALUE for name when the <button> is clicked

  function handleCreateUser(name){
    user.name = name;
    console.log(name);
  }

  return (
    <div id="app">

      <RegisterForm>Register</RegisterForm>  
    </div>


  );
}

export default App;
