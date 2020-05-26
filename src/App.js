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
import PokemonDetailsContainer from './containers/PokemonDetailsContainer';
import Layout from './ui/components/Layout';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={HomeContainer} />
                        <Route exact path="/pokemon/:Id" component={PokemonDetailsContainer} />
                    </Switch>
                </Layout>
            </Router>
        </Provider>
    );
}

export default App;
