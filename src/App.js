
import './App.css';
import { HomePage } from './container/HomePage';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { CustomerAccessPage } from './container/customerAccessPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/customer/access/:action" component={CustomerAccessPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
