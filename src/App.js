import { useState } from 'react';
import './App.css';
import logo from './Imagens/Logo.png'

function App() {

  const [inputValue, setInputValue] = useState('');

      const handleInputChange = (event) => {
        setInputValue(event.target.value); // Atualiza o valor do campo de entrada
      };

  const [inputValue2, setInputValue2] = useState('');

      const handleInputChange2 = (event) => {
        setInputValue2(event.target.value); // Atualiza o valor do campo de entrada
      };

  return (

    <>

    <body>

      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

      <div class="bodycontainer"></div>

      <div class="MainDivLogin">

        <img src={logo} alt='logo' class="logo" draggable="false"/>

        <h1 class="titulo oswald-large">The Final Touch</h1>

        <form>

        <div class="InputContainer reddit-mono-medium">

          <input type="email" name="user" id="EmailInput" class="TextInput" required="true" onChange={handleInputChange}/>
          <label for="EmailInput" className={inputValue !== '' ? "ativado" : "desativado"}>Email ou nome de usuário</label>

        </div>
        <div class="InputContainer reddit-mono-medium"> 

          <input type="password" name="senha" id="PassInput" class="TextInput"required="true" onChange={handleInputChange2}/>
          <label for="PassInput" className={inputValue2 !== '' ? "ativado" : "desativado"}>Senha</label>

        </div>

          <div class="btnLogin">

            <input type="submit" value="Log in" class="Login"></input>
          
          </div>

          <div class="btnSignin">

            <input type="submit" value="Sign in" class="Signin"></input>
          
          </div>

        </form>


        </div>


      </body>

      </>
  );
  
}

export default App;
