import React from "react";
import {HashRouter, Route, Link} from 'react-router-dom';

const PageOne = () => {
  return (
      <div>
        PageOne
        <Link to="/pagetwo">Navigate To Page Two</Link>
      </div>
    );
};

const PageTwo = () => {
  return (
    <div>
      PageTwo
      <button>Click Me!</button>
      <Link to="/">Navigate To Page One</Link>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <HashRouter>
          <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo" component={PageTwo} />
      </HashRouter>
    </div>
  );
}

export default App;