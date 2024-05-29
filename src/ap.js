import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BarList from './components/BarList';
import BarForm from './components/BarForm';
import BeerOrder from './components/BeerOrder';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/add-bar" component={BarForm} />
          <Route path="/edit-bar/:id" component={BarForm} />
          <Route path="/order-beer" component={BeerOrder} />
          <Route path="/" component={BarList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
