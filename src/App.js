import './App.css';
import logo from './Imagens/Logo.jpg'

function App() {
  return (

    <>

    <body>

      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

      <div class="MainDivLogin">

        <img src={logo} alt='logo' class="logo"/>

        <h1 class="titulo">The Final Touch</h1>

        <form>

        <div class="InputContainer">

          <input type="email" name="user" id="EmailInput" class="TextInput" required="true"/>
          <label for="EmailInput">Email ou nome de usuário</label>

        </div>
        <div class="InputContainer"> 

          <input type="password" name="senha" id="PassInput" class="TextInput"required="true"/>
          <label for="PassInput">Senha</label>

        </div>

          <div class="btnLogin">

            <input type="submit" value="Login" class="Login"></input>
          
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
