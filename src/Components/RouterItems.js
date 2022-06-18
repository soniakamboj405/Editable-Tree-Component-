import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import Page1 from "./InnerComponents/Page1";
import Page2 from "./InnerComponents/Page2";


export default function RouterItems() {
    return (
      <Router>
        <Card>
        <CardContent style={{padding: "16px"}}>
          <ul className="top-item-list">
            <li>
              <Link to="/item1">Item1</Link>
            </li>
            <li>
              <Link to="/item2">Item2</Link>
            </li>
            <li>
              <Link to="/item3">Item3</Link>
            </li>
          </ul>
  
          <Switch>
            <Route path="/item1">
              <Page1 />
            </Route>
            <Route path="/item2">
              <Page2 />
            </Route>
            <Route path="/item3">
              <Page2 />
            </Route>
          </Switch>
          </CardContent>
      </Card>
      </Router>
    );
  }