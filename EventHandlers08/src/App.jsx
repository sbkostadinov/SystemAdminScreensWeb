import { UserName }  from './UserName.jsx';

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
      <h1>User Login</h1>
      <p>
        <label>Name</label>
        {/* You don't need to do anything with this input! You'll learn how to handle user input later */}
        <input type="text" />
      </p>
      {/*Passing anonnomus function with handleCreateUser(name) function as an argument to setUserName prop for UserName component*/}
      <p id="actions">
         <UserName selectSetUserName= { () => handleCreateUser("CantStandMyself")}>Component</UserName>
        {"Fantastic World it is"}
      </p>
      
    </div>
  );
}

export default App;
