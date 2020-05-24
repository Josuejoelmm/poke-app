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
import PokemonDetails from './ui/components/PokemonDetails';
import Layout from './ui/components/Layout';

function App() {
    return (
        <Provider store={store}>
            <Layout>
                <Router>
                    <Switch>
                        <Route exact path="/" component={HomeContainer} />
                        <Route exact path="/pokemon/:Id" component={PokemonDetails} />
                    </Switch>
                </Router>
            </Layout>
        </Provider>
    );
}

export default App;
