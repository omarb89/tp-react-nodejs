import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BarPage from './pages/BarPage';
import BarForm from './components/BarForm';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/bars/:id" component={BarPage} />
        <Route path="/add-bar" component={BarForm} />

      </Switch>
    </Router>
  );
};

export default App;
