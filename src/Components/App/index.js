/**
 * RODRIGO3D.COM
 *
 * @author Rodrigo Ribeiro - me@rodrigo3d.com
 * @see https://rodrigo3d.com
 * @see https://github.com/rodrigo3d/rodrigo3d.com/tree/strata
 */

import React from 'react';
import { HashRouter, BrowserRouter, Route } from 'react-router-dom';

import HomePage from '../Home';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path='/' component={() => <HomePage />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
