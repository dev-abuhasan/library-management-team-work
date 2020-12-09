import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './image/Logo/Logo.png';
// import AcUnitIcon from '@material-ui/icons/AcUnit';

function App() {
  return (
    <div className="">
      <header className="">
        <h3 className="bg-dark text-light">Team Work </h3>
        <div className="Logo_Img">
          <img src={Logo} alt="" />
        </div>
      </header>
    </div>
  );
}

export default App;
