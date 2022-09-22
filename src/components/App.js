import React from "react";
import {Router, Route, Switch} from 'react-router-dom';
// Router Theory
// import {BrowserRouter, Route, Link} from 'react-router-dom';
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";
import history from '../history';
//#region Router Theory
// const PageOne = () => {
//   return (
//       <div>
//         PageOne
//         <Link to="/pagetwo">Navigate To Page Two</Link>
//       </div>
//     );
// };

// const PageTwo = () => {
//   return (
//     <div>
//       PageTwo
//       <button>Click Me!</button>
//       <Link to="/">Navigate To Page One</Link>
//     </div>
//   );
// };
//#endregion

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
          {/* Router Theory
          <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo" component={PageTwo} /> */}
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
            <Route path="/streams/:id" exact component={StreamShow} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;