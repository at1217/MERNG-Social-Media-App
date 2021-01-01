import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import MenuBar from './components/MenuBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

import { AuthProvider } from './context/auth';
import AuthRoute from './util/AuthRoute';


function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="ui container">
          <Container>
            <MenuBar />
            <Route exact path='/' component={Home} />
            <AuthRoute exact path='/login' component={Login} />
            <AuthRoute exact path='/register' component={Register} />
          </Container>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
