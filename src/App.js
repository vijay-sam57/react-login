import "./App.css";
import LoginForm from "./LoginForm";
import clgbg from "./clgbg.jpg";
import "./Responsive.css";

function App() {
  return (
    <div className="App">
      <div className="clg">
        <img src={clgbg} alt="A purple background"></img>
      </div>
      <div className="loginform">
        <LoginForm></LoginForm>
      </div>
    </div>
  );
}

export default App;
