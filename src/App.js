import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './Component/ContextApi/AuthData/Login';
import Home from './Component/Pages/Home/Home';
import { ExtraDataProvider } from './Component/ContextApi/ExtraData/ExtraData';
import { UserAuthProvider } from './Component/ContextApi/AuthData/Auth';
import NotFoundPages from './Component/Pages/SherCompo/NotFoundPages';
import Dashboard from './Component/Pages/Dashboard/Dashboard';
import PrivateRoute from './Component/ContextApi/AuthData/PrivateRoute';


function App() {
  return (
    <ExtraDataProvider>
      <UserAuthProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />;
            <Route exact path="/home" component={Home} />;

            <PrivateRoute exact path="/dashboard">
              <Dashboard />
            </PrivateRoute>

            <Route path="/login" component={Login} />;
            <Route path="*" component={NotFoundPages} />
          </Switch>
        </Router>
      </UserAuthProvider>
    </ExtraDataProvider>
  );
}

export default App;
