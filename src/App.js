import React  from 'react';
import './App.scss';
import PasswordInput from './components/password-input/PasswordInput';


function App() {
  return (
    <div className="App">
       <PasswordInput 
          label="Enter Password" 
          placeholder="Placeholder.."
          validationConfig={{minLength: 10}}
          onChange={(v) => console.log('Password changed: ', v)}>
        </PasswordInput>
    </div>
  );
}

export default App;
