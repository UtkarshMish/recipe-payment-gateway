import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Browse from './components/Browse';
import Home from './components/Home';
import './App.css';
import Purchase from './components/Purchase';
import Message from './components/common/Message';
function App()
{
  return (
    <div className="App">
      <Switch>
        <Route path={"/transaction-details"} component={Message} exact />
        <Route path={"/buyItem"} component={Purchase} />
        <Route path={"/browse"} component={Browse} exact />
        <Route path={"/"} component={Home} />
      </Switch>
    </div>
  );
}

export default App;
