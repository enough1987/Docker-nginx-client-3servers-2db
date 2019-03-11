import React, { Component } from 'react';

import { Switch, Route, Link } from 'react-router-dom';

import Algorithms from './Algorithms';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            nginx + 3 servers + client + 2 db
          </p>
          <ul>
             <li>
                <Link to={`/`}>Main</Link>
             </li>
             <li>
                <Link to={`/algorithms`}>Algorithms</Link>
             </li>
          </ul>
        </header>

        <main>
          <Switch>
            <Route exact path='/' component={Main}/>
            <Route exact path='/algorithms' component={Algorithms}/>
          </Switch>
        </main>

      </div>
    );
  }
}

export default App;
