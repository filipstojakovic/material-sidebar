import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {CssBaseline} from "@mui/material";
import {persistor, store} from "./redux/store";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    [
        <Provider store={store} key="app-key">
            <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
                <App/>
            </PersistGate>
        </Provider>
        , <CssBaseline key="css-baseline"/>
    ]
);
