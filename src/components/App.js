import React from "react";
import {BrowserRouter, Route} from 'react-router-dom';

const PageOne = () => {
  return (
      <div>
        PageOne
        {/*BAD !*/}
        <a href="/pagetwo">Navigate To Page Two</a>
      </div>
    );
};

const PageTwo = () => {
  return (
    <div>
      PageTwo
      <button>Click Me!</button>
      {/*BAD !*/}
      <a href="/">Navigate To Page One</a>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
          <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo" component={PageTwo} />
      </BrowserRouter>
    </div>
  );
}

export default App;