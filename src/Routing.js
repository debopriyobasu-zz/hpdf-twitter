import React from 'react';
import Home from "./Home.js";
import {Search} from "./Search.js";
import { withRouter, Route } from 'react-router-dom';
const Routing = () => (
      <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search}/>
          <Route exact path="/search/:query" component={Search}/>
      </div>
  );
   export default withRouter(Routing);
