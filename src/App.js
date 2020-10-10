import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Main from "./containers/main";
import {Provider} from 'react-redux';
import {store} from "./store/store";
import Employee from "./containers/employee";
import Reservation from "./containers/reservation";
import Orders from "./containers/orders";

function App() {
  return (
      <Provider store={store}>
          <div className="App">
              <Router>
                  <Route path="/" exact component={Main}/>
                  <Route path="/employee" exact component={Employee}/>
                  <Route path="/reservation" exact component={Reservation}/>
                  <Route path="/orders" exact component={Orders}/>
              </Router>
          </div>
      </Provider>
  );
}

export default App;
