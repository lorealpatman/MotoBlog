import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Topbar from './components/Topbar';
import HomePage from './pages/HomePage';
import SinglePostPage from './pages/SinglePostPage';
import WritePage from './pages/WritePage';
import SettingsPage from './pages/SettingsPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const App = () => {
  const currentUser = true;
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/posts'>
          <HomePage />
        </Route>
        <Route path='/register'>
          {currentUser ? <HomePage /> : <RegisterPage />}
        </Route>
        <Route path='/login'>
          {currentUser ? <HomePage /> : <LoginPage />}
        </Route>
        <Route path='/post/:id'>
          <SinglePostPage />
        </Route>
        <Route path='/write'>
          {currentUser ? <WritePage /> : <LoginPage />}
        </Route>
        <Route path='/settings'>
          {currentUser ? <SettingsPage /> : <LoginPage />}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
