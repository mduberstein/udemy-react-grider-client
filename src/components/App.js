import React from "react";
import {MemoryRouter, Route, Link} from 'react-router-dom';

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
      <MemoryRouter>
          <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo" component={PageTwo} />
      </MemoryRouter>
    </div>
  );
}

export default App;