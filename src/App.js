import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Forum from './views/Forum';
import Map from './views/Map';
import Wrong from './views/Wrong';


class App extends React.Component {
  componentDidMount() {
    const common = document.createElement("script"),
          mainJs = document.createElement("script");
    common.src = "/assets/scripts/common.min.js";
    mainJs.src = "/assets/scripts/main.js";
    common.async = true;
    mainJs.async = true;
    document.body.appendChild(common);
    document.body.appendChild(mainJs);
  }
  render() {
    return (
      <BrowserRouter>
          <Switch>
            <Route path={"/"} exact component={Forum} />
            <Route path={"/map"} component={Map} />
            <Route path={"*"} component={Wrong} />
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
