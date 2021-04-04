import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import FullPageLoader from "./components/FullPageLoader";
import BlocksFeed from "./containers/BlocksFeed";
import BlockDetails from "./containers/BlockDetails"

const App = () => {
  return (
    <Suspense fallback={FullPageLoader}>
      <Switch>
        <Route exact path="/" component={BlocksFeed} />
        <Route path="/blocks/:hash" component={BlockDetails} />
      </Switch>
    </Suspense>
  );
};

export default App;