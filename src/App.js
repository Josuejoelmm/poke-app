import React from 'react';
import { Provider } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import store from './redux/store';
import './App.css';
import HomeContainer from './containers/HomeContainer';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="/" component={HomeContainer} />
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
